!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):t.accurate=r()}(this,function(){"use strict";function t(t){var r=!0;for(var e in t)try{if(isNaN(t[e])||"number"!=typeof t[e])throw r=!1,new TypeError("The "+ ++e+"th parameter type is not a number")}catch(t){console.error(t)}return r}function r(t){try{return t.toString().split(".")[1].length}catch(t){return 0}}return{add:function(e,n){if(!t(arguments))return NaN;var u,i,a;return u=r(e),i=r(n),a=Math.pow(10,Math.max(u,i)),(this.mul(e,a)+this.mul(n,a))/a},subtract:function(r,e){if(!t(arguments))return NaN;return this.add(r,-e)},mul:function(e,n){if(!t(arguments))return NaN;var u,i,a,o=e.toString(),f=n.toString();return u=r(e),i=r(n),a=Math.pow(10,u+i),Number.parseInt(o.replace(".",""))*Number.parseInt(f.replace(".",""))/a},division:function(e,n){if(!t(arguments))return NaN;var u,i,a,o,f=e.toString(),c=n.toString();return i=r(e),a=r(n),o=Math.pow(10,a-i),u=Number.parseInt(f.replace(".",""))/Number.parseInt(c.replace(".","")),this.mul(u,o)},modulo:function(e,n){if(!t(arguments))return NaN;var u,i,a;return u=r(e),i=r(n),a=Math.pow(10,Math.max(u,i)),(e=this.mul(e,a))%(n=this.mul(n,a))/a}}});
