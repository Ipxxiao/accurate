# Description

[![NPM version](https://img.shields.io/npm/v/accurate.svg?style=flat)](https://www.npmjs.com/package/accurate)
[![Build Status](https://travis-ci.org/Ipxxiao/accurate.svg?branch=master)](https://travis-ci.org/Ipxxiao/accurate)
[![codecov](https://codecov.io/gh/Ipxxiao/accurate/branch/master/graph/badge.svg)](https://codecov.io/gh/Ipxxiao/accurate)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![NPM downloads](https://img.shields.io/npm/dm/accurate.svg?style=flat)](https://www.npmjs.com/package/accurate)
[![Coverage Status](https://coveralls.io/repos/github/Ipxxiao/accurate/badge.svg?branch=master)](https://coveralls.io/github/Ipxxiao/accurate?branch=master)

Accurate is an precision calculation for JavaScript and Nodejs. supports numbers, decimals, strings, arrays, matrices and expression.
解决JavaScript与Node.js精度计算（浮点数计算精度）问题。支持数字、小数、字符串、数组、矩阵和表达式。

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE8+ Edge+                                                                                                                                                                                                      | last 10 versions                                                                                                                                                                                                  | last 10 versions                                                                                                                                                                                              | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                           |

## Install

``` base
npm i accurate -S
or
yarn add accurate
```

## Features

- Supports numbers, decimals, strings, arrays and matrices.
- Contains arithmetic expression parser.
- Runs on any JavaScript engine.
- Is easily extensible.
- Open source.

- 支持数字、小数、字符串、数组和矩阵。
- 包含算术表达式解析器。
- 运行在任何JavaScript引擎。
- 易于扩展。
- 开源的。

## Usage

``` javascript 
import accurate, {
  add, addition, subtract, subtraction, multiply, mul, multiplication, division, divide, modulo, modulus, expr
} from 'accurate'
or
const accurate, {
  add, addition, subtract, subtraction, multiply, mul, multiplication, division, divide, modulo, modulus, expr
} = require('accurate')
```


. **add（加法）**
``` javascript
>
1.1 + 0.3 + 0.1
accurate.add(1.1, 0.3, 0.1)
addition(1.1, 0.3, 0.1)

<-
1.5000000000000002
1.5
1.5
```

. **subtract（减法）**
``` javascript
>
1.1 - 0.2 - 0.1
accurate.subtract([1.1, 0.2, 0.1])
subtraction([1.1, 0.2, 0.1])

<-
0.8000000000000002
0.8
0.8
```

. **multiply（乘法）**
``` javascript
>
1.1 * 0.1 * 0.2
accurate.multiply([1.1, [0.1, 0.2]])
accurate.mul([1.1, [0.1, 0.2]])
multiplication([1.1, [0.1, 0.2]])

<-
0.022000000000000006
0.022
0.022
0.022
```

. **division（除法）**
``` javascript
>
1.1 / 10 / 2
accurate.division([1.1, 10], 2)
accurate.divide([1.1, 10], 2)

<-
0.05500000000000001
0.055
0.055
```

. **modulo（取模）**
``` javascript
>
1.1 % 1
accurate.modulo(1.1, 1)
accurate.modulus(1.1, 1)

<-
0.10000000000000009
0.1
0.1
```

. **expr（表达式）**
``` javascript
>
((1.1+0.3)*4+2*3)/(1.1%0.3-1*0.1)-1*5
accurate.expr('((1.1+0.3)*4+2*3)/(1.1%0.3-1*0.1)-1*5')

<-
110.99999999999987
111
```

## More
- [Docs](https://github.com/Ipxxiao/accurate/tree/master/docs)
- [Test](https://github.com/Ipxxiao/accurate/blob/master/__tests__/index.spec.ts)
