"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 获取小数位数
 *
 * @param {number} num
 * @returns {number}
 */
var getDecimalDigits = function (num) {
    // 拆分成整数和小数
    var _a = __read(num.toString().split('.'), 2), integer = _a[0], decimal = _a[1];
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
var getOffsetData = function (num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    var len1 = getDecimalDigits(num1);
    var len2 = getDecimalDigits(num2);
    var digits = Math.pow(10, Math.max(len1, len2));
    var short = Math.min(len1, len2);
    // 转换为整数
    var temp1 = Number(num1.toString().replace('.', ''));
    // 转换为整数
    var temp2 = Number(num2.toString().replace('.', ''));
    return {
        digits: digits,
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
exports.add = function (num1, num2) {
    var _a = getOffsetData(num1, num2), int1 = _a.int1, int2 = _a.int2, digits = _a.digits;
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
exports.subtract = function (num1, num2) {
    return exports.add(num1, -num2);
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
exports.multiply = function (num1, num2) {
    var _a = getOffsetData(num1, num2), int1 = _a.int1, int2 = _a.int2, digits = _a.digits;
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
exports.division = function (num1, num2) {
    var _a = getOffsetData(num1, num2), int1 = _a.int1, int2 = _a.int2, digits = _a.digits;
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
exports.modulo = function (num1, num2) {
    var _a = getOffsetData(num1, num2), int1 = _a.int1, int2 = _a.int2, digits = _a.digits;
    return int1 % int2 / digits;
};
//# sourceMappingURL=calc.js.map