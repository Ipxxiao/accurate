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
    // 分隔符
    var DELIMITERS = {
        '(': true,
        ')': true,
        '+': true,
        '-': true,
        '*': true,
        '/': true,
        '%': true,
    };
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
     * 获取表达式数组
     *
     * @param {string} expr
     * @returns {string[]}
     */
    var getExprArray = function (expr) {
        // 分隔为数组
        var originalArr = String(expr).replace(/([\(\)\+\-\*/%])/g, ',$1,').split(',');
        // 按计算顺序，组成多维数组
        var exprArr = [];
        // 按计算顺序，分隔的子数组
        var sub = {};
        // 分隔的子数组keys
        var idxs = [];
        // 分隔的子数组的索引
        var idx = -1;
        for (var i in originalArr) {
            var item = originalArr[i].trim();
            if (item === '') {
                continue;
            }
            else if (DELIMITERS[item]) {
                var point = void 0;
                switch (item) {
                    case '(':
                        point = idxs[idx];
                        sub[i] = [];
                        // 指向子数组
                        if (idx >= 0) {
                            idxs.splice(++idx, 0, i);
                            sub[point].push(sub[i]);
                        }
                        else {
                            idxs.splice(++idx, 0, i);
                            exprArr.push(sub[i]);
                        }
                        break;
                    case '*':
                    case '/':
                    case '%':
                        point = idxs[idx];
                        // 指向子数组
                        if (idx >= 0) {
                            // 前面存在表达式
                            if (sub[point].length > 2) {
                                idxs.splice(++idx, 0, i);
                                sub[i] = [];
                                sub[i].push(sub[point].pop()); // 从上个数组取出末尾的计算项
                                sub[i].push(item);
                                sub[point].push(sub[i]);
                            }
                            else {
                                sub[point].push(item);
                            }
                        }
                        else if (exprArr.length > 2) {
                            idxs.splice(++idx, 0, i);
                            sub[i] = [];
                            sub[i].push(exprArr.pop()); // 从表达式数组取出末尾的计算项
                            sub[i].push(item);
                            exprArr.push(sub[i]);
                        }
                        else {
                            exprArr.push(item);
                        }
                        break;
                    case '+':
                    case '-':
                        // 指向子数组
                        if (idx >= 0) {
                            sub[idxs[idx]].push(item);
                        }
                        else {
                            exprArr.push(item);
                        }
                        break;
                    case ')':
                        --idx;
                        break;
                }
            }
            else if (Number.isFinite(Number(item))) {
                // 指向子数组
                if (idx >= 0) {
                    var point = idxs[idx];
                    var len = sub[point].length;
                    sub[point].push(item);
                    switch (sub[point][len - 1]) {
                        case '*':
                        case '/':
                        case '%':
                            // 索引前一个值指向子数组，与前面存在表达式
                            if (idx - 1 >= 0 && sub[idxs[idx - 1]].length >= 2) {
                                --idx;
                            }
                            break;
                        default:
                            break;
                    }
                }
                else {
                    exprArr.push(item);
                }
            }
            else {
                break;
            }
        }
        return exprArr;
    };
    /**
     * 表达式数组计算
     *
     * @param {string[]} exprArray
     * @returns {number}
     */
    var exprArrayCalc = function (exprArray) {
        var result = exprArray.reduce(function (accum, item, index, array) {
            if (DELIMITERS[item]) {
                var prev = array[index - 1];
                var next = array[index + 1];
                var a = void 0, b = void 0;
                if (Array.isArray(prev)) {
                    a = exprArrayCalc(prev);
                    // 数组项更新为计算结果
                    array[index - 1] = String(a);
                }
                else if (index - 1 > 0) {
                    // 前面存在累计值
                    a = accum;
                }
                else {
                    a = Number(prev);
                }
                if (Array.isArray(next)) {
                    b = exprArrayCalc(next);
                    // 数组项更新为计算结果
                    array[index + 1] = String(b);
                }
                else {
                    b = Number(next);
                }
                switch (item) {
                    case '+':
                        accum = calcAdd(a, b);
                        break;
                    case '-':
                        accum = calcSubtract(a, b);
                        break;
                    case '*':
                        accum = calcMul(a, b);
                        break;
                    case '/':
                        accum = calcDivision(a, b);
                        break;
                    case '%':
                        accum = calcModulo(a, b);
                        break;
                }
            }
            return accum;
        }, 0);
        return result;
    };
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
    var calcAdd = function (num1, num2) {
        num1 = Number(num1);
        num2 = Number(num2);
        var temp = 0, l1 = 0, l2 = 0, m = 0;
        l1 = getDecimalDigits(num1);
        l2 = getDecimalDigits(num2);
        m = Math.pow(10, Math.max(l1, l2));
        temp = calcMul(num1, m) + calcMul(num2, m);
        return temp / m;
    };
    exports.calcAdd = calcAdd;
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
    var calcSubtract = function (num1, num2) {
        num1 = Number(num1);
        num2 = Number(num2);
        return calcAdd(num1, -num2);
    };
    exports.calcSubtract = calcSubtract;
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
    var calcMultiply = function (num1, num2) {
        num1 = Number(num1);
        num2 = Number(num2);
        var temp = 0, l1 = 0, l2 = 0, m = 0, s1 = num1.toString(), s2 = num2.toString();
        l1 = getDecimalDigits(num1);
        l2 = getDecimalDigits(num2);
        m = Math.pow(10, (l1 + l2));
        temp = Number.parseInt(s1.replace('.', '')) * Number.parseInt(s2.replace('.', ''));
        return temp / m;
    };
    exports.calcMultiply = calcMultiply;
    var calcMul = calcMultiply;
    exports.calcMul = calcMul;
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
    var calcDivision = function (num1, num2) {
        num1 = Number(num1);
        num2 = Number(num2);
        var temp = 0, l1 = 0, l2 = 0, m = 0, s1 = num1.toString(), s2 = num2.toString();
        l1 = getDecimalDigits(num1);
        l2 = getDecimalDigits(num2);
        m = Math.pow(10, (l2 - l1));
        temp = Number.parseInt(s1.replace('.', '')) / Number.parseInt(s2.replace('.', ''));
        return calcMul(temp, m);
    };
    exports.calcDivision = calcDivision;
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
    var calcModulo = function (num1, num2) {
        num1 = Number(num1);
        num2 = Number(num2);
        var temp = 0, l1 = 0, l2 = 0, m = 0;
        l1 = getDecimalDigits(num1);
        l2 = getDecimalDigits(num2);
        m = Math.pow(10, Math.max(l1, l2));
        num1 = calcMul(num1, m);
        num2 = calcMul(num2, m);
        temp = num1 % num2;
        return temp / m;
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
        var exprArr = getExprArray(expr);
        if (exprArr.length) {
            return exprArrayCalc(exprArr);
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
        modulo: calcModulo,
        expr: calcExpr,
    };
});
//# sourceMappingURL=index.js.map