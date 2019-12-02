/**
 * accurate module.
 * @module accurate
 * @see doc https://github.com/Ipxxiao/accurate/tree/master/docs
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * 获取小数位数
     *
     * @param {number} num
     * @returns {number}
     */
    var getDecimalDigits = function (num) {
        try {
            return num.toString().split('.')[1].length;
        }
        catch (e) {
            return 0;
        }
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
    var add = function (num1, num2) {
        num1 = Number(num1);
        num2 = Number(num2);
        var temp = 0, l1 = 0, l2 = 0, m = 0;
        l1 = getDecimalDigits(num1);
        l2 = getDecimalDigits(num2);
        m = Math.pow(10, Math.max(l1, l2));
        temp = mul(num1, m) + mul(num2, m);
        return temp / m;
    };
    exports.add = add;
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
    var subtract = function (num1, num2) {
        num1 = Number(num1);
        num2 = Number(num2);
        return add(num1, -num2);
    };
    exports.subtract = subtract;
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
    var mul = function (num1, num2) {
        num1 = Number(num1);
        num2 = Number(num2);
        var temp = 0, l1 = 0, l2 = 0, m = 0, s1 = num1.toString(), s2 = num2.toString();
        l1 = getDecimalDigits(num1);
        l2 = getDecimalDigits(num2);
        m = Math.pow(10, (l1 + l2));
        temp = Number.parseInt(s1.replace('.', '')) * Number.parseInt(s2.replace('.', ''));
        return temp / m;
    };
    exports.mul = mul;
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
    var division = function (num1, num2) {
        num1 = Number(num1);
        num2 = Number(num2);
        var temp = 0, l1 = 0, l2 = 0, m = 0, s1 = num1.toString(), s2 = num2.toString();
        l1 = getDecimalDigits(num1);
        l2 = getDecimalDigits(num2);
        m = Math.pow(10, (l2 - l1));
        temp = Number.parseInt(s1.replace('.', '')) / Number.parseInt(s2.replace('.', ''));
        return mul(temp, m);
    };
    exports.division = division;
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
    var modulo = function (num1, num2) {
        num1 = Number(num1);
        num2 = Number(num2);
        var temp = 0, l1 = 0, l2 = 0, m = 0;
        l1 = getDecimalDigits(num1);
        l2 = getDecimalDigits(num2);
        m = Math.pow(10, Math.max(l1, l2));
        num1 = mul(num1, m);
        num2 = mul(num2, m);
        temp = num1 % num2;
        return temp / m;
    };
    exports.modulo = modulo;
    var accurate = {
        add: add,
        subtract: subtract,
        mul: mul,
        division: division,
        modulo: modulo,
    };
    exports.default = accurate;
});
//# sourceMappingURL=index.js.map