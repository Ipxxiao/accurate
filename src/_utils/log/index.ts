export default (...info: any[]): Function => {
	/* istanbul ignore next */
	return function decorator(target: any, key: string, descriptor: PropertyDescriptor) {
		const original = descriptor.value
		if (typeof original === 'function') {
			descriptor.value = function(...args: any[]): any {
				let me: any = this
				if (me.debug) {
					console.log(info[0] + '='.repeat(50), `${args}`)
					console.info(me.eventSource)
					console.log('='.repeat(50))
				}
				return original.apply(this, args)
			}
		}
		return descriptor
	}
}
