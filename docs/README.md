<a name="module_accurate"></a>

## accurate
<p>accurate module.</p>

**See**: doc https://github.com/Ipxxiao/accurate/tree/master/docs  

* [accurate](#module_accurate)
    * _static_
        * [.addition](#module_accurate.addition) ⇒ <code>number</code>
        * [.subtraction](#module_accurate.subtraction) ⇒ <code>number</code>
        * [.multiplication](#module_accurate.multiplication) ⇒ <code>number</code>
        * [.divide](#module_accurate.divide) ⇒ <code>number</code>
        * [.modulus](#module_accurate.modulus) ⇒ <code>number</code>
    * _inner_
        * [~flat(calc, ...args)](#module_accurate..flat) ⇒ <code>number</code>
        * [~add(...args)](#module_accurate..add) ⇒ <code>number</code>

<a name="module_accurate.addition"></a>

### accurate.addition ⇒ <code>number</code>
<p>精度减法计算</p>

**Kind**: static property of [<code>accurate</code>](#module_accurate)  

| Param | Type |
| --- | --- |
| ...args | <code>Array.&lt;number&gt;</code> | 

**Example**  
```js
subtract(1.1, 0.2, 0.1)
//=> 0.8
```
<a name="module_accurate.subtraction"></a>

### accurate.subtraction ⇒ <code>number</code>
<p>精度乘法计算</p>

**Kind**: static property of [<code>accurate</code>](#module_accurate)  

| Param | Type |
| --- | --- |
| ...args | <code>Array.&lt;number&gt;</code> | 

**Example**  
```js
multiply(1.1, 0.1, 0.2)
//=> 0.022
```
<a name="module_accurate.multiplication"></a>

### accurate.multiplication ⇒ <code>number</code>
<p>精度除法计算</p>

**Kind**: static property of [<code>accurate</code>](#module_accurate)  

| Param | Type |
| --- | --- |
| ...args | <code>Array.&lt;number&gt;</code> | 

**Example**  
```js
division(1.1, 10, 2)
//=> 0.055
```
<a name="module_accurate.divide"></a>

### accurate.divide ⇒ <code>number</code>
<p>精度取模计算</p>

**Kind**: static property of [<code>accurate</code>](#module_accurate)  

| Param | Type |
| --- | --- |
| ...args | <code>Array.&lt;number&gt;</code> | 

**Example**  
```js
modulo(1.1, 1)
//=> 0.1
```
<a name="module_accurate.modulus"></a>

### accurate.modulus ⇒ <code>number</code>
<p>算术表达式计算</p>

**Kind**: static property of [<code>accurate</code>](#module_accurate)  

| Param | Type |
| --- | --- |
| expr | <code>string</code> | 

**Example**  
```js
expr('((1.1+0.3)*4+2*3)/(3-1*0.1)-1*5')
//=> -1
```
<a name="module_accurate..flat"></a>

### accurate~flat(calc, ...args) ⇒ <code>number</code>
<p>扁平化数组</p>

**Kind**: inner method of [<code>accurate</code>](#module_accurate)  

| Param | Type |
| --- | --- |
| calc | <code>function</code> | 
| ...args | <code>Array.&lt;number&gt;</code> | 

<a name="module_accurate..add"></a>

### accurate~add(...args) ⇒ <code>number</code>
<p>精度加法计算</p>

**Kind**: inner method of [<code>accurate</code>](#module_accurate)  

| Param | Type |
| --- | --- |
| ...args | <code>Array.&lt;number&gt;</code> | 

**Example**  
```js
add(1.1, 0.3, 0.1)
//=> 1.5
```
