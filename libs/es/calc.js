/**
 * 获取小数位数
 *
 * @param {number} num
 * @returns {number}
 */
const getDecimalDigits = (num) => {
    // 拆分成整数和小数
    const [integer, decimal] = num.toString().split('.');
    if (decimal) {
        return decimal.length;
    }
    else {
        return 0;
    }
};
/**
 * 获取偏移数据
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {OffsetData}
 */
const getOffsetData = (num1, num2) => {
    num1 = Number(num1);
    num2 = Number(num2);
    const len1 = getDecimalDigits(num1);
    const len2 = getDecimalDigits(num2);
    const digits = Math.pow(10, Math.max(len1, len2));
    const short = Math.min(len1, len2);
    // 转换为整数
    const temp1 = Number(num1.toString().replace('.', ''));
    // 转换为整数
    const temp2 = Number(num2.toString().replace('.', ''));
    return {
        digits,
        int1: temp1 * Math.pow(10, (len2 - short)),
        int2: temp2 * Math.pow(10, (len1 - short)),
    };
};
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
export const add = (num1, num2) => {
    const { int1, int2, digits, } = getOffsetData(num1, num2);
    return (int1 + int2) / digits;
};
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
export const subtract = (num1, num2) => {
    return add(num1, -num2);
};
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
export const multiply = (num1, num2) => {
    const { int1, int2, digits, } = getOffsetData(num1, num2);
    return int1 * int2 / Math.pow(digits, 2);
};
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
export const division = (num1, num2) => {
    const { int1, int2, digits, } = getOffsetData(num1, num2);
    return int1 / int2;
};
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
export const modulo = (num1, num2) => {
    const { int1, int2, digits, } = getOffsetData(num1, num2);
    return int1 % int2 / digits;
};
//# sourceMappingURL=calc.js.map