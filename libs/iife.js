!function(){"use strict";module.exports={add(t,e){if(isNaN(t)||"number"!=typeof t)return console.warn("The arg1 parameter type of the add function is not a number"),NaN;if(isNaN(e)||"number"!=typeof e)return console.warn("The arg2 parameter type of the add function is not a number"),NaN;let r=0,n=0,a=0,o=0;try{n=t.toString().split(".")[1].length}catch(t){n=0}try{a=e.toString().split(".")[1].length}catch(t){a=0}return o=10**Math.max(n,a),(r=this.mul(t,o)+this.mul(e,o))/o},subtract(t,e){if(isNaN(t)||"number"!=typeof t)return console.warn("The arg1 parameter type of the subtract function is not a number"),NaN;if(isNaN(e)||"number"!=typeof e)return console.warn("The arg2 parameter type of the subtract function is not a number"),NaN;return this.add(t,-e)},mul(t,e){if(isNaN(t)||"number"!=typeof t)return console.warn("The arg1 parameter type of the mul function is not a number"),NaN;if(isNaN(e)||"number"!=typeof e)return console.warn("The arg2 parameter type of the mul function is not a number"),NaN;let r=0,n=0,a=0,o=0,i=t.toString(),u=e.toString();try{n+=i.split(".")[1].length}catch(t){n=0}try{a+=u.split(".")[1].length}catch(t){a=0}return o=10**(n+a),(r=Number(i.replace(".",""))*Number(u.replace(".","")))/o},division(t,e){if(isNaN(t)||"number"!=typeof t)return console.warn("The arg1 parameter type of the division function is not a number"),NaN;if(isNaN(e)||"number"!=typeof e)return console.warn("The arg2 parameter type of the division function is not a number"),NaN;let r=0,n=0,a=0,o=0,i=t.toString(),u=e.toString();try{n=i.split(".")[1].length}catch(t){n=0}try{a=u.split(".")[1].length}catch(t){a=0}return o=10**(a-n),r=Number(i.replace(".",""))/Number(u.replace(".","")),this.mul(r,o)},modulo(t,e){if(isNaN(t)||"number"!=typeof t)return console.warn("The arg1 parameter type of the modulo function is not a number"),NaN;if(isNaN(e)||"number"!=typeof e)return console.warn("The arg2 parameter type of the modulo function is not a number"),NaN;let r=0,n=0,a=0,o=0;try{n=t.toString().split(".")[1].length}catch(t){n=0}try{a=e.toString().split(".")[1].length}catch(t){a=0}return o=10**Math.max(n,a),(r=(t=this.mul(t,o))%(e=this.mul(e,o)))/o}}}();
