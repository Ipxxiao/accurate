/**
 * accurate module.
 * @module accurate
 * @see doc https://github.com/Ipxxiao/accurate/tree/master/docs
 */

import { add, subtract, multiply, division, modulo } from './calc'
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
    if (args.length) {
        if (args.length === 1) {
            if (Array.isArray(args[0])) {
                // 递归
                return flat(calc, ...args[0])
            } else {
                return args[0]
            }
        } else {
            return args.reduce((accum, item) => {
                if (Array.isArray(accum)) {
                    // 递归
                    return flat(calc, ...accum, item)
                } else if (Array.isArray(item)) {
                    // 递归
                    return flat(calc, accum, ...item)
                } else {
                    return calc(accum, item)
                }
            })
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
 * calcAdd(1.1, 0.3, 0.1)
 * //=> 1.5
 * ```
 *
 * @param {...number[]} args
 * @returns {number}
 */
const calcAdd: CalcFunc = (...args: number[]): number => {
    return flat(add, ...args)
}

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
const calcSubtract: CalcFunc = (...args: number[]): number => {
    return flat(subtract, ...args)
}

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
const calcMultiply: CalcFunc = (...args: number[]): number => {
    return flat(multiply, ...args)
}
const calcMul = calcMultiply

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
const calcDivision: CalcFunc = (...args: number[]): number => {
    return flat(division, ...args)
}
const calcDivide = calcDivision

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
const calcModulo: CalcFunc = (...args: number[]): number => {
    return flat(modulo, ...args)
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
    calcDivide,
    calcModulo,
    calcExpr,
};

export default {
    add: calcAdd,
    subtract: calcSubtract,
    mul: calcMul,
    multiply: calcMultiply,
    division: calcDivision,
    divide: calcDivide,
    modulo: calcModulo,
    expr: calcExpr,
};