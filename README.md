# accurate
accuracy calculation for js  
there have 6 modes of amd, cjs, es, iife, system, umd. 

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
0.1
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