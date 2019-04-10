let accurate = require('../libs/umd')

// list all of function name
console.log(Object.keys(accurate))
console.log('\r\n')

// add
console.log('-'.repeat(5), 'add');
console.log('0.1 + 0.2');
console.log(0.1 + 0.2);
console.log('accurate', accurate.add(0.1, 0.2));
console.log('\r\n')

// subtract
console.log('-'.repeat(5), 'subtract');
console.log('0.3 - 0.2');
console.log(0.3 - 0.2);
console.log('accurate', accurate.subtract(0.3, 0.2));
console.log('\r\n')

// mul
console.log('-'.repeat(5), 'mul');
console.log('1.1 * 3');
console.log(1.1 * 3);
console.log('accurate', accurate.mul(1.1, 3));
console.log('\r\n')

// division
console.log('-'.repeat(5), 'division');
console.log('1.1 / 10');
console.log(1.1 / 10);
console.log('accurate', accurate.division(1.1, 10));
console.log('\r\n')

// modulo
console.log('-'.repeat(5), 'modulo');
console.log('3.1 % 1');
console.log(3.1 % 1);
console.log('accurate', accurate.modulo(3.1, 1));
console.log('\r\n')