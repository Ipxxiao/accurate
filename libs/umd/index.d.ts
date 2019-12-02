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
 * add(1.1, 0.3)
 * //=> 1.4
 * ```
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
declare const add: (num1: number, num2: number) => number;
/**
 * 精度减法计算
 *
 * @example
 * ```js
 * subtract(1.1, 0.2)
 * //=> 0.9
 * ```
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
declare const subtract: (num1: number, num2: number) => number;
/**
 * 精度乘法计算
 *
 * @example
 * ```js
 * mul(1.1, 0.1)
 * //=> 0.11
 * ```
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
declare const mul: (num1: number, num2: number) => number;
/**
 * 精度除法计算
 *
 * @example
 * ```js
 * division(1.1, 10)
 * //=> 0.11
 * ```
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
declare const division: (num1: number, num2: number) => number;
/**
 * 精度取模计算
 *
 * @example
 * ```js
 * modulo(1.1, 1)
 * //=> 0.1
 * ```
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
declare const modulo: (num1: number, num2: number) => number;
declare const accurate: {
    add: (num1: number, num2: number) => number;
    subtract: (num1: number, num2: number) => number;
    mul: (num1: number, num2: number) => number;
    division: (num1: number, num2: number) => number;
    modulo: (num1: number, num2: number) => number;
};
export { add, subtract, mul, division, modulo, };
export default accurate;
