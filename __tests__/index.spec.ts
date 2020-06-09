import accurate, { add, subtract, mul, multiply, division, modulo } from '../src/index'

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
		expect(add(1.1, 0.3)).toEqual(1.4)
	})

	it(`subtract`, () => {
		expect(subtract(1.1, 0.2)).toEqual(0.9)
	})

	it(`mul`, () => {
		expect(mul(1.1, 0.1)).toEqual(0.11)
	})

	it(`multiply`, () => {
		expect(multiply(1.1, 0.1)).toEqual(0.11)
	})

	it(`division`, () => {
		expect(division(1.1, 10)).toEqual(0.11)
	})

	it(`modulo`, () => {
		expect(modulo(1.1, 1)).toEqual(0.1)
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
