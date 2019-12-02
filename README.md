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
import accurate, { add, subtract, mul, division, modulo } from 'accurate'
```


. **add**
``` javascript
>
1.1 + 0.3
accurate.add(1.1, 0.3)
```

``` javascript
<-
1.4000000000000001
1.4
```

. **subtract**
``` javascript
>
1.1 - 0.2
accurate.subtract(1.1, 0.2)
```

``` javascript
<-
0.9000000000000001
0.9
```

. **mul**
``` javascript
>
1.1 * 0.1
accurate.mul(1.1, 0.1)
```

``` javascript
<-
0.11000000000000001
0.11
```

. **division**
``` javascript
>
1.1 / 10
accurate.division(1.1, 10)
```

``` javascript
<-
0.11000000000000001
0.11
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

## More
- [Docs](https://github.com/Ipxxiao/accurate/tree/master/docs)
- [Test](https://github.com/Ipxxiao/accurate/blob/master/__tests__/index.spec.ts)