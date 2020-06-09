<a name="module_accurate"></a>

## accurate
<p>accurate module.</p>

**See**: doc https://github.com/Ipxxiao/accurate/tree/master/docs  

* [accurate](#module_accurate)
    * _static_
        * [.add](#module_accurate.add) ⇒ <code>number</code>
        * [.subtract](#module_accurate.subtract) ⇒ <code>number</code>
        * [.mul](#module_accurate.mul) ⇒ <code>number</code>
        * [.division](#module_accurate.division) ⇒ <code>number</code>
    * _inner_
        * [~getDecimalDigits(num)](#module_accurate..getDecimalDigits) ⇒ <code>number</code>
        * [~add(num1, num2)](#module_accurate..add) ⇒ <code>number</code>

<a name="module_accurate.add"></a>

### accurate.add ⇒ <code>number</code>
<p>精度减法计算</p>

**Kind**: static property of [<code>accurate</code>](#module_accurate)  

| Param | Type |
| --- | --- |
| num1 | <code>number</code> | 
| num2 | <code>number</code> | 

**Example**  
```js
subtract(1.1, 0.2)
//=> 0.9
```
<a name="module_accurate.subtract"></a>

### accurate.subtract ⇒ <code>number</code>
<p>精度乘法计算</p>

**Kind**: static property of [<code>accurate</code>](#module_accurate)  

| Param | Type |
| --- | --- |
| num1 | <code>number</code> | 
| num2 | <code>number</code> | 

**Example**  
```js
multiply(1.1, 0.1)
//=> 0.11
```
<a name="module_accurate.mul"></a>

### accurate.mul ⇒ <code>number</code>
<p>精度除法计算</p>

**Kind**: static property of [<code>accurate</code>](#module_accurate)  

| Param | Type |
| --- | --- |
| num1 | <code>number</code> | 
| num2 | <code>number</code> | 

**Example**  
```js
division(1.1, 10)
//=> 0.11
```
<a name="module_accurate.division"></a>

### accurate.division ⇒ <code>number</code>
<p>精度取模计算</p>

**Kind**: static property of [<code>accurate</code>](#module_accurate)  

| Param | Type |
| --- | --- |
| num1 | <code>number</code> | 
| num2 | <code>number</code> | 

**Example**  
```js
modulo(1.1, 1)
//=> 0.1
```
<a name="module_accurate..getDecimalDigits"></a>

### accurate~getDecimalDigits(num) ⇒ <code>number</code>
<p>获取小数位数</p>

**Kind**: inner method of [<code>accurate</code>](#module_accurate)  

| Param | Type |
| --- | --- |
| num | <code>number</code> | 

<a name="module_accurate..add"></a>

### accurate~add(num1, num2) ⇒ <code>number</code>
<p>精度加法计算</p>

**Kind**: inner method of [<code>accurate</code>](#module_accurate)  

| Param | Type |
| --- | --- |
| num1 | <code>number</code> | 
| num2 | <code>number</code> | 

**Example**  
```js
add(1.1, 0.3)
//=> 1.4
```
