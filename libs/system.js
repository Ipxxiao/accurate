System.register("accurate",[],function(t,r){"use strict";return{execute:function(){function r(t,r){return t(r={exports:{}},r.exports),r.exports}var n,e,o,i="object"==typeof window&&window&&window.Math==Math?window:"object"==typeof self&&self&&self.Math==Math?self:Function("return this")(),u=function(t){try{return!!t()}catch(t){return!0}},c=!u(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),a=function(t){return"object"==typeof t?null!==t:"function"==typeof t},l=i.document,f=a(l)&&a(l.createElement),s=function(t){return f?l.createElement(t):{}},p=!c&&!u(function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}),g=function(t){if(!a(t))throw TypeError(String(t)+" is not an object");return t},h=function(t,r){if(!a(t))return t;var n,e;if(r&&"function"==typeof(n=t.toString)&&!a(e=n.call(t)))return e;if("function"==typeof(n=t.valueOf)&&!a(e=n.call(t)))return e;if(!r&&"function"==typeof(n=t.toString)&&!a(e=n.call(t)))return e;throw TypeError("Can't convert object to primitive value")},v=Object.defineProperty,d={f:c?v:function(t,r,n){if(g(t),r=h(r,!0),g(n),p)try{return v(t,r,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[r]=n.value),t}},y=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}},b=c?function(t,r,n){return d.f(t,r,y(1,n))}:function(t,r,n){return t[r]=n,t},m={}.hasOwnProperty,S=function(t,r){return m.call(t,r)},x=function(t,r){try{b(i,t,r)}catch(n){i[t]=r}return r},N=r(function(t){var r=i["__core-js_shared__"]||x("__core-js_shared__",{});(t.exports=function(t,n){return r[t]||(r[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.0.0",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})}),E=N("native-function-to-string",Function.toString),w=i.WeakMap,I="function"==typeof w&&/native code/.test(E.call(w)),O=0,j=Math.random(),_=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++O+j).toString(36))},M=N("keys"),T=function(t){return M[t]||(M[t]=_(t))},A={},R=i.WeakMap;if(I){var P=new R,k=P.get,C=P.has,F=P.set;n=function(t,r){return F.call(P,t,r),r},e=function(t){return k.call(P,t)||{}},o=function(t){return C.call(P,t)}}else{var $=T("state");A[$]=!0,n=function(t,r){return b(t,$,r),r},e=function(t){return S(t,$)?t[$]:{}},o=function(t){return S(t,$)}}var D={set:n,get:e,has:o,enforce:function(t){return o(t)?e(t):n(t,{})},getterFor:function(t){return function(r){var n;if(!a(r)||(n=e(r)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},L=r(function(t){var r=D.get,n=D.enforce,e=String(E).split("toString");N("inspectSource",function(t){return E.call(t)}),(t.exports=function(t,r,o,u){var c=!!u&&!!u.unsafe,a=!!u&&!!u.enumerable,l=!!u&&!!u.noTargetGet;"function"==typeof o&&("string"!=typeof r||S(o,"name")||b(o,"name",r),n(o).source=e.join("string"==typeof r?r:"")),t!==i?(c?!l&&t[r]&&(a=!0):delete t[r],a?t[r]=o:b(t,r,o)):a?t[r]=o:x(r,o)})(Function.prototype,"toString",function(){return"function"==typeof this&&r(this).source||E.call(this)})}),z=Date.prototype,G=z.toString,V=z.getTime;new Date(NaN)+""!="Invalid Date"&&L(z,"toString",function(){var t=V.call(this);return t==t?G.call(this):"Invalid Date"});var U,W=/#|\.prototype\./,Y=function(t,r){var n=q[X(t)];return n==B||n!=K&&("function"==typeof r?u(r):!!r)},X=Y.normalize=function(t){return String(t).replace(W,".").toLowerCase()},q=Y.data={},K=Y.NATIVE="N",B=Y.POLYFILL="P",H=Y,J={}.toString,Q=function(t){return J.call(t).slice(8,-1)},Z=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),r=n instanceof Array}catch(t){}return function(n,e){return function(t,r){if(g(t),!a(r)&&null!==r)throw TypeError("Can't set "+String(r)+" as a prototype")}(n,e),r?t.call(n,e):n.__proto__=e,n}}():void 0),tt="".split,rt=u(function(){return!Object("z").propertyIsEnumerable(0)})?function(t){return"String"==Q(t)?tt.call(t,""):Object(t)}:Object,nt=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},et=function(t){return rt(nt(t))},ot=Math.ceil,it=Math.floor,ut=function(t){return isNaN(t=+t)?0:(t>0?it:ot)(t)},ct=Math.min,at=function(t){return t>0?ct(ut(t),9007199254740991):0},lt=Math.max,ft=Math.min,st=(U=!1,function(t,r,n){var e,o=et(t),i=at(o.length),u=function(t,r){var n=ut(t);return n<0?lt(n+r,0):ft(n,r)}(n,i);if(U&&r!=r){for(;i>u;)if((e=o[u++])!=e)return!0}else for(;i>u;u++)if((U||u in o)&&o[u]===r)return U||u||0;return!U&&-1}),pt=function(t,r){var n,e=et(t),o=0,i=[];for(n in e)!S(A,n)&&S(e,n)&&i.push(n);for(;r.length>o;)S(e,n=r[o++])&&(~st(i,n)||i.push(n));return i},gt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ht=gt.concat("length","prototype"),vt={f:Object.getOwnPropertyNames||function(t){return pt(t,ht)}},dt={}.propertyIsEnumerable,yt=Object.getOwnPropertyDescriptor,bt={f:yt&&!dt.call({1:2},1)?function(t){var r=yt(this,t);return!!r&&r.enumerable}:dt},mt=Object.getOwnPropertyDescriptor,St={f:c?mt:function(t,r){if(t=et(t),r=h(r,!0),p)try{return mt(t,r)}catch(t){}if(S(t,r))return y(!bt.f.call(t,r),t[r])}},xt="[\t\n\v\f\r                　\u2028\u2029\ufeff]",Nt=RegExp("^"+xt+xt+"*"),Et=RegExp(xt+xt+"*$"),wt=Object.keys||function(t){return pt(t,gt)},It=c?Object.defineProperties:function(t,r){g(t);for(var n,e=wt(r),o=e.length,i=0;o>i;)d.f(t,n=e[i++],r[n]);return t},Ot=i.document,jt=Ot&&Ot.documentElement,_t=T("IE_PROTO"),Mt=function(){},Tt=function(){var t,r=s("iframe"),n=gt.length;for(r.style.display="none",jt.appendChild(r),r.src=String("javascript:"),(t=r.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),Tt=t.F;n--;)delete Tt.prototype[gt[n]];return Tt()},At=Object.create||function(t,r){var n;return null!==t?(Mt.prototype=g(t),n=new Mt,Mt.prototype=null,n[_t]=t):n=Tt(),void 0===r?n:It(n,r)};A[_t]=!0;var Rt=vt.f,Pt=St.f,kt=d.f,Ct=i.Number,Ft=Ct.prototype,$t="Number"==Q(At(Ft)),Dt="trim"in String.prototype,Lt=function(t){var r,n,e,o,i,u,c,a,l,f,s=h(t,!1);if("string"==typeof s&&s.length>2)if(43===(r=(s=Dt?s.trim():(l=s,f=3,l=String(nt(l)),1&f&&(l=l.replace(Nt,"")),2&f&&(l=l.replace(Et,"")),l)).charCodeAt(0))||45===r){if(88===(n=s.charCodeAt(2))||120===n)return NaN}else if(48===r){switch(s.charCodeAt(1)){case 66:case 98:e=2,o=49;break;case 79:case 111:e=8,o=55;break;default:return+s}for(u=(i=s.slice(2)).length,c=0;c<u;c++)if((a=i.charCodeAt(c))<48||a>o)return NaN;return parseInt(i,e)}return+s};if(H("Number",!Ct(" 0o1")||!Ct("0b1")||Ct("+0x1"))){for(var zt,Gt=function(t){var r=arguments.length<1?0:t,n=this;return n instanceof Gt&&($t?u(function(){Ft.valueOf.call(n)}):"Number"!=Q(n))?function(t,r,n){var e,o=r.constructor;return o!==n&&"function"==typeof o&&(e=o.prototype)!==n.prototype&&a(e)&&Z&&Z(t,e),t}(new Ct(Lt(r)),n,Gt):Lt(r)},Vt=c?Rt(Ct):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),Ut=0;Vt.length>Ut;Ut++)S(Ct,zt=Vt[Ut])&&!S(Gt,zt)&&kt(Gt,zt,Pt(Ct,zt));Gt.prototype=Ft,Ft.constructor=Gt,L(i,"Number",Gt)}var Wt=!u(function(){}),Yt=N("wks"),Xt=i.Symbol,qt=function(t){return Yt[t]||(Yt[t]=Wt&&Xt[t]||(Wt?Xt:_)("Symbol."+t))},Kt=qt("toStringTag"),Bt="Arguments"==Q(function(){return arguments}()),Ht={};Ht[qt("toStringTag")]="z";var Jt="[object z]"!==String(Ht)?function(){return"[object "+(void 0===(t=this)?"Undefined":null===t?"Null":"string"==typeof(n=function(t,r){try{return t[r]}catch(t){}}(r=Object(t),Kt))?n:Bt?Q(r):"Object"==(e=Q(r))&&"function"==typeof r.callee?"Arguments":e)+"]";var t,r,n,e}:Ht.toString,Qt=Object.prototype;Jt!==Qt.toString&&L(Qt,"toString",Jt,{unsafe:!0});var Zt,tr,rr=function(){var t=g(this),r="";return t.global&&(r+="g"),t.ignoreCase&&(r+="i"),t.multiline&&(r+="m"),t.unicode&&(r+="u"),t.sticky&&(r+="y"),r},nr=RegExp.prototype.exec,er=String.prototype.replace,or=nr,ir=(Zt=/a/,tr=/b*/g,nr.call(Zt,"a"),nr.call(tr,"a"),0!==Zt.lastIndex||0!==tr.lastIndex),ur=void 0!==/()??/.exec("")[1];(ir||ur)&&(or=function(t){var r,n,e,o,i=this;return ur&&(n=new RegExp("^"+i.source+"$(?!\\s)",rr.call(i))),ir&&(r=i.lastIndex),e=nr.call(i,t),ir&&e&&(i.lastIndex=i.global?e.index+e[0].length:r),ur&&e&&e.length>1&&er.call(e[0],n,function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(e[o]=void 0)}),e});var cr=or,ar={f:Object.getOwnPropertySymbols},lr=i.Reflect,fr=lr&&lr.ownKeys||function(t){var r=vt.f(g(t)),n=ar.f;return n?r.concat(n(t)):r},sr=function(t,r){for(var n=fr(r),e=d.f,o=St.f,i=0;i<n.length;i++){var u=n[i];S(t,u)||e(t,u,o(r,u))}},pr=St.f;!function(t,r){var n,e,o,u,c,a=t.target,l=t.global,f=t.stat;if(n=l?i:f?i[a]||x(a,{}):(i[a]||{}).prototype)for(e in r){if(u=r[e],o=t.noTargetGet?(c=pr(n,e))&&c.value:n[e],!H(l?e:a+(f?".":"#")+e,t.forced)&&void 0!==o){if(typeof u==typeof o)continue;sr(u,o)}(t.sham||o&&o.sham)&&b(u,"sham",!0),L(n,e,u,t)}}({target:"RegExp",proto:!0,forced:/./.exec!==cr},{exec:cr});var gr=/./.toString,hr=u(function(){return"/a/b"!=gr.call({source:"a",flags:"b"})}),vr="toString"!=gr.name;(hr||vr)&&L(RegExp.prototype,"toString",function(){var t=g(this);return"/".concat(t.source,"/","flags"in t?t.flags:!c&&t instanceof RegExp?rr.call(t):void 0)},{unsafe:!0});var dr=function(t){return Object(nt(t))},yr=function(t,r,n){return r+(n?function(t,r,n){var e,o,i=String(nt(t)),u=ut(r),c=i.length;return u<0||u>=c?n?"":void 0:(e=i.charCodeAt(u))<55296||e>56319||u+1===c||(o=i.charCodeAt(u+1))<56320||o>57343?n?i.charAt(u):e:n?i.slice(u,u+2):o-56320+(e-55296<<10)+65536}(t,r,!0).length:1)},br=function(t,r){var n=t.exec;if("function"==typeof n){var e=n.call(t,r);if("object"!=typeof e)throw TypeError("RegExp exec method returned something other than an Object or null");return e}if("RegExp"!==Q(t))throw TypeError("RegExp#exec called on incompatible receiver");return cr.call(t,r)},mr=qt("species"),Sr=!u(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),xr=!u(function(){var t=/(?:)/,r=t.exec;t.exec=function(){return r.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}),Nr=function(t,r,n,e){var o=qt(t),i=!u(function(){var r={};return r[o]=function(){return 7},7!=""[t](r)}),c=i&&!u(function(){var r=!1,n=/a/;return n.exec=function(){return r=!0,null},"split"===t&&(n.constructor={},n.constructor[mr]=function(){return n}),n[o](""),!r});if(!i||!c||"replace"===t&&!Sr||"split"===t&&!xr){var a=/./[o],l=n(o,""[t],function(t,r,n,e,o){return r.exec===cr?i&&!o?{done:!0,value:a.call(r,n,e)}:{done:!0,value:t.call(n,r,e)}:{done:!1}}),f=l[0],s=l[1];L(String.prototype,t,f),L(RegExp.prototype,o,2==r?function(t,r){return s.call(t,this,r)}:function(t){return s.call(t,this)}),e&&b(RegExp.prototype[o],"sham",!0)}},Er=Math.max,wr=Math.min,Ir=Math.floor,Or=/\$([$&`']|\d\d?|<[^>]*>)/g,jr=/\$([$&`']|\d\d?)/g;Nr("replace",2,function(t,r,n){return[function(n,e){var o=nt(this),i=null==n?void 0:n[t];return void 0!==i?i.call(n,o,e):r.call(String(o),n,e)},function(t,o){var i=n(r,t,this,o);if(i.done)return i.value;var u=g(t),c=String(this),a="function"==typeof o;a||(o=String(o));var l=u.global;if(l){var f=u.unicode;u.lastIndex=0}for(var s=[];;){var p=br(u,c);if(null===p)break;if(s.push(p),!l)break;""===String(p[0])&&(u.lastIndex=yr(c,at(u.lastIndex),f))}for(var h,v="",d=0,y=0;y<s.length;y++){p=s[y];for(var b=String(p[0]),m=Er(wr(ut(p.index),c.length),0),S=[],x=1;x<p.length;x++)S.push(void 0===(h=p[x])?h:String(h));var N=p.groups;if(a){var E=[b].concat(S,m,c);void 0!==N&&E.push(N);var w=String(o.apply(void 0,E))}else w=e(b,c,m,S,N,o);m>=d&&(v+=c.slice(d,m)+w,d=m+b.length)}return v+c.slice(d)}];function e(t,n,e,o,i,u){var c=e+t.length,a=o.length,l=jr;return void 0!==i&&(i=dr(i),l=Or),r.call(u,l,function(r,u){var l;switch(u.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,e);case"'":return n.slice(c);case"<":l=i[u.slice(1,-1)];break;default:var f=+u;if(0===f)return r;if(f>a){var s=Ir(f/10);return 0===s?r:s<=a?void 0===o[s-1]?u.charAt(1):o[s-1]+u.charAt(1):r}l=o[f-1]}return void 0===l?"":l})}});var _r=qt("match"),Mr=qt("species"),Tr=function(t,r){var n,e=g(t).constructor;return void 0===e||null==(n=g(e)[Mr])?r:function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}(n)},Ar=[].push,Rr=Math.min,Pr=!u(function(){return!RegExp(4294967295,"y")});function kr(t){var r=!0;for(var n in t)try{if(isNaN(t[n])||"number"!=typeof t[n])throw r=!1,new TypeError("The ".concat(++n,"th parameter type is not a number"))}catch(t){console.error(t)}return r}function Cr(t){try{return t.toString().split(".")[1].length}catch(t){return 0}}Nr("split",2,function(t,r,n){var e;return e="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var e,o,i=String(nt(this)),u=void 0===n?4294967295:n>>>0;if(0===u)return[];if(void 0===t)return[i];if(!a(e=t)||(void 0!==(o=e[_r])?!o:"RegExp"!=Q(e)))return r.call(i,t,u);for(var c,l,f,s=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,h=new RegExp(t.source,p+"g");(c=cr.call(h,i))&&!((l=h.lastIndex)>g&&(s.push(i.slice(g,c.index)),c.length>1&&c.index<i.length&&Ar.apply(s,c.slice(1)),f=c[0].length,g=l,s.length>=u));)h.lastIndex===c.index&&h.lastIndex++;return g===i.length?!f&&h.test("")||s.push(""):s.push(i.slice(g)),s.length>u?s.slice(0,u):s}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:r.call(this,t,n)}:r,[function(r,n){var o=nt(this),i=null==r?void 0:r[t];return void 0!==i?i.call(r,o,n):e.call(String(o),r,n)},function(t,o){var i=n(e,t,this,o,e!==r);if(i.done)return i.value;var u=g(t),c=String(this),a=Tr(u,RegExp),l=u.unicode,f=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(Pr?"y":"g"),s=new a(Pr?u:"^(?:"+u.source+")",f),p=void 0===o?4294967295:o>>>0;if(0===p)return[];if(0===c.length)return null===br(s,c)?[c]:[];for(var h=0,v=0,d=[];v<c.length;){s.lastIndex=Pr?v:0;var y,b=br(s,Pr?c:c.slice(v));if(null===b||(y=Rr(at(s.lastIndex+(Pr?0:v)),c.length))===h)v=yr(c,v,l);else{if(d.push(c.slice(h,v)),d.length===p)return d;for(var m=1;m<=b.length-1;m++)if(d.push(b[m]),d.length===p)return d;v=h=y}}return d.push(c.slice(h)),d}]},!Pr);t("default",{add:function(t,r){if(!kr(arguments))return NaN;var n,e,o;return n=Cr(t),e=Cr(r),o=Math.pow(10,Math.max(n,e)),(this.mul(t,o)+this.mul(r,o))/o},subtract:function(t,r){if(!kr(arguments))return NaN;return this.add(t,-r)},mul:function(t,r){if(!kr(arguments))return NaN;var n,e,o,i=t.toString(),u=r.toString();return n=Cr(t),e=Cr(r),o=Math.pow(10,n+e),Number(i.replace(".",""))*Number(u.replace(".",""))/o},division:function(t,r){if(!kr(arguments))return NaN;var n,e,o,i,u=t.toString(),c=r.toString();return e=Cr(t),o=Cr(r),i=Math.pow(10,o-e),n=Number(u.replace(".",""))/Number(c.replace(".","")),this.mul(n,i)},modulo:function(t,r){if(!kr(arguments))return NaN;var n,e,o;return n=Cr(t),e=Cr(r),o=Math.pow(10,Math.max(n,e)),(t=this.mul(t,o))%(r=this.mul(r,o))/o}})}}});
