!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):r.accurate=e()}(this,function(){"use strict";var r=function(r){var e=!0;for(var t in r){var n=r[t];try{if(isNaN(n)||"number"!=typeof n){var u=Number(t);throw e=!1,new TypeError("The "+ ++u+"th parameter type is not a number")}}catch(r){console.error(r)}}return e},e=function(r){try{return r.toString().split(".")[1].length}catch(r){return 0}},t=function(t,u){if(!r([t,u]))return NaN;t=Number(t),u=Number(u);var a,o,i;return a=e(t),o=e(u),i=Math.pow(10,Math.max(a,o)),(n(t,i)+n(u,i))/i},n=function(t,n){if(!r([t,n]))return NaN;t=Number(t),n=Number(n);var u,a,o,i=t.toString(),N=n.toString();return u=e(t),a=e(n),o=Math.pow(10,u+a),Number.parseInt(i.replace(".",""))*Number.parseInt(N.replace(".",""))/o};return{add:t,subtract:function(e,n){return r([e,n])?(e=Number(e),n=Number(n),t(e,-n)):NaN},mul:n,division:function(t,u){if(!r([t,u]))return NaN;t=Number(t),u=Number(u);var a,o,i,N,m=t.toString(),c=u.toString();return o=e(t),i=e(u),N=Math.pow(10,i-o),a=Number.parseInt(m.replace(".",""))/Number.parseInt(c.replace(".","")),n(a,N)},modulo:function(t,u){if(!r([t,u]))return NaN;t=Number(t),u=Number(u);var a,o,i;return a=e(t),o=e(u),i=Math.pow(10,Math.max(a,o)),(t=n(t,i))%(u=n(u,i))/i}}});
