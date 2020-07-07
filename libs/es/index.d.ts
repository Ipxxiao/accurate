/**
 * accurate module.
 * @module accurate
 * @see doc https://github.com/Ipxxiao/accurate/tree/master/docs
 */
interface CalcFunc {
    <T>(arg: T): number;
    <T>(...args: T[] | number[]): number;
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
export declare const add: CalcFunc;
export declare const addition: CalcFunc;
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
export declare const subtract: CalcFunc;
export declare const subtraction: CalcFunc;
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
export declare const multiply: CalcFunc;
export declare const mul: CalcFunc;
export declare const multiplication: CalcFunc;
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
export declare const division: CalcFunc;
export declare const divide: CalcFunc;
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
export declare const modulo: CalcFunc;
export declare const modulus: CalcFunc;
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
export declare const expr: (expr: string) => number;
declare const _default: {
    add: CalcFunc;
    addition: CalcFunc;
    subtract: CalcFunc;
    subtraction: CalcFunc;
    multiply: CalcFunc;
    mul: CalcFunc;
    multiplication: CalcFunc;
    division: CalcFunc;
    divide: CalcFunc;
    modulo: CalcFunc;
    modulus: CalcFunc;
    expr: (expr: string) => number;
};
export default _default;
