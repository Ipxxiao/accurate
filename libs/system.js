System.register("accurate",[],function(t,r){"use strict";return{execute:function(){function t(t){let r=!0;for(let e in t)try{if(isNaN(t[e])||"number"!=typeof t[e])throw r=!1,new TypeError(`The ${++e}th parameter type is not a number`)}catch(t){console.error(t)}return r}function e(t){try{return t.toString().split(".")[1].length}catch(t){return 0}}r.exports={add(r,n){if(!t(arguments))return NaN;let u=0,i=0,a=0,o=0;return i=e(r),a=e(n),o=10**Math.max(i,a),(u=this.mul(r,o)+this.mul(n,o))/o},subtract(r,e){if(!t(arguments))return NaN;return this.add(r,-e)},mul(r,n){if(!t(arguments))return NaN;let u=0,i=0,a=0,o=0,l=r.toString(),c=n.toString();return o=10**((i=e(r))+(a=e(n))),(u=Number(l.replace(".",""))*Number(c.replace(".","")))/o},division(r,n){if(!t(arguments))return NaN;let u=0,i=0,a=0,o=0,l=r.toString(),c=n.toString();return i=e(r),o=10**((a=e(n))-i),u=Number(l.replace(".",""))/Number(c.replace(".","")),this.mul(u,o)},modulo(r,n){if(!t(arguments))return NaN;let u=0,i=0,a=0,o=0;return i=e(r),a=e(n),o=10**Math.max(i,a),(u=(r=this.mul(r,o))%(n=this.mul(n,o)))/o}}}}});