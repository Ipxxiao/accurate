/**
 * accurate module.
 * @module accurate
 * @see doc https://github.com/Ipxxiao/accurate/tree/master/docs
 */
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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "accurate-core", "./expr"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.expr = exports.modulus = exports.modulo = exports.divide = exports.division = exports.multiplication = exports.mul = exports.multiply = exports.subtraction = exports.subtract = exports.addition = exports.add = void 0;
    var accurate_core_1 = __importDefault(require("accurate-core"));
    var expr_1 = require("./expr");
    /**
     * 扁平化数组
     *
     * @param {Function} calc
     * @param {...number[]} args
     * @returns {number}
     */
    var flat = function (calc) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var len = args.length;
        var first = args[0];
        var accum = first;
        if (len) {
            if (len === 1) {
                if (Array.isArray(first)) {
                    // 递归
                    return flat.apply(void 0, __spread([calc], first));
                }
                else {
                    return first;
                }
            }
            else {
                for (var i = 1; i < len; i++) {
                    var item = args[i];
                    if (Array.isArray(accum)) {
                        // 递归
                        accum = flat.apply(void 0, __spread([calc], accum, [item]));
                    }
                    else if (Array.isArray(item)) {
                        // 递归
                        accum = flat.apply(void 0, __spread([calc, accum], item));
                    }
                    else {
                        accum = calc(accum, item);
                    }
                }
                return accum;
            }
        }
        else {
            return NaN;
        }
    };
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
    exports.add = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return flat.apply(void 0, __spread([accurate_core_1.default.add], args));
    };
    exports.addition = exports.add;
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
    exports.subtract = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return flat.apply(void 0, __spread([accurate_core_1.default.subtract], args));
    };
    exports.subtraction = exports.subtract;
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
    exports.multiply = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return flat.apply(void 0, __spread([accurate_core_1.default.multiply], args));
    };
    exports.mul = exports.multiply;
    exports.multiplication = exports.multiply;
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
    exports.division = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return flat.apply(void 0, __spread([accurate_core_1.default.division], args));
    };
    exports.divide = exports.division;
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
    exports.modulo = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return flat.apply(void 0, __spread([accurate_core_1.default.modulo], args));
    };
    exports.modulus = exports.modulo;
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
    exports.expr = function (expr) {
        var exprArr = expr_1.getExprArray(expr);
        if (exprArr.length) {
            return expr_1.exprArrayCalc(exprArr);
        }
        else {
            return NaN;
        }
    };
    exports.default = {
        add: exports.add,
        addition: exports.addition,
        subtract: exports.subtract,
        subtraction: exports.subtraction,
        multiply: exports.multiply,
        mul: exports.mul,
        multiplication: exports.multiplication,
        division: exports.division,
        divide: exports.divide,
        modulo: exports.modulo,
        modulus: exports.modulus,
        expr: exports.expr,
    };
});
//# sourceMappingURL=index.js.map