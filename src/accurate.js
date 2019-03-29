module.exports = {
    modulo(arg1, arg2) { // 精度取模计算
        if (isNaN(arg1) || typeof arg1 != 'number') {
            console.warn('The arg1 parameter type of the modulo function is not a number');
            return NaN;
        } else if (isNaN(arg2) || typeof arg2 != 'number') {
            console.warn('The arg2 parameter type of the modulo function is not a number');
            return NaN;
        }

        let me = this;
        let temp = 0,
            l1 = 0,
            l2 = 0,
            m = 0;

        try {
            l1 = arg1.toString().split('.')[1].length;
        } catch (e) {
            l1 = 0;
        }

        try {
            l2 = arg2.toString().split('.')[1].length;
        } catch (e) {
            l2 = 0;
        }

        m = 10 ** Math.max(l1, l2);
        arg1 = me.mul(arg1, m);
        arg2 = me.mul(arg2, m);
        temp = arg1 % arg2;

        return temp / m;
    },
    division(arg1, arg2) { // 精度除法计算
        if (isNaN(arg1) || typeof arg1 != 'number') {
            console.warn('The arg1 parameter type of the division function is not a number');
            return NaN;
        } else if (isNaN(arg2) || typeof arg2 != 'number') {
            console.warn('The arg2 parameter type of the division function is not a number');
            return NaN;
        }

        let me = this;
        let temp = 0,
            l1 = 0,
            l2 = 0,
            m = 0,
            s1 = arg1.toString(),
            s2 = arg2.toString();

        try {
            l1 = s1.split('.')[1].length;
        } catch (e) {
            l1 = 0;
        }
        try {
            l2 = s2.split('.')[1].length;
        } catch (e) {
            l2 = 0;
        }

        m = 10 ** (l2 - l1);
        temp = Number(s1.replace('.', '')) / Number(s2.replace('.', ''));

        return me.mul(temp, m);
    },
    mul(arg1, arg2) { // 精度乘法计算
        if (isNaN(arg1) || typeof arg1 != 'number') {
            console.warn('The arg1 parameter type of the mul function is not a number');
            return NaN;
        } else if (isNaN(arg2) || typeof arg2 != 'number') {
            console.warn('The arg2 parameter type of the mul function is not a number');
            return NaN;
        }

        let me = this;
        let temp = 0,
            l1 = 0,
            l2 = 0,
            m = 0,
            s1 = arg1.toString(),
            s2 = arg2.toString();

        try {
            l1 += s1.split('.')[1].length;
        } catch (e) {
            l1 = 0;
        }

        try {
            l2 += s2.split('.')[1].length;
        } catch (e) {
            l2 = 0;
        }

        m = 10 ** (l1 + l2);
        temp = Number(s1.replace('.', '')) * Number(s2.replace('.', ''));

        return temp / m;
    },
    add(arg1, arg2) { // 精度加法计算
        if (isNaN(arg1) || typeof arg1 != 'number') {
            console.warn('The arg1 parameter type of the add function is not a number');
            return NaN;
        } else if (isNaN(arg2) || typeof arg2 != 'number') {
            console.warn('The arg2 parameter type of the add function is not a number');
            return NaN;
        }

        let me = this;
        let temp = 0,
            l1 = 0,
            l2 = 0,
            m = 0;

        try {
            l1 = arg1.toString().split('.')[1].length;
        } catch (e) {
            l1 = 0;
        }

        try {
            l2 = arg2.toString().split('.')[1].length;
        } catch (e) {
            l2 = 0;
        }

        m = 10 ** Math.max(l1, l2);
        temp = me.mul(arg1, m) + me.mul(arg2, m);

        return temp / m;
    },
};