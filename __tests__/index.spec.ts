import accurate, { calcAdd, calcSubtract, calcMul, calcMultiply, calcDivision, calcModulo, calcExpr } from '../src/index'

import { log } from '../src/_utils/index'

const methods = ['add', 'subtract', 'mul', 'multiply', 'division', 'modulo']

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
		expect(accurate.expr('1.1a + 0.3')).toEqual(NaN)
	})
})

describe('log', () => {
	it('should invoke success', () => {
		let res = log('test')
		expect(log).toBeInstanceOf(Function)
		expect(res).toBeTruthy()
	})

	it('should return a function', () => {
		let res = log('test')
		expect(log).toBeInstanceOf(Function)
		expect(res).toBeTruthy()
		expect(res).toBeInstanceOf(Function)

		let res2 = log('test', 'extra param')
		expect(log).toBeInstanceOf(Function)
		expect(res2).toBeTruthy()
		expect(res2).toBeInstanceOf(Function)

		let res3 = log()
		expect(res3).toBeTruthy()
		expect(res3).toBeInstanceOf(Function)
	})
})
