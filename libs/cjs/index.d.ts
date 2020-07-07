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
 * calcAdd(1.1, 0.3, 0.1)
 * //=> 1.5
 * ```
 *
 * @param {...number[]} args
 * @returns {number}
 */
declare const calcAdd: CalcFunc;
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
declare const calcSubtract: CalcFunc;
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
declare const calcMultiply: CalcFunc;
declare const calcMul: CalcFunc;
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
declare const calcDivision: CalcFunc;
declare const calcDivide: CalcFunc;
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
declare const calcModulo: CalcFunc;
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
declare const calcExpr: (expr: string) => number;
export { calcAdd, calcSubtract, calcMul, calcMultiply, calcDivision, calcDivide, calcModulo, calcExpr, };
declare const _default: {
    add: CalcFunc;
    subtract: CalcFunc;
    mul: CalcFunc;
    multiply: CalcFunc;
    division: CalcFunc;
    divide: CalcFunc;
    modulo: CalcFunc;
    expr: (expr: string) => number;
};
export default _default;
