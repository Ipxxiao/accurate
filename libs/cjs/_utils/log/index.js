"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function () {
    var info = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        info[_i] = arguments[_i];
    }
    /* istanbul ignore next */
    return function decorator(target, key, descriptor) {
        var original = descriptor.value;
        if (typeof original === 'function') {
            descriptor.value = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var me = this;
                if (me.debug) {
                    console.log(info[0] + '='.repeat(50), "" + args);
                    console.info(me.eventSource);
                    console.log('='.repeat(50));
                }
                return original.apply(this, args);
            };
        }
        return descriptor;
    };
});
//# sourceMappingURL=index.js.map