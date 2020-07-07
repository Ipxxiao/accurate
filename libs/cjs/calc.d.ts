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
export declare const add: (num1: number, num2: number) => number;
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
export declare const subtract: (num1: number, num2: number) => number;
/**
 * 精度乘法计算
 *
 * @example
 * ```js
 * multiply(1.1, 0.1)
 * //=> 0.11
 * ```
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
export declare const multiply: (num1: number, num2: number) => number;
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
export declare const division: (num1: number, num2: number) => number;
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
export declare const modulo: (num1: number, num2: number) => number;
declare const _default: {
    add: (num1: number, num2: number) => number;
    subtract: (num1: number, num2: number) => number;
    multiply: (num1: number, num2: number) => number;
    division: (num1: number, num2: number) => number;
    modulo: (num1: number, num2: number) => number;
};
export default _default;
