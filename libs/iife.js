var accurate=function(){"use strict";var r=function(r){var t=!0;for(var e in r){var n=r[e];try{if(isNaN(n)||"number"!=typeof n){var u=Number(e);throw t=!1,new TypeError("The "+ ++u+"th parameter type is not a number")}}catch(r){console.error(r)}}return t},t=function(r){try{return r.toString().split(".")[1].length}catch(r){return 0}},e=function(e,u){if(!r([e,u]))return NaN;e=Number(e),u=Number(u);var a,o,N;return a=t(e),o=t(u),N=Math.pow(10,Math.max(a,o)),(n(e,N)+n(u,N))/N},n=function(e,n){if(!r([e,n]))return NaN;e=Number(e),n=Number(n);var u,a,o,N=e.toString(),i=n.toString();return u=t(e),a=t(n),o=Math.pow(10,u+a),Number.parseInt(N.replace(".",""))*Number.parseInt(i.replace(".",""))/o};return{add:e,subtract:function(t,n){return r([t,n])?(t=Number(t),n=Number(n),e(t,-n)):NaN},mul:n,division:function(e,u){if(!r([e,u]))return NaN;e=Number(e),u=Number(u);var a,o,N,i,m=e.toString(),c=u.toString();return o=t(e),N=t(u),i=Math.pow(10,N-o),a=Number.parseInt(m.replace(".",""))/Number.parseInt(c.replace(".","")),n(a,i)},modulo:function(e,u){if(!r([e,u]))return NaN;e=Number(e),u=Number(u);var a,o,N;return a=t(e),o=t(u),N=Math.pow(10,Math.max(a,o)),(e=n(e,N))%(u=n(u,N))/N}}}();
