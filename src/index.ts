/**
 * accurate module.
 * @module accurate
 * @see doc https://github.com/Ipxxiao/accurate/tree/master/docs
 */

import calc from './calc'
import { getExprArray, exprArrayCalc } from './expr'

interface CalcFunc {
    <T>(arg: T): number
    <T>(...args: T[] | number[]): number
}

/**
 * 扁平化数组
 *
 * @param {Function} calc
 * @param {...number[]} args
 * @returns {number}
 */
const flat = (calc: Function, ...args: number[]): number => {
    const len: number = args.length
    const first: number | number[] = args[0]
    let accum = first

    if (len) {
        if (len === 1) {
            if (Array.isArray(first)) {
                // 递归
                return flat(calc, ...first)
            } else {
                return first
            }
        } else {
            for (let i = 1; i < len; i++) {
                const item: number | number[] = args[i]

                if (Array.isArray(accum)) {
                    // 递归
                    accum = flat(calc, ...accum, item)
                } else if (Array.isArray(item)) {
                    // 递归
                    accum = flat(calc, accum, ...item)
                } else {
                    accum = calc(accum, item)
                }
            }

            return accum
        }
    } else {
        return NaN
    }
}

/**
 * 精度加法计算
 *
 * @example
 * ```js
 * add(1.1, 0.3, 0.1)
 * //=> 1.5
 * ```
 *
 * @param {...number[]} args
 * @returns {number}
 */
const add: CalcFunc = (...args: number[]): number => {
    return flat(calc.add, ...args)
}

/**
 * 精度减法计算
 *
 * @example
 * ```js
 * subtract(1.1, 0.2, 0.1)
 * //=> 0.8
 * ```
 *
 * @param {...number[]} args
 * @returns {number}
 */
const subtract: CalcFunc = (...args: number[]): number => {
    return flat(calc.subtract, ...args)
}

/**
 * 精度乘法计算
 *
 * @example
 * ```js
 * multiply(1.1, 0.1, 0.2)
 * //=> 0.022
 * ```
 *
 * @param {...number[]} args
 * @returns {number}
 */
const multiply: CalcFunc = (...args: number[]): number => {
    return flat(calc.multiply, ...args)
}
const mul = multiply

/**
 * 精度除法计算
 *
 * @example
 * ```js
 * division(1.1, 10, 2)
 * //=> 0.055
 * ```
 *
 * @param {...number[]} args
 * @returns {number}
 */
const division: CalcFunc = (...args: number[]): number => {
    return flat(calc.division, ...args)
}
const divide = division

/**
 * 精度取模计算
 *
 * @example
 * ```js
 * modulo(1.1, 1)
 * //=> 0.1
 * ```
 *
 * @param {...number[]} args
 * @returns {number}
 */
const modulo: CalcFunc = (...args: number[]): number => {
    return flat(calc.modulo, ...args)
}

/**
 * 算术表达式计算
 *
 * @example
 * ```js
 * expr('((1.1+0.3)*4+2*3)/(3-1*0.1)-1*5')
 * //=> -1
 * ```
 *
 * @param {string} expr
 * @returns {number}
 */
const expr = (expr: string): number => {
    const exprArr = getExprArray(expr)

    if (exprArr.length) {
        return exprArrayCalc(exprArr)
    } else {
        return NaN
    }
}

export {
    add,
    subtract,
    multiply,
    mul,
    division,
    divide,
    modulo,
    expr,
};

export default {
    add,
    subtract,
    multiply,
    mul,
    division,
    divide,
    modulo,
    expr,
};