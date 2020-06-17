<a name="module_accurate"></a>

## accurate
<p>accurate module.</p>

**See**: doc https://github.com/Ipxxiao/accurate/tree/master/docs  

* [accurate](#module_accurate)
    * _static_
        * [.calcAdd](#module_accurate.calcAdd) ⇒ <code>number</code>
        * [.calcSubtract](#module_accurate.calcSubtract) ⇒ <code>number</code>
        * [.calcMul](#module_accurate.calcMul) ⇒ <code>number</code>
        * [.calcDivision](#module_accurate.calcDivision) ⇒ <code>number</code>
        * [.calcModulo](#module_accurate.calcModulo) ⇒ <code>number</code>
    * _inner_
        * [~getExprArray(expr)](#module_accurate..getExprArray) ⇒ <code>Array.&lt;string&gt;</code>
        * [~exprArrayCalc(exprArray)](#module_accurate..exprArrayCalc) ⇒ <code>number</code>
        * [~calcAdd(...args)](#module_accurate..calcAdd) ⇒ <code>number</code>

<a name="module_accurate.calcAdd"></a>

### accurate.calcAdd ⇒ <code>number</code>
<p>精度减法计算</p>

**Kind**: static property of [<code>accurate</code>](#module_accurate)  

| Param | Type |
| --- | --- |
| ...args | <code>Array.&lt;number&gt;</code> | 

**Example**  
```js
calcSubtract(1.1, 0.2, 0.1)
//=> 0.8
```
<a name="module_accurate.calcSubtract"></a>

### accurate.calcSubtract ⇒ <code>number</code>
<p>精度乘法计算</p>

**Kind**: static property of [<code>accurate</code>](#module_accurate)  

| Param | Type |
| --- | --- |
| ...args | <code>Array.&lt;number&gt;</code> | 

**Example**  
```js
calcMultiply(1.1, 0.1, 0.2)
//=> 0.022
```
<a name="module_accurate.calcMul"></a>

### accurate.calcMul ⇒ <code>number</code>
<p>精度除法计算</p>

**Kind**: static property of [<code>accurate</code>](#module_accurate)  

| Param | Type |
| --- | --- |
| ...args | <code>Array.&lt;number&gt;</code> | 

**Example**  
```js
calcDivision(1.1, 10, 2)
//=> 0.055
```
<a name="module_accurate.calcDivision"></a>

### accurate.calcDivision ⇒ <code>number</code>
<p>精度取模计算</p>

**Kind**: static property of [<code>accurate</code>](#module_accurate)  

| Param | Type |
| --- | --- |
| ...args | <code>Array.&lt;number&gt;</code> | 

**Example**  
```js
calcModulo(1.1, 1)
//=> 0.1
```
<a name="module_accurate.calcModulo"></a>

### accurate.calcModulo ⇒ <code>number</code>
<p>算术表达式计算</p>

**Kind**: static property of [<code>accurate</code>](#module_accurate)  

| Param | Type |
| --- | --- |
| expr | <code>string</code> | 

**Example**  
```js
calcExpr('((1.1+0.3)*4+2*3)/(3-1*0.1)-1*5')
//=> -1
```
<a name="module_accurate..getExprArray"></a>

### accurate~getExprArray(expr) ⇒ <code>Array.&lt;string&gt;</code>
<p>获取表达式数组</p>

**Kind**: inner method of [<code>accurate</code>](#module_accurate)  

| Param | Type |
| --- | --- |
| expr | <code>string</code> | 

<a name="module_accurate..exprArrayCalc"></a>

### accurate~exprArrayCalc(exprArray) ⇒ <code>number</code>
<p>表达式数组计算</p>

**Kind**: inner method of [<code>accurate</code>](#module_accurate)  

| Param | Type |
| --- | --- |
| exprArray | <code>Array.&lt;string&gt;</code> | 

<a name="module_accurate..calcAdd"></a>

### accurate~calcAdd(...args) ⇒ <code>number</code>
<p>精度加法计算</p>

**Kind**: inner method of [<code>accurate</code>](#module_accurate)  

| Param | Type |
| --- | --- |
| ...args | <code>Array.&lt;number&gt;</code> | 

**Example**  
```js
calcAdd(1.1, 0.3, 0.1)
//=> 1.5
```
