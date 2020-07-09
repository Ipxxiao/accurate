import { add, subtract, multiply, division, modulo } from './core'

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
 * 获取表达式数组
 *
 * @param {string} expr
 * @returns {string[]}
 */
export const getExprArray = (expr: string): string[] => {
    // 表达式分隔为数组
    const originalArr: string[] = String(expr).replace(/([\(\)\+\-\*/%])/g, ',$1,').split(',')
    // 按计算顺序，组成多维数组
    let exprArr: string[] = []
    // 存储分隔的子数组
    let sub: object = {}
    // 子数组键值集
    let keys: string[] = []
    // 子数组键值的索引
    let idx: number = -1

    for (const i in originalArr) {
        const item: string = originalArr[i].trim()
        // 当前指向的子数组键值
        let point: string

        if (item === '') {
            continue
        } else if (DELIMITERS[item]) {
            switch (item) {
                case '(':
                    point = keys[idx]
                    // 创建子数组（优先计算）
                    sub[i] = []

                    // 指向子数组
                    if (idx >= 0) {
                        sub[point].push(sub[i])
                    } else {
                        exprArr.push(sub[i])
                    }

                    // 数组维度加1
                    keys.splice(++idx, 0, i)
                    break;

                case '*':
                case '/':
                case '%':
                    point = keys[idx]

                    // 指向子数组
                    if (idx >= 0) {
                        // 存在表达式
                        if (sub[point].length > 2) {
                            // 数组维度加1
                            keys.splice(++idx, 0, i)
                            // 创建子数组（优先计算）
                            sub[i] = []
                            // 从上个数组取出末尾的计算项
                            sub[i].push(sub[point].pop())
                            sub[i].push(item)
                            sub[point].push(sub[i])
                        } else {
                            sub[point].push(item)
                        }
                    }
                    // 存在表达式
                    else if (exprArr.length > 2) {
                        // 数组维度加1
                        keys.splice(++idx, 0, i)
                        // 创建子数组（优先计算）
                        sub[i] = []
                        // 从表达式数组取出末尾的计算项
                        sub[i].push(exprArr.pop())
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
                        sub[keys[idx]].push(item)
                    } else {
                        exprArr.push(item)
                    }
                    break;

                case ')':
                    // 数组维度减1
                    --idx
                    break;
            }
        } else if (Number.isFinite(Number(item))) {
            point = keys[idx]

            // 指向子数组
            if (idx >= 0) {
                // 前一个索引
                const prevIdx: number = idx - 1
                // 子数组最后一项的索引
                const lastIdx: number = sub[point].length - 1

                sub[point].push(item)

                switch (sub[point][lastIdx]) {
                    case '*':
                    case '/':
                    case '%':

                        // 前一个为子数组，并且存在表达式（有过优先计算）
                        if (prevIdx >= 0 && sub[keys[prevIdx]].length >= 2) {
                            // 数组维度减1
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
export const exprArrayCalc = (exprArray: string[]): number => {
    let accum: number = Number(exprArray[0])

    for (let i: number = 0, len = exprArray.length; i < len; i++) {
        const item: string = exprArray[i]

        if (DELIMITERS[item]) {
            const prevIdx: number = i - 1
            const nextIdx: number = i + 1
            const prev: string | string[] = exprArray[prevIdx]
            const next: string | string[] = exprArray[nextIdx]
            let num1: number,
                num2: number

            if (Array.isArray(prev)) {
                // 递归
                num1 = exprArrayCalc(prev)
                // 数组项更新为计算结果
                exprArray[prevIdx] = String(num1)
            } else if (prevIdx > 0) {
                // 前面存在累计值，使用累计值
                num1 = accum
            } else {
                num1 = Number(prev)
            }

            if (Array.isArray(next)) {
                // 递归
                num2 = exprArrayCalc(next)
                // 数组项更新为计算结果
                exprArray[nextIdx] = String(num2)
            } else {
                num2 = Number(next)
            }

            switch (item) {
                case '+':
                    accum = add(num1, num2)
                    break;

                case '-':
                    accum = subtract(num1, num2)
                    break;

                case '*':
                    accum = multiply(num1, num2)
                    break;

                case '/':
                    accum = division(num1, num2)
                    break;

                case '%':
                    accum = modulo(num1, num2)
                    break;
            }
        }
    }

    return accum
}