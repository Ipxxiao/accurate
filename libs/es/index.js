/**
 * accurate module.
 * @module accurate
 * @see doc https://github.com/Ipxxiao/accurate/tree/master/docs
 */
import { add, subtract, multiply, division, modulo } from './calc';
// 分隔符
const DELIMITERS = {
    '(': true,
    ')': true,
    '+': true,
    '-': true,
    '*': true,
    '/': true,
    '%': true,
};
/**
 * 获取表达式数组
 *
 * @param {string} expr
 * @returns {string[]}
 */
const getExprArray = (expr) => {
    // 表达式分隔为数组
    const originalArr = String(expr).replace(/([\(\)\+\-\*/%])/g, ',$1,').split(',');
    // 按计算顺序，组成多维数组
    let exprArr = [];
    // 存储分隔的子数组
    let sub = {};
    // 子数组键值集
    let keys = [];
    // 子数组键值的索引
    let idx = -1;
    for (const i in originalArr) {
        const item = originalArr[i].trim();
        // 当前指向的子数组键值
        let point;
        if (item === '') {
            continue;
        }
        else if (DELIMITERS[item]) {
            switch (item) {
                case '(':
                    point = keys[idx];
                    // 创建子数组（优先计算）
                    sub[i] = [];
                    // 指向子数组
                    if (idx >= 0) {
                        sub[point].push(sub[i]);
                    }
                    else {
                        exprArr.push(sub[i]);
                    }
                    // 数组维度加1
                    keys.splice(++idx, 0, i);
                    break;
                case '*':
                case '/':
                case '%':
                    point = keys[idx];
                    // 指向子数组
                    if (idx >= 0) {
                        // 存在表达式
                        if (sub[point].length > 2) {
                            // 数组维度加1
                            keys.splice(++idx, 0, i);
                            // 创建子数组（优先计算）
                            sub[i] = [];
                            // 从上个数组取出末尾的计算项
                            sub[i].push(sub[point].pop());
                            sub[i].push(item);
                            sub[point].push(sub[i]);
                        }
                        else {
                            sub[point].push(item);
                        }
                    }
                    // 存在表达式
                    else if (exprArr.length > 2) {
                        // 数组维度加1
                        keys.splice(++idx, 0, i);
                        // 创建子数组（优先计算）
                        sub[i] = [];
                        // 从表达式数组取出末尾的计算项
                        sub[i].push(exprArr.pop());
                        sub[i].push(item);
                        exprArr.push(sub[i]);
                    }
                    else {
                        exprArr.push(item);
                    }
                    break;
                case '+':
                case '-':
                    // 指向子数组
                    if (idx >= 0) {
                        sub[keys[idx]].push(item);
                    }
                    else {
                        exprArr.push(item);
                    }
                    break;
                case ')':
                    // 数组维度减1
                    --idx;
                    break;
            }
        }
        else if (Number.isFinite(Number(item))) {
            point = keys[idx];
            // 指向子数组
            if (idx >= 0) {
                // 前一个索引
                const prevIdx = idx - 1;
                // 子数组最后一项的索引
                const lastIdx = sub[point].length - 1;
                sub[point].push(item);
                switch (sub[point][lastIdx]) {
                    case '*':
                    case '/':
                    case '%':
                        // 前一个为子数组，并且存在表达式（有过优先计算）
                        if (prevIdx >= 0 && sub[keys[prevIdx]].length >= 2) {
                            // 数组维度减1
                            --idx;
                        }
                        break;
                    default:
                        break;
                }
            }
            else {
                exprArr.push(item);
            }
        }
        else {
            break;
        }
    }
    return exprArr;
};
/**
 * 表达式数组计算
 *
 * @param {string[]} exprArray
 * @returns {number}
 */
