
function isNum(params) {
	var flag = true;

	for (var i in params) {
		try {
			if (isNaN(params[i]) || typeof params[i] != 'number') {
				flag = false;
				throw new TypeError(`The ${++i}th parameter type is not a number`);
			}
		} catch (e) {
			console.error(e);
		}
	}

	return flag;
}

function getDecimalDigits(num) {
	try {
		return num.toString().split('.')[1].length;
	} catch (e) {
		return 0;
	}
}

export default {
	// 精度加法计算
	add(num1, num2) {
		if (!isNum(arguments)) {
			return NaN;
		}

		var me = this;
		var temp = 0,
			l1 = 0,
			l2 = 0,
			m = 0;

		l1 = getDecimalDigits(num1);
		l2 = getDecimalDigits(num2);

		m = 10 ** Math.max(l1, l2);
		temp = me.mul(num1, m) + me.mul(num2, m);

		return temp / m;
	},
	// 精度减法计算
	subtract(num1, num2) {
		if (!isNum(arguments)) {
			return NaN;
		}

		var me = this;

		return me.add(num1, -num2);
	},
	// 精度乘法计算
	mul(num1, num2) {
		if (!isNum(arguments)) {
			return NaN;
		}

		var me = this;
		var temp = 0,
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
	},
	// 精度除法计算
	division(num1, num2) {
		if (!isNum(arguments)) {
			return NaN;
		}

		var me = this;
		var temp = 0,
			l1 = 0,
			l2 = 0,
			m = 0,
			s1 = num1.toString(),
			s2 = num2.toString();

		l1 = getDecimalDigits(num1);
		l2 = getDecimalDigits(num2);

		m = 10 ** (l2 - l1);
		temp = Number.parseInt(s1.replace('.', '')) / Number.parseInt(s2.replace('.', ''));

		return me.mul(temp, m);
	},
	// 精度取模计算
	modulo(num1, num2) {
		if (!isNum(arguments)) {
			return NaN;
		}

		var me = this;
		var temp = 0,
			l1 = 0,
			l2 = 0,
			m = 0;

		l1 = getDecimalDigits(num1);
		l2 = getDecimalDigits(num2);

		m = 10 ** Math.max(l1, l2);
		num1 = me.mul(num1, m);
		num2 = me.mul(num2, m);
		temp = num1 % num2;

		return temp / m;
	},
};