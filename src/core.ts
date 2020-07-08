type OffsetData = {
    int1: number
    int2: number
    digits: number
}

/**
 * 获取小数位数
 *
 * @param {number} num
 * @returns {number}
 */
const getDecimalDigits = (num: number): number => {
    const decimal: string = num.toString().split('.')[1];

    if (decimal) {
        return decimal.length;
    } else {
        return 0;
    }
}

/**
 * 获取偏移数据
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {OffsetData}
 */
const getOffsetData = (num1: number, num2: number): OffsetData => {
    num1 = Number(num1);
    num2 = Number(num2);

    const len1: number = getDecimalDigits(num1);
    const len2: number = getDecimalDigits(num2);
    const digits: number = 10 ** Math.max(len1, len2);

    return {
        digits,
        int1: Math.round(num1 * digits),
        int2: Math.round(num2 * digits),
    }
}

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
export const add = (num1: number, num2: number): number => {
    const {
        int1,
        int2,
        digits,
    } = getOffsetData(num1, num2);

    return (int1 + int2) / digits;
}

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
export const subtract = (num1: number, num2: number): number => {
    return add(num1, -num2);
}

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
export const multiply = (num1: number, num2: number): number => {
    const {
        int1,
        int2,
        digits,
    } = getOffsetData(num1, num2);

    return int1 * int2 / digits ** 2;
}

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
export const division = (num1: number, num2: number): number => {
    const {
        int1,
        int2,
        digits,
    } = getOffsetData(num1, num2);

    return int1 / int2;
}

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
export const modulo = (num1: number, num2: number): number => {
    const {
        int1,
        int2,
        digits,
    } = getOffsetData(num1, num2);

    return int1 % int2 / digits;
}

export default {
    add,
    subtract,
    multiply,
    division,
    modulo,
};