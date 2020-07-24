/**
 * accurate module.
 * @module accurate
 * @see doc https://github.com/Ipxxiao/accurate/tree/master/docs
 */
import calc from 'accurate-core';
import { getExprArray, exprArrayCalc } from './expr';
/**
 * 扁平化数组
 *
 * @param {Function} calc
 * @param {...number[]} args
 * @returns {number}
 */
const flat = (calc, ...args) => {
    const len = args.length;
    const first = args[0];
    let accum = first;
    if (len) {
        if (len === 1) {
            if (Array.isArray(first)) {
                // 递归
                return flat(calc, ...first);
            }
            else {
                return first;
            }
        }
        else {
            for (let i = 1; i < len; i++) {
                const item = args[i];
                if (Array.isArray(accum)) {
                    // 递归
                    accum = flat(calc, ...accum, item);
                }
                else if (Array.isArray(item)) {
                    // 递归
                    accum = flat(calc, accum, ...item);
                }
                else {
                    accum = calc(accum, item);
                }
            }
            return accum;
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
 * add(1.1, 0.3, 0.1)
 * //=> 1.5
 * ```
 *
 * @param {...number[]} args
 * @returns {number}
 */
export const add = (...args) => {
    return flat(calc.add, ...args);
};
export const addition = add;
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
export const subtract = (...args) => {
    return flat(calc.subtract, ...args);
};
export const subtraction = subtract;
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
export const multiply = (...args) => {
    return flat(calc.multiply, ...args);
};
export const mul = multiply;
export const multiplication = multiply;
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
export const division = (...args) => {
    return flat(calc.division, ...args);
};
export const divide = division;
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
export const modulo = (...args) => {
    return flat(calc.modulo, ...args);
};
export const modulus = modulo;
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
export const expr = (expr) => {
    const exprArr = getExprArray(expr);
    if (exprArr.length) {
        return exprArrayCalc(exprArr);
    }
    else {
        return NaN;
    }
};
export default {
    add,
    addition,
    subtract,
    subtraction,
    multiply,
    mul,
    multiplication,
    division,
    divide,
    modulo,
    modulus,
    expr,
};
//# sourceMappingURL=index.js.map