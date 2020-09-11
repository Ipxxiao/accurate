import accurate, {
	add, addition, subtract, subtraction, multiply, mul, multiplication, division, divide, modulo, modulus, expr
} from '../src/index'

const methods = ['add', 'subtract', 'multiply', 'division', 'modulo', 'expr']

describe('accurate', () => {
	methods.forEach(par => {
		it(`should have ${par} method`, () => {
			expect(accurate).toHaveProperty(par)
			expect(accurate[par]).toBeInstanceOf(Function)
		})
	})

	it(`add`, () => {
		expect(accurate.add(1.1, 0.3, 0.1)).toEqual(1.5)
		expect(accurate.add([1.1, 0.3, 0.1])).toEqual(1.5)
		expect(accurate.add([1.1, 0.3, 0.1], [[1.1, 0.3], 0.1])).toEqual(3)
		expect(accurate.add(0.1)).toEqual(0.1)
		expect(accurate.add()).toEqual(NaN)
	})

	it(`subtract`, () => {
		expect(accurate.subtract(1.1, 0.2, 0.1)).toEqual(0.8)
		expect(accurate.subtract([1.1, 0.2, 0.1])).toEqual(0.8)
		expect(accurate.subtract([1.1, 0.2, 0.1], [[0.1, 0.2], 0.1])).toEqual(0.4)
		expect(accurate.subtract(0.1)).toEqual(0.1)
		expect(accurate.subtract()).toEqual(NaN)
	})

	it(`multiply`, () => {
		expect(accurate.multiply(1.1, 0.1, 0.2)).toEqual(0.022)
		expect(accurate.multiply([1.1, 0.1, 0.2])).toEqual(0.022)
		expect(accurate.multiply([1.1, 0.1, 0.2], [[10, 100], 1])).toEqual(22)
		expect(accurate.multiply(0.1)).toEqual(0.1)
		expect(accurate.multiply()).toEqual(NaN)
	})

	it(`division`, () => {
		expect(accurate.division(1.1, 10, 2)).toEqual(0.055)
		expect(accurate.division([1.1, 10, 2])).toEqual(0.055)
		expect(accurate.division([101.1, 10, 2], [[4, 5], 3])).toEqual(0.08425)
		expect(accurate.division(0.1)).toEqual(0.1)
		expect(accurate.division()).toEqual(NaN)
	})

	it(`modulo`, () => {
		expect(accurate.modulo(1.1, 0.2)).toEqual(0.1)
		expect(accurate.modulo([1.1, 0.2])).toEqual(0.1)
		expect(accurate.modulo([1.1, 0.2], [1])).toEqual(0.1)
		expect(accurate.modulo(0.1)).toEqual(0.1)
		expect(accurate.modulo()).toEqual(NaN)
	})

	it(`expr`, () => {
		expect(accurate.expr('1+3*4')).toEqual(13)
		expect(accurate.expr('(1+3*4)*4')).toEqual(52)
		expect(accurate.expr('((1.1+0.3)*4+2*3)/(1.1%0.3-1*0.1)-1*5')).toEqual(111)
		expect(accurate.expr('((1.1 + 0.3) * 4 + 2 * 3) / (1.1 % 0.3 - 1 * 0.1) - 1 * 5')).toEqual(111)
		expect(accurate.expr('0.3 - 1 * 0.1 - 1 * 5')).toEqual(-4.8)
		expect(accurate.expr('0.1')).toEqual(0.1)
		expect(accurate.expr('1.1a + 0.3')).toEqual(NaN)
		expect(accurate.expr('((1.1 + 0.3) * 4 + 2 * 3) / (1.1 % 0.3 - 1 * 0.1) - 1 * 5 * 2 + 5 - 2 - 2 * 3')).toEqual(103)
		expect(accurate.expr('((1.1 + 0.3) * 4 + 2 * 3 - 2 + 2 * 5 - 3) / (1.1 % 0.3 - 1 * 0.1) - 1 * 5 * (2 + 5) - 2 - 2 * 3')).toEqual(123)
	})
})