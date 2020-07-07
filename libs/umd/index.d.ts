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
declare const add: CalcFunc;
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
declare const subtract: CalcFunc;
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
declare const multiply: CalcFunc;
declare const mul: CalcFunc;
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
declare const division: CalcFunc;
declare const divide: CalcFunc;
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
declare const modulo: CalcFunc;
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
declare const expr: (expr: string) => number;
export { add, subtract, multiply, mul, division, divide, modulo, expr, };
declare const _default: {
    add: CalcFunc;
    subtract: CalcFunc;
    multiply: CalcFunc;
    mul: CalcFunc;
    division: CalcFunc;
    divide: CalcFunc;
    modulo: CalcFunc;
    expr: (expr: string) => number;
};
export default _default;
