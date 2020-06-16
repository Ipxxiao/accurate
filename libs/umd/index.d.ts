/**
 * accurate module.
 * @module accurate
 * @see doc https://github.com/Ipxxiao/accurate/tree/master/docs
 */
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
declare const calcAdd: (num1: number, num2: number) => number;
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
declare const calcSubtract: (num1: number, num2: number) => number;
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
declare const calcMultiply: (num1: number, num2: number) => number;
declare const calcMul: (num1: number, num2: number) => number;
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
declare const calcDivision: (num1: number, num2: number) => number;
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
declare const calcModulo: (num1: number, num2: number) => number;
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
export { calcAdd, calcSubtract, calcMul, calcMultiply, calcDivision, calcModulo, calcExpr, };
declare const _default: {
    add: (num1: number, num2: number) => number;
    subtract: (num1: number, num2: number) => number;
    mul: (num1: number, num2: number) => number;
    multiply: (num1: number, num2: number) => number;
    division: (num1: number, num2: number) => number;
    modulo: (num1: number, num2: number) => number;
    expr: (expr: string) => number;
};
export default _default;
