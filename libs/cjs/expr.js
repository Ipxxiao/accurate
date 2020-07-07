"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calc_1 = require("./calc");
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
 * 获取表达式数组
 *
 * @param {string} expr
 * @returns {string[]}
 */
exports.getExprArray = function (expr) {
    // 表达式分隔为数组
    var originalArr = String(expr).replace(/([\(\)\+\-\*/%])/g, ',$1,').split(',');
    // 按计算顺序，组成多维数组
    var exprArr = [];
    // 存储分隔的子数组
    var sub = {};
    // 子数组键值集
    var keys = [];
    // 子数组键值的索引
    var idx = -1;
    for (var i in originalArr) {
        var item = originalArr[i].trim();
        // 当前指向的子数组键值
        var point = void 0;
        if (item === '') {
            continue;
        }
        else if (DELIMITERS[item]) {
            switch (item) {
                case '(':
                    point = keys[idx];
                    // 创建子数组（优先计算）
                    sub[i] = [];
                    // 指向子数组
                    if (idx >= 0) {
                        sub[point].push(sub[i]);
                    }
                    else {
                        exprArr.push(sub[i]);
                    }
                    // 数组维度加1
                    keys.splice(++idx, 0, i);
                    break;
                case '*':
                case '/':
                case '%':
                    point = keys[idx];
                    // 指向子数组
                    if (idx >= 0) {
                        // 存在表达式
                        if (sub[point].length > 2) {
                            // 数组维度加1
                            keys.splice(++idx, 0, i);
                            // 创建子数组（优先计算）
                            sub[i] = [];
                            // 从上个数组取出末尾的计算项
                            sub[i].push(sub[point].pop());
                            sub[i].push(item);
                            sub[point].push(sub[i]);
                        }
                        else {
                            sub[point].push(item);
                        }
                    }
                    // 存在表达式
                    else if (exprArr.length > 2) {
                        // 数组维度加1
                        keys.splice(++idx, 0, i);
                        // 创建子数组（优先计算）
                        sub[i] = [];
                        // 从表达式数组取出末尾的计算项
                        sub[i].push(exprArr.pop());
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
                        sub[keys[idx]].push(item);
                    }
                    else {
                        exprArr.push(item);
                    }
                    break;
                case ')':
                    // 数组维度减1
                    --idx;
                    break;
            }
        }
        else if (Number.isFinite(Number(item))) {
            point = keys[idx];
            // 指向子数组
            if (idx >= 0) {
                // 前一个索引
                var prevIdx = idx - 1;
                // 子数组最后一项的索引
                var lastIdx = sub[point].length - 1;
                sub[point].push(item);
                switch (sub[point][lastIdx]) {
                    case '*':
                    case '/':
                    case '%':
                        // 前一个为子数组，并且存在表达式（有过优先计算）
                        if (prevIdx >= 0 && sub[keys[prevIdx]].length >= 2) {
                            // 数组维度减1
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
exports.exprArrayCalc = function (exprArray) {
    var accum = Number(exprArray[0]);
    for (var i = 0, len = exprArray.length; i < len; i++) {
        var item = exprArray[i];
        if (DELIMITERS[item]) {
            var prevIdx = i - 1;
            var nextIdx = i + 1;
            var prev = exprArray[prevIdx];
            var next = exprArray[nextIdx];
            var num1 = void 0, num2 = void 0;
            if (Array.isArray(prev)) {
                // 递归
                num1 = exports.exprArrayCalc(prev);
                // 数组项更新为计算结果
                exprArray[prevIdx] = String(num1);
            }
            else if (prevIdx > 0) {
                // 前面存在累计值，使用累计值
                num1 = accum;
            }
            else {
                num1 = Number(prev);
            }
            if (Array.isArray(next)) {
                // 递归
                num2 = exports.exprArrayCalc(next);
                // 数组项更新为计算结果
                exprArray[nextIdx] = String(num2);
            }
            else {
                num2 = Number(next);
            }
            switch (item) {
                case '+':
                    accum = calc_1.add(num1, num2);
                    break;
                case '-':
                    accum = calc_1.subtract(num1, num2);
                    break;
                case '*':
                    accum = calc_1.multiply(num1, num2);
                    break;
                case '/':
                    accum = calc_1.division(num1, num2);
                    break;
                case '%':
                    accum = calc_1.modulo(num1, num2);
                    break;
            }
        }
    }
    return accum;
};
//# sourceMappingURL=expr.js.map