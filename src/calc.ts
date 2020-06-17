/**
 * 获取小数位数
 *
 * @param {number} num
 * @returns {number}
 */
const getDecimalDigits = (num: number): number => {
    const numArr = num.toString().split('.')

    if (numArr.length > 1) {
        const decimals = numArr[1]

        return decimals.length;
    } else {
        return 0;
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
    num1 = Number(num1);
    num2 = Number(num2);

    let temp: number = 0,
        l1: number = 0,
        l2: number = 0,
        m: number = 0;

    l1 = getDecimalDigits(num1);
    l2 = getDecimalDigits(num2);

    m = 10 ** Math.max(l1, l2);
    temp = multiply(num1, m) + multiply(num2, m);

    return temp / m;
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
    num1 = Number(num1);
    num2 = Number(num2);

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
    num1 = Number(num1);
    num2 = Number(num2);

    let temp: number = 0,
        l1: number = 0,
        l2: number = 0,
        m: number = 0,
        s1: string = num1.toString(),
        s2: string = num2.toString();

    l1 = getDecimalDigits(num1);
    l2 = getDecimalDigits(num2);

    m = 10 ** (l1 + l2);
    temp = Number.parseInt(s1.replace('.', '')) * Number.parseInt(s2.replace('.', ''));

    return temp / m;
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
    num1 = Number(num1);
    num2 = Number(num2);

    let temp: number = 0,
        l1: number = 0,
        l2: number = 0,
        m: number = 0,
        s1: string = num1.toString(),
        s2: string = num2.toString();

    l1 = getDecimalDigits(num1);
    l2 = getDecimalDigits(num2);

    m = 10 ** (l2 - l1);
    temp = Number.parseInt(s1.replace('.', '')) / Number.parseInt(s2.replace('.', ''));

    return multiply(temp, m);
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
    num1 = Number(num1);
    num2 = Number(num2);

    let temp: number = 0,
        l1: number = 0,
        l2: number = 0,
        m: number = 0;

    l1 = getDecimalDigits(num1);
    l2 = getDecimalDigits(num2);

    m = 10 ** Math.max(l1, l2);
    num1 = multiply(num1, m);
    num2 = multiply(num2, m);
    temp = num1 % num2;

    return temp / m;
}