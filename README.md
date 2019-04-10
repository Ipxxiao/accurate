# accuracy calculation for js

## there have 6 modes of amd, cjs, es, iife, system, umd. 

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
const accurate = require('accurate')
or
import accurate from 'accurate'
```


. **add**
``` javascript
0.1 + 0.2
accurate.add(0.1, 0.2)
```

``` javascript
0.30000000000000004
0.3
```

. **subtract**
``` javascript
0.3 - 0.2
accurate.subtract(0.3, 0.2)
```

``` javascript
0.09999999999999998
0.1
```

. **mul**
``` javascript
1.1 * 3
accurate.mul(1.1, 3)
```

``` javascript
3.3000000000000003
3.3
```

. **division**
``` javascript
1.1 / 10
accurate.division(1.1, 10)
```

``` javascript
0.11000000000000001
0.11
```

. **modulo**
``` javascript
3.1 % 1
accurate.modulo(3.1, 1)
```

``` javascript
0.10000000000000009
0.1
```