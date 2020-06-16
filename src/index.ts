/**
 * accurate module.
 * @module accurate
 * @see doc https://github.com/Ipxxiao/accurate/tree/master/docs
 */

// 分隔符
const DELIMITERS = {
    '(': true,
    ')': true,
    '+': true,
    '-': true,
    '*': true,
    '/': true,
    '%': true,
}

/**
 * 获取小数位数
 *
 * @param {number} num
 * @returns {number}
 */
const getDecimalDigits = (num: number): number => {
    try {
        return num.toString().split('.')[1].length;
    } catch (e) {
        return 0;
    }
}

/**
 * 获取表达式数组
 *
 * @param {string} expr
 * @returns {string[]}
 */
const getExprArray = (expr: string): string[] => {
    // 分隔为数组
    const originalArr = String(expr).replace(/([\(\)\+\-\*/%])/g, ',$1,').split(',')
    // 按计算顺序，组成多维数组
    let exprArr = []
    // 按计算顺序，分隔的子数组
    let sub = {}
    // 分隔的子数组keys
    let idxs: any[] = []
    // 分隔的子数组的索引
    let idx = -1

    for (let i in originalArr) {
        let item = originalArr[i].trim()

        if (item === '') {
            continue
        } else if (DELIMITERS[item]) {
            let point

            switch (item) {
                case '(':
                    point = idxs[idx]
                    sub[i] = []

                    // 指向子数组
                    if (idx >= 0) {
                        idxs.splice(++idx, 0, i)
                        sub[point].push(sub[i])
                    } else {
                        idxs.splice(++idx, 0, i)
                        exprArr.push(sub[i])
                    }
                    break;

                case '*':
                case '/':
                case '%':
                    point = idxs[idx]

                    // 指向子数组
                    if (idx >= 0) {
                        // 前面存在表达式
                        if (sub[point].length > 2) {
                            idxs.splice(++idx, 0, i)
                            sub[i] = []
                            sub[i].push(sub[point].pop()) // 从上个数组取出末尾的计算项
                            sub[i].push(item)
                            sub[point].push(sub[i])
                        } else {
                            sub[point].push(item)
                        }
                    } else if (exprArr.length > 2) {
                        idxs.splice(++idx, 0, i)
                        sub[i] = []
                        sub[i].push(exprArr.pop()) // 从表达式数组取出末尾的计算项
                        sub[i].push(item)
                        exprArr.push(sub[i])
                    } else {
                        exprArr.push(item)
                    }
                    break;

                case '+':
                case '-':
                    // 指向子数组
                    if (idx >= 0) {
                        sub[idxs[idx]].push(item)
                    } else {
                        exprArr.push(item)
                    }
                    break;

                case ')':
                    --idx
                    break;
            }
        } else if (Number.isFinite(Number(item))) {
            // 指向子数组
            if (idx >= 0) {
                const point = idxs[idx]
                const len = sub[point].length

                sub[point].push(item)
                switch (sub[point][len - 1]) {
                    case '*':
                    case '/':
                    case '%':
                        // 索引前一个值指向子数组，与前面存在表达式
                        if (idx - 1 >= 0 && sub[idxs[idx - 1]].length >= 2) {
                            --idx
                        }
                        break;

                    default:
                        break;
                }
            } else {
                exprArr.push(item)
            }
        } else {
            break
        }
    }

    return exprArr
}

/**
 * 表达式数组计算
 *
 * @param {string[]} exprArray
 * @returns {number}
 */
const exprArrayCalc = (exprArray: string[]): number => {
    const result = exprArray.reduce((accum, item, index, array) => {
        if (DELIMITERS[item]) {
            const prev = array[index - 1]
            const next = array[index + 1]
            let a, b

            if (Array.isArray(prev)) {
                a = exprArrayCalc(prev)

                // 数组项更新为计算结果
                array[index - 1] = String(a)
            } else if (index - 1 > 0) {
                // 前面存在累计值
                a = accum
            } else {
                a = Number(prev)
            }

            if (Array.isArray(next)) {
                b = exprArrayCalc(next)

                // 数组项更新为计算结果
                array[index + 1] = String(b)
            } else {
                b = Number(next)
            }

            switch (item) {
                case '+':
                    accum = calcAdd(a, b)
                    break;

                case '-':
                    accum = calcSubtract(a, b)
                    break;

                case '*':
                    accum = calcMul(a, b)
                    break;

                case '/':
                    accum = calcDivision(a, b)
                    break;

                case '%':
                    accum = calcModulo(a, b)
                    break;
            }
        }

        return accum
    }, 0)

    return result
}