const exprArrayCalc = (exprArray) => {
    const result = exprArray.reduce((accum, item, index, array) => {
        if (DELIMITERS[item]) {
            const prevIdx = index - 1;
            const nextIdx = index + 1;
            const prev = array[prevIdx];
            const next = array[nextIdx];
            let num1, num2;
            if (Array.isArray(prev)) {
                // 递归
                num1 = exprArrayCalc(prev);
                // 数组项更新为计算结果
                array[prevIdx] = String(num1);
            }
            else if (prevIdx > 0) {
                // 前面存在累计值，使用累计值
                num1 = accum;
            }
            else {
                num1 = Number(prev);
            }
            if (Array.isArray(next)) {
                // 递归
                num2 = exprArrayCalc(next);
                // 数组项更新为计算结果
                array[nextIdx] = String(num2);
            }
            else {
                num2 = Number(next);
            }
            switch (item) {
                case '+':
                    accum = calcAdd(num1, num2);
                    break;
                case '-':
                    accum = calcSubtract(num1, num2);
                    break;
                case '*':
                    accum = calcMul(num1, num2);
                    break;
                case '/':
                    accum = calcDivision(num1, num2);
                    break;
                case '%':
                    accum = calcModulo(num1, num2);
                    break;
            }
        }
        return accum;
    }, 0);
    return result;
};
/**
 * 扁平化数组
 *
 * @param {Function} calc
 * @param {...number[]} args
 * @returns {number}
 */
const flat = (calc, ...args) => {
    if (args.length) {
        if (args.length === 1) {
            if (Array.isArray(args[0])) {
                // 递归
                return flat(calc, ...args[0]);
            }
            else {
                return args[0];
            }
        }
        else {
            return args.reduce((accum, item) => {
                if (Array.isArray(accum)) {
                    // 递归
                    return flat(calc, ...accum, item);
                }
                else if (Array.isArray(item)) {
                    // 递归
                    return flat(calc, accum, ...item);
                }
                else {
                    return calc(accum, item);
                }
            });
        }
    }
    else {
        return NaN;
    }
};
/**
 * 精度加法计算
 *
 * @example
 * ```js
 * calcAdd(1.1, 0.3, 0.1)
 * //=> 1.5
 * ```
 *
 * @param {...number[]} args
 * @returns {number}
 */
const calcAdd = (...args) => {
    return flat(add, ...args);
};
/**
 * 精度减法计算
 *
 * @example
 * ```js
 * calcSubtract(1.1, 0.2, 0.1)
 * //=> 0.8
 * ```
 *
 * @param {...number[]} args
 * @returns {number}
 */
const calcSubtract = (...args) => {
    return flat(subtract, ...args);
};
/**
 * 精度乘法计算
 *
 * @example
 * ```js
 * calcMultiply(1.1, 0.1, 0.2)
 * //=> 0.022
 * ```
 *
 * @param {...number[]} args
 * @returns {number}
 */
const calcMultiply = (...args) => {
    return flat(multiply, ...args);
};
const calcMul = calcMultiply;
/**
 * 精度除法计算
 *
 * @example
 * ```js
 * calcDivision(1.1, 10, 2)
 * //=> 0.055
 * ```
 *
 * @param {...number[]} args
 * @returns {number}
 */
const calcDivision = (...args) => {
    return flat(division, ...args);
};
/**
 * 精度取模计算
 *
 * @example
 * ```js
 * calcModulo(1.1, 1)
 * //=> 0.1
 * ```
 *
 * @param {...number[]} args
 * @returns {number}
 */
const calcModulo = (...args) => {
    return flat(modulo, ...args);
};
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
const calcExpr = (expr) => {
    const exprArr = getExprArray(expr);
    if (exprArr.length) {
        return exprArrayCalc(exprArr);
    }
    else {
        return NaN;
    }
};
export { calcAdd, calcSubtract, calcMul, calcMultiply, calcDivision, calcModulo, calcExpr, };
export default {
    add: calcAdd,
    subtract: calcSubtract,
    mul: calcMul,
    multiply: calcMultiply,
    division: calcDivision,
    modulo: calcModulo,
    expr: calcExpr,
};
//# sourceMappingURL=index.js.map