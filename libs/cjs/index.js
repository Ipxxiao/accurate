"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var calc_1 = require("./calc");
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
    if (args.length) {
        if (args.length === 1) {
            if (Array.isArray(args[0])) {
                // 递归
                return flat.apply(void 0, __spread([calc], args[0]));
            }
            else {
                return args[0];
            }
        }
        else {
            return args.reduce(function (accum, item) {
                if (Array.isArray(accum)) {
                    // 递归
                    return flat.apply(void 0, __spread([calc], accum, [item]));
                }
                else if (Array.isArray(item)) {
                    // 递归
                    return flat.apply(void 0, __spread([calc, accum], item));
                }
                else {
                    return calc(accum, item);
                }
            });
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
 * calcAdd(1.1, 0.3, 0.1)
 * //=> 1.5
 * ```
 *
 * @param {...number[]} args
 * @returns {number}
 */
var calcAdd = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return flat.apply(void 0, __spread([calc_1.add], args));
};
exports.calcAdd = calcAdd;
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
var calcSubtract = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return flat.apply(void 0, __spread([calc_1.subtract], args));
};
exports.calcSubtract = calcSubtract;
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
var calcMultiply = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return flat.apply(void 0, __spread([calc_1.multiply], args));
};
exports.calcMultiply = calcMultiply;
var calcMul = calcMultiply;
exports.calcMul = calcMul;
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
var calcDivision = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return flat.apply(void 0, __spread([calc_1.division], args));
};
exports.calcDivision = calcDivision;
var calcDivide = calcDivision;
exports.calcDivide = calcDivide;
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
var calcModulo = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return flat.apply(void 0, __spread([calc_1.modulo], args));
};
exports.calcModulo = calcModulo;
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
var calcExpr = function (expr) {
    var exprArr = expr_1.getExprArray(expr);
    if (exprArr.length) {
        return expr_1.exprArrayCalc(exprArr);
    }
    else {
        return NaN;
    }
};
exports.calcExpr = calcExpr;
exports.default = {
    add: calcAdd,
    subtract: calcSubtract,
    mul: calcMul,
    multiply: calcMultiply,
    division: calcDivision,
    divide: calcDivide,
    modulo: calcModulo,
    expr: calcExpr,
};
//# sourceMappingURL=index.js.map