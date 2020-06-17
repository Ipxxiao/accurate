# accurate

[![NPM version](https://img.shields.io/npm/v/accurate.svg?style=flat)](https://www.npmjs.com/package/accurate)
[![Build Status](https://travis-ci.org/Ipxxiao/accurate.svg?branch=master)](https://travis-ci.org/Ipxxiao/accurate)
[![codecov](https://codecov.io/gh/Ipxxiao/accurate/branch/master/graph/badge.svg)](https://codecov.io/gh/Ipxxiao/accurate)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

accuracy calculation for js. 解决Javascript浮点运算精度问题。

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE8+ Edge+                                                                                                                                                                                                      | last 10 versions                                                                                                                                                                                                  | last 10 versions                                                                                                                                                                                              | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                           |

## install

``` base
npm i accurate -S
```

## build with rollup

``` base
npm run build
```

## use

``` javascript 
import accurate, { calcAdd, calcSubtract, calcMul, calcMultiply, calcDivision, calcModulo, calcExpr } from 'accurate'
```


. **add**
``` javascript
>
1.1 + 0.3 + 0.1
accurate.add(1.1, 0.3, 0.1)
```

``` javascript
<-
1.5000000000000002
1.5
```

. **subtract**
``` javascript
>
1.1 - 0.2 - 0.1
accurate.subtract(1.1, 0.2, 0.1)
```

``` javascript
<-
0.8000000000000002
0.8
```

. **multiply**
``` javascript
>
1.1 * 0.1 * 0.2
accurate.mul(1.1, 0.1, 0.2)
accurate.multiply(1.1, 0.1, 0.2)
```

``` javascript
<-
0.022000000000000006
0.022
0.022
```

. **division**
``` javascript
>
1.1 / 10 / 2
accurate.division(1.1, 10, 2)
```

``` javascript
<-
0.05500000000000001
0.055
```

. **modulo**
``` javascript
>
1.1 % 1
accurate.modulo(1.1, 1)
```

``` javascript
<-
0.10000000000000009
0.1
```

. **expr**
``` javascript
>
((1.1+0.3)*4+2*3)/(1.1%0.3-1*0.1)-1*5
accurate.expr('((1.1+0.3)*4+2*3)/(1.1%0.3-1*0.1)-1*5')
```

``` javascript
<-
110.99999999999987
111
```

## More
- [Docs](https://github.com/Ipxxiao/accurate/tree/master/docs)
- [Test](https://github.com/Ipxxiao/accurate/blob/master/__tests__/index.spec.ts)