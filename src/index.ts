/**
 * 参数是否数值类型
 *
 * @param {number[]} params
 * @returns {boolean}
 */
const isNum = (params: number[]): boolean => {
	let flag = true;

	for (let i in params) {
		let item = Number(params[i]);

		try {
			if (isNaN(item) || typeof item != 'number') {
				let idx = Number(i);

				flag = false;
				throw new TypeError(`The ${++idx}th parameter type is not a number`);
			}
		} catch (e) {
			console.error(e);
		}
	}

	return flag;
}

/**
 * 获取小数位数
 *
 * @param {number} num
 * @returns {number}
 */
const getDecimalDigits = (num: number): number => {
	try {
		return num.toString().split('.')[1].length;
	} catch (e) {
		return 0;
	}
}

/**
 * 精度加法计算
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
const add = (num1: number, num2: number): number => {
	if (!isNum([num1, num2])) {
		return NaN;
	}

	num1 = Number(num1);
	num2 = Number(num2);

	let temp = 0,
		l1 = 0,
		l2 = 0,
		m = 0;

	l1 = getDecimalDigits(num1);
	l2 = getDecimalDigits(num2);

	m = 10 ** Math.max(l1, l2);
	temp = mul(num1, m) + mul(num2, m);

	return temp / m;
}

/**
 * 精度减法计算
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
const subtract = (num1: number, num2: number): number => {
	if (!isNum([num1, num2])) {
		return NaN;
	}

	num1 = Number(num1);
	num2 = Number(num2);

	return add(num1, -num2);
}

/**
 * 精度乘法计算
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
const mul = (num1: number, num2: number): number => {
	if (!isNum([num1, num2])) {
		return NaN;
	}

	num1 = Number(num1);
	num2 = Number(num2);

	let temp = 0,
		l1 = 0,
		l2 = 0,
		m = 0,
		s1 = num1.toString(),
		s2 = num2.toString();

	l1 = getDecimalDigits(num1);
	l2 = getDecimalDigits(num2);

	m = 10 ** (l1 + l2);
	temp = Number.parseInt(s1.replace('.', '')) * Number.parseInt(s2.replace('.', ''));

	return temp / m;
}

/**
 * 精度除法计算
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
const division = (num1: number, num2: number): number => {
	if (!isNum([num1, num2])) {
		return NaN;
	}

	num1 = Number(num1);
	num2 = Number(num2);

	let temp = 0,
		l1 = 0,
		l2 = 0,
		m = 0,
		s1 = num1.toString(),
		s2 = num2.toString();

	l1 = getDecimalDigits(num1);
	l2 = getDecimalDigits(num2);

	m = 10 ** (l2 - l1);
	temp = Number.parseInt(s1.replace('.', '')) / Number.parseInt(s2.replace('.', ''));

	return mul(temp, m);
}

/**
 * 精度取模计算
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
const modulo = (num1: number, num2: number): number => {
	if (!isNum([num1, num2])) {
		return NaN;
	}

	num1 = Number(num1);
	num2 = Number(num2);

	let temp = 0,
		l1 = 0,
		l2 = 0,
		m = 0;

	l1 = getDecimalDigits(num1);
	l2 = getDecimalDigits(num2);

	m = 10 ** Math.max(l1, l2);
	num1 = mul(num1, m);
	num2 = mul(num2, m);
	temp = num1 % num2;

	return temp / m;
}

export default {
	add,
	subtract,
	mul,
	division,
	modulo,
};
