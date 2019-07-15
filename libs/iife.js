var accurate=function(){"use strict";var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(t,r){return t(r={exports:{}},r.exports),r.exports}var n,e,o,i="object",u=function(t){return t&&t.Math==Math&&t},c=u(typeof globalThis==i&&globalThis)||u(typeof window==i&&window)||u(typeof self==i&&self)||u(typeof t==i&&t)||Function("return this")(),a=function(t){try{return!!t()}catch(t){return!0}},l=!a(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),f=function(t){return"object"==typeof t?null!==t:"function"==typeof t},s=c.document,p=f(s)&&f(s.createElement),g=function(t){return p?s.createElement(t):{}},h=!l&&!a(function(){return 7!=Object.defineProperty(g("div"),"a",{get:function(){return 7}}).a}),v=function(t){if(!f(t))throw TypeError(String(t)+" is not an object");return t},d=function(t,r){if(!f(t))return t;var n,e;if(r&&"function"==typeof(n=t.toString)&&!f(e=n.call(t)))return e;if("function"==typeof(n=t.valueOf)&&!f(e=n.call(t)))return e;if(!r&&"function"==typeof(n=t.toString)&&!f(e=n.call(t)))return e;throw TypeError("Can't convert object to primitive value")},y=Object.defineProperty,b={f:l?y:function(t,r,n){if(v(t),r=d(r,!0),v(n),h)try{return y(t,r,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[r]=n.value),t}},m=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}},S=l?function(t,r,n){return b.f(t,r,m(1,n))}:function(t,r,n){return t[r]=n,t},x=function(t,r){try{S(c,t,r)}catch(n){c[t]=r}return r},E=r(function(t){var r=c["__core-js_shared__"]||x("__core-js_shared__",{});(t.exports=function(t,n){return r[t]||(r[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.1.3",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})}),N={}.hasOwnProperty,w=function(t,r){return N.call(t,r)},O=E("native-function-to-string",Function.toString),I=c.WeakMap,j="function"==typeof I&&/native code/.test(O.call(I)),_=0,A=Math.random(),T=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++_+A).toString(36)},M=E("keys"),R=function(t){return M[t]||(M[t]=T(t))},P={},k=c.WeakMap;if(j){var C=new k,F=C.get,$=C.has,D=C.set;n=function(t,r){return D.call(C,t,r),r},e=function(t){return F.call(C,t)||{}},o=function(t){return $.call(C,t)}}else{var L=R("state");P[L]=!0,n=function(t,r){return S(t,L,r),r},e=function(t){return w(t,L)?t[L]:{}},o=function(t){return w(t,L)}}var z={set:n,get:e,has:o,enforce:function(t){return o(t)?e(t):n(t,{})},getterFor:function(t){return function(r){var n;if(!f(r)||(n=e(r)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},G=r(function(t){var r=z.get,n=z.enforce,e=String(O).split("toString");E("inspectSource",function(t){return O.call(t)}),(t.exports=function(t,r,o,i){var u=!!i&&!!i.unsafe,a=!!i&&!!i.enumerable,l=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof r||w(o,"name")||S(o,"name",r),n(o).source=e.join("string"==typeof r?r:"")),t!==c?(u?!l&&t[r]&&(a=!0):delete t[r],a?t[r]=o:S(t,r,o)):a?t[r]=o:x(r,o)})(Function.prototype,"toString",function(){return"function"==typeof this&&r(this).source||O.call(this)})}),V=Date.prototype,U=V.toString,W=V.getTime;new Date(NaN)+""!="Invalid Date"&&G(V,"toString",function(){var t=W.call(this);return t==t?U.call(this):"Invalid Date"});var Y=/#|\.prototype\./,X=function(t,r){var n=K[q(t)];return n==H||n!=B&&("function"==typeof r?a(r):!!r)},q=X.normalize=function(t){return String(t).replace(Y,".").toLowerCase()},K=X.data={},B=X.NATIVE="N",H=X.POLYFILL="P",J=X,Q={}.toString,Z=function(t){return Q.call(t).slice(8,-1)},tt=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),r=n instanceof Array}catch(t){}return function(n,e){return v(n),function(t){if(!f(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype")}(e),r?t.call(n,e):n.__proto__=e,n}}():void 0),rt="".split,nt=a(function(){return!Object("z").propertyIsEnumerable(0)})?function(t){return"String"==Z(t)?rt.call(t,""):Object(t)}:Object,et=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},ot=function(t){return nt(et(t))},it=Math.ceil,ut=Math.floor,ct=function(t){return isNaN(t=+t)?0:(t>0?ut:it)(t)},at=Math.min,lt=function(t){return t>0?at(ct(t),9007199254740991):0},ft=Math.max,st=Math.min,pt=function(t){return function(r,n,e){var o,i=ot(r),u=lt(i.length),c=function(t,r){var n=ct(t);return n<0?ft(n+r,0):st(n,r)}(e,u);if(t&&n!=n){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((t||c in i)&&i[c]===n)return t||c||0;return!t&&-1}},gt={includes:pt(!0),indexOf:pt(!1)}.indexOf,ht=function(t,r){var n,e=ot(t),o=0,i=[];for(n in e)!w(P,n)&&w(e,n)&&i.push(n);for(;r.length>o;)w(e,n=r[o++])&&(~gt(i,n)||i.push(n));return i},vt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],dt=Object.keys||function(t){return ht(t,vt)},yt=l?Object.defineProperties:function(t,r){v(t);for(var n,e=dt(r),o=e.length,i=0;o>i;)b.f(t,n=e[i++],r[n]);return t},bt=c,mt=function(t){return"function"==typeof t?t:void 0},St=function(t,r){return arguments.length<2?mt(bt[t])||mt(c[t]):bt[t]&&bt[t][r]||c[t]&&c[t][r]},xt=St("document","documentElement"),Et=R("IE_PROTO"),Nt=function(){},wt=function(){var t,r=g("iframe"),n=vt.length;for(r.style.display="none",xt.appendChild(r),r.src=String("javascript:"),(t=r.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),wt=t.F;n--;)delete wt.prototype[vt[n]];return wt()},Ot=Object.create||function(t,r){var n;return null!==t?(Nt.prototype=v(t),n=new Nt,Nt.prototype=null,n[Et]=t):n=wt(),void 0===r?n:yt(n,r)};P[Et]=!0;var It=vt.concat("length","prototype"),jt={f:Object.getOwnPropertyNames||function(t){return ht(t,It)}},_t={}.propertyIsEnumerable,At=Object.getOwnPropertyDescriptor,Tt={f:At&&!_t.call({1:2},1)?function(t){var r=At(this,t);return!!r&&r.enumerable}:_t},Mt=Object.getOwnPropertyDescriptor,Rt={f:l?Mt:function(t,r){if(t=ot(t),r=d(r,!0),h)try{return Mt(t,r)}catch(t){}if(w(t,r))return m(!Tt.f.call(t,r),t[r])}},Pt="[\t\n\v\f\r                　\u2028\u2029\ufeff]",kt=RegExp("^"+Pt+Pt+"*"),Ct=RegExp(Pt+Pt+"*$"),Ft=function(t){return function(r){var n=String(et(r));return 1&t&&(n=n.replace(kt,"")),2&t&&(n=n.replace(Ct,"")),n}},$t={start:Ft(1),end:Ft(2),trim:Ft(3)},Dt=jt.f,Lt=Rt.f,zt=b.f,Gt=$t.trim,Vt=c.Number,Ut=Vt.prototype,Wt="Number"==Z(Ot(Ut)),Yt=function(t){var r,n,e,o,i,u,c,a,l=d(t,!1);if("string"==typeof l&&l.length>2)if(43===(r=(l=Gt(l)).charCodeAt(0))||45===r){if(88===(n=l.charCodeAt(2))||120===n)return NaN}else if(48===r){switch(l.charCodeAt(1)){case 66:case 98:e=2,o=49;break;case 79:case 111:e=8,o=55;break;default:return+l}for(u=(i=l.slice(2)).length,c=0;c<u;c++)if((a=i.charCodeAt(c))<48||a>o)return NaN;return parseInt(i,e)}return+l};if(J("Number",!Vt(" 0o1")||!Vt("0b1")||Vt("+0x1"))){for(var Xt,qt=function(t){var r=arguments.length<1?0:t,n=this;return n instanceof qt&&(Wt?a(function(){Ut.valueOf.call(n)}):"Number"!=Z(n))?function(t,r,n){var e,o;return tt&&"function"==typeof(e=r.constructor)&&e!==n&&f(o=e.prototype)&&o!==n.prototype&&tt(t,o),t}(new Vt(Yt(r)),n,qt):Yt(r)},Kt=l?Dt(Vt):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),Bt=0;Kt.length>Bt;Bt++)w(Vt,Xt=Kt[Bt])&&!w(qt,Xt)&&zt(qt,Xt,Lt(Vt,Xt));qt.prototype=Ut,Ut.constructor=qt,G(c,"Number",qt)}var Ht=!!Object.getOwnPropertySymbols&&!a(function(){return!String(Symbol())}),Jt=c.Symbol,Qt=E("wks"),Zt=function(t){return Qt[t]||(Qt[t]=Ht&&Jt[t]||(Ht?Jt:T)("Symbol."+t))},tr=Zt("toStringTag"),rr="Arguments"==Z(function(){return arguments}()),nr={};nr[Zt("toStringTag")]="z";var er="[object z]"!==String(nr)?function(){return"[object "+(void 0===(t=this)?"Undefined":null===t?"Null":"string"==typeof(n=function(t,r){try{return t[r]}catch(t){}}(r=Object(t),tr))?n:rr?Z(r):"Object"==(e=Z(r))&&"function"==typeof r.callee?"Arguments":e)+"]";var t,r,n,e}:nr.toString,or=Object.prototype;er!==or.toString&&G(or,"toString",er,{unsafe:!0});var ir,ur,cr={f:Object.getOwnPropertySymbols},ar=St("Reflect","ownKeys")||function(t){var r=jt.f(v(t)),n=cr.f;return n?r.concat(n(t)):r},lr=function(t,r){for(var n=ar(r),e=b.f,o=Rt.f,i=0;i<n.length;i++){var u=n[i];w(t,u)||e(t,u,o(r,u))}},fr=Rt.f,sr=function(){var t=v(this),r="";return t.global&&(r+="g"),t.ignoreCase&&(r+="i"),t.multiline&&(r+="m"),t.dotAll&&(r+="s"),t.unicode&&(r+="u"),t.sticky&&(r+="y"),r},pr=RegExp.prototype.exec,gr=String.prototype.replace,hr=pr,vr=(ir=/a/,ur=/b*/g,pr.call(ir,"a"),pr.call(ur,"a"),0!==ir.lastIndex||0!==ur.lastIndex),dr=void 0!==/()??/.exec("")[1];(vr||dr)&&(hr=function(t){var r,n,e,o,i=this;return dr&&(n=new RegExp("^"+i.source+"$(?!\\s)",sr.call(i))),vr&&(r=i.lastIndex),e=pr.call(i,t),vr&&e&&(i.lastIndex=i.global?e.index+e[0].length:r),dr&&e&&e.length>1&&gr.call(e[0],n,function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(e[o]=void 0)}),e});var yr=hr;!function(t,r){var n,e,o,i,u,a=t.target,l=t.global,f=t.stat;if(n=l?c:f?c[a]||x(a,{}):(c[a]||{}).prototype)for(e in r){if(i=r[e],o=t.noTargetGet?(u=fr(n,e))&&u.value:n[e],!J(l?e:a+(f?".":"#")+e,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;lr(i,o)}(t.sham||o&&o.sham)&&S(i,"sham",!0),G(n,e,i,t)}}({target:"RegExp",proto:!0,forced:/./.exec!==yr},{exec:yr});var br=RegExp.prototype,mr=br.toString,Sr=a(function(){return"/a/b"!=mr.call({source:"a",flags:"b"})}),xr="toString"!=mr.name;(Sr||xr)&&G(RegExp.prototype,"toString",function(){var t=v(this),r=String(t.source),n=t.flags;return"/"+r+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in br)?sr.call(t):n)},{unsafe:!0});var Er=Zt("species"),Nr=!a(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),wr=!a(function(){var t=/(?:)/,r=t.exec;t.exec=function(){return r.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}),Or=function(t,r,n,e){var o=Zt(t),i=!a(function(){var r={};return r[o]=function(){return 7},7!=""[t](r)}),u=i&&!a(function(){var r=!1,n=/a/;return n.exec=function(){return r=!0,null},"split"===t&&(n.constructor={},n.constructor[Er]=function(){return n}),n[o](""),!r});if(!i||!u||"replace"===t&&!Nr||"split"===t&&!wr){var c=/./[o],l=n(o,""[t],function(t,r,n,e,o){return r.exec===yr?i&&!o?{done:!0,value:c.call(r,n,e)}:{done:!0,value:t.call(n,r,e)}:{done:!1}}),f=l[0],s=l[1];G(String.prototype,t,f),G(RegExp.prototype,o,2==r?function(t,r){return s.call(t,this,r)}:function(t){return s.call(t,this)}),e&&S(RegExp.prototype[o],"sham",!0)}},Ir=function(t){return Object(et(t))},jr=function(t){return function(r,n){var e,o,i=String(et(r)),u=ct(n),c=i.length;return u<0||u>=c?t?"":void 0:(e=i.charCodeAt(u))<55296||e>56319||u+1===c||(o=i.charCodeAt(u+1))<56320||o>57343?t?i.charAt(u):e:t?i.slice(u,u+2):o-56320+(e-55296<<10)+65536}},_r={codeAt:jr(!1),charAt:jr(!0)}.charAt,Ar=function(t,r,n){return r+(n?_r(t,r).length:1)},Tr=function(t,r){var n=t.exec;if("function"==typeof n){var e=n.call(t,r);if("object"!=typeof e)throw TypeError("RegExp exec method returned something other than an Object or null");return e}if("RegExp"!==Z(t))throw TypeError("RegExp#exec called on incompatible receiver");return yr.call(t,r)},Mr=Math.max,Rr=Math.min,Pr=Math.floor,kr=/\$([$&'`]|\d\d?|<[^>]*>)/g,Cr=/\$([$&'`]|\d\d?)/g;Or("replace",2,function(t,r,n){return[function(n,e){var o=et(this),i=null==n?void 0:n[t];return void 0!==i?i.call(n,o,e):r.call(String(o),n,e)},function(t,o){var i=n(r,t,this,o);if(i.done)return i.value;var u=v(t),c=String(this),a="function"==typeof o;a||(o=String(o));var l=u.global;if(l){var f=u.unicode;u.lastIndex=0}for(var s=[];;){var p=Tr(u,c);if(null===p)break;if(s.push(p),!l)break;""===String(p[0])&&(u.lastIndex=Ar(c,lt(u.lastIndex),f))}for(var g,h="",d=0,y=0;y<s.length;y++){p=s[y];for(var b=String(p[0]),m=Mr(Rr(ct(p.index),c.length),0),S=[],x=1;x<p.length;x++)S.push(void 0===(g=p[x])?g:String(g));var E=p.groups;if(a){var N=[b].concat(S,m,c);void 0!==E&&N.push(E);var w=String(o.apply(void 0,N))}else w=e(b,c,m,S,E,o);m>=d&&(h+=c.slice(d,m)+w,d=m+b.length)}return h+c.slice(d)}];function e(t,n,e,o,i,u){var c=e+t.length,a=o.length,l=Cr;return void 0!==i&&(i=Ir(i),l=kr),r.call(u,l,function(r,u){var l;switch(u.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,e);case"'":return n.slice(c);case"<":l=i[u.slice(1,-1)];break;default:var f=+u;if(0===f)return r;if(f>a){var s=Pr(f/10);return 0===s?r:s<=a?void 0===o[s-1]?u.charAt(1):o[s-1]+u.charAt(1):r}l=o[f-1]}return void 0===l?"":l})}});var Fr=Zt("match"),$r=Zt("species"),Dr=function(t,r){var n,e=v(t).constructor;return void 0===e||null==(n=v(e)[$r])?r:function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}(n)},Lr=[].push,zr=Math.min,Gr=!a(function(){return!RegExp(4294967295,"y")});function Vr(t){var r=!0;for(var n in t)try{if(isNaN(t[n])||"number"!=typeof t[n])throw r=!1,new TypeError("The ".concat(++n,"th parameter type is not a number"))}catch(t){console.error(t)}return r}function Ur(t){try{return t.toString().split(".")[1].length}catch(t){return 0}}return Or("split",2,function(t,r,n){var e;return e="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var e,o,i=String(et(this)),u=void 0===n?4294967295:n>>>0;if(0===u)return[];if(void 0===t)return[i];if(!f(e=t)||(void 0!==(o=e[Fr])?!o:"RegExp"!=Z(e)))return r.call(i,t,u);for(var c,a,l,s=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,h=new RegExp(t.source,p+"g");(c=yr.call(h,i))&&!((a=h.lastIndex)>g&&(s.push(i.slice(g,c.index)),c.length>1&&c.index<i.length&&Lr.apply(s,c.slice(1)),l=c[0].length,g=a,s.length>=u));)h.lastIndex===c.index&&h.lastIndex++;return g===i.length?!l&&h.test("")||s.push(""):s.push(i.slice(g)),s.length>u?s.slice(0,u):s}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:r.call(this,t,n)}:r,[function(r,n){var o=et(this),i=null==r?void 0:r[t];return void 0!==i?i.call(r,o,n):e.call(String(o),r,n)},function(t,o){var i=n(e,t,this,o,e!==r);if(i.done)return i.value;var u=v(t),c=String(this),a=Dr(u,RegExp),l=u.unicode,f=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(Gr?"y":"g"),s=new a(Gr?u:"^(?:"+u.source+")",f),p=void 0===o?4294967295:o>>>0;if(0===p)return[];if(0===c.length)return null===Tr(s,c)?[c]:[];for(var g=0,h=0,d=[];h<c.length;){s.lastIndex=Gr?h:0;var y,b=Tr(s,Gr?c:c.slice(h));if(null===b||(y=zr(lt(s.lastIndex+(Gr?0:h)),c.length))===g)h=Ar(c,h,l);else{if(d.push(c.slice(g,h)),d.length===p)return d;for(var m=1;m<=b.length-1;m++)if(d.push(b[m]),d.length===p)return d;h=g=y}}return d.push(c.slice(g)),d}]},!Gr),{add:function(t,r){if(!Vr(arguments))return NaN;var n,e,o;return n=Ur(t),e=Ur(r),o=Math.pow(10,Math.max(n,e)),(this.mul(t,o)+this.mul(r,o))/o},subtract:function(t,r){if(!Vr(arguments))return NaN;return this.add(t,-r)},mul:function(t,r){if(!Vr(arguments))return NaN;var n,e,o,i=t.toString(),u=r.toString();return n=Ur(t),e=Ur(r),o=Math.pow(10,n+e),Number(i.replace(".",""))*Number(u.replace(".",""))/o},division:function(t,r){if(!Vr(arguments))return NaN;var n,e,o,i,u=t.toString(),c=r.toString();return e=Ur(t),o=Ur(r),i=Math.pow(10,o-e),n=Number(u.replace(".",""))/Number(c.replace(".","")),this.mul(n,i)},modulo:function(t,r){if(!Vr(arguments))return NaN;var n,e,o;return n=Ur(t),e=Ur(r),o=Math.pow(10,Math.max(n,e)),(t=this.mul(t,o))%(r=this.mul(r,o))/o}}}();
