!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e():"function"==typeof define&&define.amd?define(e):e()}(0,function(){"use strict";function t(t){let e=!0;for(let r in t)try{if(isNaN(t[r])||"number"!=typeof t[r])throw e=!1,new TypeError(`The ${++r}th parameter type is not a number`)}catch(t){console.error(t)}return e}function e(t){try{return t.toString().split(".")[1].length}catch(t){return 0}}module.exports={add(r,n){if(!t(arguments))return NaN;let u=0,i=0,o=0,a=0;return i=e(r),o=e(n),a=10**Math.max(i,o),(u=this.mul(r,a)+this.mul(n,a))/a},subtract(e,r){if(!t(arguments))return NaN;return this.add(e,-r)},mul(r,n){if(!t(arguments))return NaN;let u=0,i=0,o=0,a=0,l=r.toString(),f=n.toString();return a=10**((i=e(r))+(o=e(n))),(u=Number(l.replace(".",""))*Number(f.replace(".","")))/a},division(r,n){if(!t(arguments))return NaN;let u=0,i=0,o=0,a=0,l=r.toString(),f=n.toString();return i=e(r),a=10**((o=e(n))-i),u=Number(l.replace(".",""))/Number(f.replace(".","")),this.mul(u,a)},modulo(r,n){if(!t(arguments))return NaN;let u=0,i=0,o=0,a=0;return i=e(r),o=e(n),a=10**Math.max(i,o),(u=(r=this.mul(r,a))%(n=this.mul(n,a)))/a}}});