/**
 * 精度加法计算
 *
 * @example
 * ```js
 * calcAdd(1.1, 0.3)
 * //=> 1.4
 * ```
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
const calcAdd = (num1: number, num2: number): number => {
    num1 = Number(num1);
    num2 = Number(num2);

    let temp: number = 0,
        l1: number = 0,
        l2: number = 0,
        m: number = 0;

    l1 = getDecimalDigits(num1);
    l2 = getDecimalDigits(num2);

    m = 10 ** Math.max(l1, l2);
    temp = calcMul(num1, m) + calcMul(num2, m);

    return temp / m;
}

/**
 * 精度减法计算
 *
 * @example
 * ```js
 * calcSubtract(1.1, 0.2)
 * //=> 0.9
 * ```
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
const calcSubtract = (num1: number, num2: number): number => {
    num1 = Number(num1);
    num2 = Number(num2);

    return calcAdd(num1, -num2);
}

/**
 * 精度乘法计算
 *
 * @example
 * ```js
 * calcMultiply(1.1, 0.1)
 * //=> 0.11
 * ```
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
const calcMultiply = (num1: number, num2: number): number => {
    num1 = Number(num1);
    num2 = Number(num2);

    let temp: number = 0,
        l1: number = 0,
        l2: number = 0,
        m: number = 0,
        s1: string = num1.toString(),
        s2: string = num2.toString();

    l1 = getDecimalDigits(num1);
    l2 = getDecimalDigits(num2);

    m = 10 ** (l1 + l2);
    temp = Number.parseInt(s1.replace('.', '')) * Number.parseInt(s2.replace('.', ''));

    return temp / m;
}
const calcMul = calcMultiply

/**
 * 精度除法计算
 *
 * @example
 * ```js
 * calcDivision(1.1, 10)
 * //=> 0.11
 * ```
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
const calcDivision = (num1: number, num2: number): number => {
    num1 = Number(num1);
    num2 = Number(num2);

    let temp: number = 0,
        l1: number = 0,
        l2: number = 0,
        m: number = 0,
        s1: string = num1.toString(),
        s2: string = num2.toString();

    l1 = getDecimalDigits(num1);
    l2 = getDecimalDigits(num2);

    m = 10 ** (l2 - l1);
    temp = Number.parseInt(s1.replace('.', '')) / Number.parseInt(s2.replace('.', ''));

    return calcMul(temp, m);
}

/**
 * 精度取模计算
 *
 * @example
 * ```js
 * calcModulo(1.1, 1)
 * //=> 0.1
 * ```
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
const calcModulo = (num1: number, num2: number): number => {
    num1 = Number(num1);
    num2 = Number(num2);

    let temp: number = 0,
        l1: number = 0,
        l2: number = 0,
        m: number = 0;

    l1 = getDecimalDigits(num1);
    l2 = getDecimalDigits(num2);

    m = 10 ** Math.max(l1, l2);
    num1 = calcMul(num1, m);
    num2 = calcMul(num2, m);
    temp = num1 % num2;

    return temp / m;
}

/**
 * 算术表达式计算
 *
 * @example
 * ```js
 * calcExpr('((1.1+0.3)*4+2*3)/(3-1*0.1)-1*5')
 * //=> -1
 * ```
 *
 * @param {string} expr
 * @returns {number}
 */
const calcExpr = (expr: string): number => {
    const exprArr = getExprArray(expr)

    if (exprArr.length) {
        return exprArrayCalc(exprArr)
    } else {
        return NaN
    }
}

export {
    calcAdd,
    calcSubtract,
    calcMul,
    calcMultiply,
    calcDivision,
    calcModulo,
    calcExpr,
};

export default {
    add: calcAdd,
    subtract: calcSubtract,
    mul: calcMul,
    multiply: calcMultiply,
    division: calcDivision,
    modulo: calcModulo,
    expr: calcExpr,
};