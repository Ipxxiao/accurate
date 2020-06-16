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
		expect(accurate.add(1.1, 0.3)).toEqual(1.4)
	})

	it(`subtract`, () => {
		expect(accurate.subtract(1.1, 0.2)).toEqual(0.9)
	})

	it(`mul`, () => {
		expect(accurate.mul(1.1, 0.1)).toEqual(0.11)
	})

	it(`multiply`, () => {
		expect(accurate.multiply(1.1, 0.1)).toEqual(0.11)
	})

	it(`division`, () => {
		expect(accurate.division(1.1, 10)).toEqual(0.11)
	})

	it(`modulo`, () => {
		expect(accurate.modulo(1.1, 1)).toEqual(0.1)
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
