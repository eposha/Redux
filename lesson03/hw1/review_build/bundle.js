!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=80)}([function(t,e,r){(function(e){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e&&e)||Function("return this")()}).call(this,r(36))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},function(t,e,r){var n=r(1);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e,r){var n=r(0),o=r(10).f,i=r(8),u=r(43),c=r(18),f=r(63),a=r(66);t.exports=function(t,e){var r,s,l,p,y,d=t.target,v=t.global,h=t.stat;if(r=v?n:h?n[d]||c(d,{}):(n[d]||{}).prototype)for(s in e){if(p=e[s],l=t.noTargetGet?(y=o(r,s))&&y.value:r[s],!a(v?s:d+(h?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;f(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(r,s,p,t)}}},function(t,e,r){var n=r(38),o=r(40);t.exports=function(t){return n(o(t))}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,r){var n=r(3),o=r(41),i=r(11),u=r(13),c=Object.defineProperty;e.f=n?c:function(t,e,r){if(i(t),e=u(e,!0),i(r),o)try{return c(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},function(t,e,r){var n=r(3),o=r(7),i=r(12);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e,r){var n=r(0),o=r(20),i=r(2),u=r(21),c=r(25),f=r(53),a=o("wks"),s=n.Symbol,l=f?s:s&&s.withoutSetter||u;t.exports=function(t){return i(a,t)||(c&&i(s,t)?a[t]=s[t]:a[t]=l("Symbol."+t)),a[t]}},function(t,e,r){var n=r(3),o=r(37),i=r(12),u=r(5),c=r(13),f=r(2),a=r(41),s=Object.getOwnPropertyDescriptor;e.f=n?s:function(t,e){if(t=u(t),e=c(e,!0),a)try{return s(t,e)}catch(t){}if(f(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e,r){var n=r(6);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,r){var n=r(6);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports={}},function(t,e,r){var n=r(49),o=r(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t])||i(o[t]):n[t]&&n[t][e]||o[t]&&o[t][e]}},function(t,e,r){var n=r(40);t.exports=function(t){return Object(n(t))}},function(t,e,r){"use strict";var n=r(4),o=r(0),i=r(15),u=r(47),c=r(3),f=r(25),a=r(53),s=r(1),l=r(2),p=r(26),y=r(6),d=r(11),v=r(16),h=r(5),b=r(13),g=r(12),O=r(67),m=r(27),w=r(22),j=r(70),S=r(52),x=r(10),E=r(7),P=r(37),T=r(8),L=r(43),D=r(20),A=r(19),N=r(14),M=r(21),R=r(9),I=r(54),k=r(71),C=r(72),_=r(46),U=r(28).forEach,G=A("hidden"),F=R("toPrimitive"),V=_.set,W=_.getterFor("Symbol"),B=Object.prototype,H=o.Symbol,z=i("JSON","stringify"),K=x.f,Y=E.f,q=j.f,J=P.f,Q=D("symbols"),X=D("op-symbols"),Z=D("string-to-symbol-registry"),$=D("symbol-to-string-registry"),tt=D("wks"),et=o.QObject,rt=!et||!et.prototype||!et.prototype.findChild,nt=c&&s((function(){return 7!=O(Y({},"a",{get:function(){return Y(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=K(B,e);n&&delete B[e],Y(t,e,r),n&&t!==B&&Y(B,e,n)}:Y,ot=function(t,e){var r=Q[t]=O(H.prototype);return V(r,{type:"Symbol",tag:t,description:e}),c||(r.description=e),r},it=a?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof H},ut=function(t,e,r){t===B&&ut(X,e,r),d(t);var n=b(e,!0);return d(r),l(Q,n)?(r.enumerable?(l(t,G)&&t[G][n]&&(t[G][n]=!1),r=O(r,{enumerable:g(0,!1)})):(l(t,G)||Y(t,G,g(1,{})),t[G][n]=!0),nt(t,n,r)):Y(t,n,r)},ct=function(t,e){d(t);var r=h(e),n=m(r).concat(lt(r));return U(n,(function(e){c&&!ft.call(r,e)||ut(t,e,r[e])})),t},ft=function(t){var e=b(t,!0),r=J.call(this,e);return!(this===B&&l(Q,e)&&!l(X,e))&&(!(r||!l(this,e)||!l(Q,e)||l(this,G)&&this[G][e])||r)},at=function(t,e){var r=h(t),n=b(e,!0);if(r!==B||!l(Q,n)||l(X,n)){var o=K(r,n);return!o||!l(Q,n)||l(r,G)&&r[G][n]||(o.enumerable=!0),o}},st=function(t){var e=q(h(t)),r=[];return U(e,(function(t){l(Q,t)||l(N,t)||r.push(t)})),r},lt=function(t){var e=t===B,r=q(e?X:h(t)),n=[];return U(r,(function(t){!l(Q,t)||e&&!l(B,t)||n.push(Q[t])})),n};(f||(L((H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=M(t),r=function(t){this===B&&r.call(X,t),l(this,G)&&l(this[G],e)&&(this[G][e]=!1),nt(this,e,g(1,t))};return c&&rt&&nt(B,e,{configurable:!0,set:r}),ot(e,t)}).prototype,"toString",(function(){return W(this).tag})),L(H,"withoutSetter",(function(t){return ot(M(t),t)})),P.f=ft,E.f=ut,x.f=at,w.f=j.f=st,S.f=lt,I.f=function(t){return ot(R(t),t)},c&&(Y(H.prototype,"description",{configurable:!0,get:function(){return W(this).description}}),u||L(B,"propertyIsEnumerable",ft,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:H}),U(m(tt),(function(t){k(t)})),n({target:"Symbol",stat:!0,forced:!f},{for:function(t){var e=String(t);if(l(Z,e))return Z[e];var r=H(e);return Z[e]=r,$[r]=e,r},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(l($,t))return $[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),n({target:"Object",stat:!0,forced:!f,sham:!c},{create:function(t,e){return void 0===e?O(t):ct(O(t),e)},defineProperty:ut,defineProperties:ct,getOwnPropertyDescriptor:at}),n({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:st,getOwnPropertySymbols:lt}),n({target:"Object",stat:!0,forced:s((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(v(t))}}),z)&&n({target:"JSON",stat:!0,forced:!f||s((function(){var t=H();return"[null]"!=z([t])||"{}"!=z({a:t})||"{}"!=z(Object(t))}))},{stringify:function(t,e,r){for(var n,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(n=e,(y(e)||void 0!==t)&&!it(t))return p(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!it(e))return e}),o[1]=e,z.apply(null,o)}});H.prototype[F]||T(H.prototype,F,H.prototype.valueOf),C(H,"Symbol"),N[G]=!0},function(t,e,r){var n=r(0),o=r(8);t.exports=function(t,e){try{o(n,t,e)}catch(r){n[t]=e}return e}},function(t,e,r){var n=r(20),o=r(21),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e,r){var n=r(47),o=r(45);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.3",mode:n?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e){var r=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+n).toString(36)}},function(t,e,r){var n=r(50),o=r(24).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},function(t,e,r){var n=r(51),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,r){var n=r(1);t.exports=!!Object.getOwnPropertySymbols&&!n((function(){return!String(Symbol())}))},function(t,e,r){var n=r(39);t.exports=Array.isArray||function(t){return"Array"==n(t)}},function(t,e,r){var n=r(50),o=r(24);t.exports=Object.keys||function(t){return n(t,o)}},function(t,e,r){var n=r(73),o=r(38),i=r(16),u=r(23),c=r(55),f=[].push,a=function(t){var e=1==t,r=2==t,a=3==t,s=4==t,l=6==t,p=5==t||l;return function(y,d,v,h){for(var b,g,O=i(y),m=o(O),w=n(d,v,3),j=u(m.length),S=0,x=h||c,E=e?x(y,j):r?x(y,0):void 0;j>S;S++)if((p||S in m)&&(g=w(b=m[S],S,O),t))if(e)E[S]=g;else if(g)switch(t){case 3:return!0;case 5:return b;case 6:return S;case 2:f.call(E,b)}else if(s)return!1;return l?-1:a||s?s:E}};t.exports={forEach:a(0),map:a(1),filter:a(2),some:a(3),every:a(4),find:a(5),findIndex:a(6)}},function(t,e,r){"use strict";var n=r(4),o=r(28).filter,i=r(56),u=r(58),c=i("filter"),f=u("filter");n({target:"Array",proto:!0,forced:!c||!f},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,r){"use strict";var n=r(4),o=r(59);n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,e,r){var n=r(4),o=r(1),i=r(5),u=r(10).f,c=r(3),f=o((function(){u(1)}));n({target:"Object",stat:!0,forced:!c||f,sham:!c},{getOwnPropertyDescriptor:function(t,e){return u(i(t),e)}})},function(t,e,r){var n=r(4),o=r(3),i=r(48),u=r(5),c=r(10),f=r(60);n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){for(var e,r,n=u(t),o=c.f,a=i(n),s={},l=0;a.length>l;)void 0!==(r=o(n,e=a[l++]))&&f(s,e,r);return s}})},function(t,e,r){var n=r(4),o=r(16),i=r(27);n({target:"Object",stat:!0,forced:r(1)((function(){i(1)}))},{keys:function(t){return i(o(t))}})},function(t,e,r){var n=r(0),o=r(77),i=r(59),u=r(8);for(var c in o){var f=n[c],a=f&&f.prototype;if(a&&a.forEach!==i)try{u(a,"forEach",i)}catch(t){a.forEach=i}}},function(t,e,r){"use strict";(function(t,n){var o,i=r(61);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:n;var u=Object(i.a)(o);e.a=u}).call(this,r(36),r(79)(t))},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){"use strict";var n={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!n.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:n},function(t,e,r){var n=r(1),o=r(39),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,r){var n=r(3),o=r(1),i=r(42);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,r){var n=r(0),o=r(6),i=n.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,e,r){var n=r(0),o=r(8),i=r(2),u=r(18),c=r(44),f=r(46),a=f.get,s=f.enforce,l=String(String).split("String");(t.exports=function(t,e,r,c){var f=!!c&&!!c.unsafe,a=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof r&&("string"!=typeof e||i(r,"name")||o(r,"name",e),s(r).source=l.join("string"==typeof e?e:"")),t!==n?(f?!p&&t[e]&&(a=!0):delete t[e],a?t[e]=r:o(t,e,r)):a?t[e]=r:u(e,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&a(this).source||c(this)}))},function(t,e,r){var n=r(45),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},function(t,e,r){var n=r(0),o=r(18),i=n["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,r){var n,o,i,u=r(62),c=r(0),f=r(6),a=r(8),s=r(2),l=r(19),p=r(14),y=c.WeakMap;if(u){var d=new y,v=d.get,h=d.has,b=d.set;n=function(t,e){return b.call(d,t,e),e},o=function(t){return v.call(d,t)||{}},i=function(t){return h.call(d,t)}}else{var g=l("state");p[g]=!0,n=function(t,e){return a(t,g,e),e},o=function(t){return s(t,g)?t[g]:{}},i=function(t){return s(t,g)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!f(e)||(r=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,e){t.exports=!1},function(t,e,r){var n=r(15),o=r(22),i=r(52),u=r(11);t.exports=n("Reflect","ownKeys")||function(t){var e=o.f(u(t)),r=i.f;return r?e.concat(r(t)):e}},function(t,e,r){var n=r(0);t.exports=n},function(t,e,r){var n=r(2),o=r(5),i=r(64).indexOf,u=r(14);t.exports=function(t,e){var r,c=o(t),f=0,a=[];for(r in c)!n(u,r)&&n(c,r)&&a.push(r);for(;e.length>f;)n(c,r=e[f++])&&(~i(a,r)||a.push(r));return a}},function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,r){var n=r(25);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,r){var n=r(9);e.f=n},function(t,e,r){var n=r(6),o=r(26),i=r(9)("species");t.exports=function(t,e){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?n(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},function(t,e,r){var n=r(1),o=r(9),i=r(57),u=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[];return(e.constructor={})[u]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},function(t,e,r){var n,o,i=r(0),u=r(75),c=i.process,f=c&&c.versions,a=f&&f.v8;a?o=(n=a.split("."))[0]+n[1]:u&&(!(n=u.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=u.match(/Chrome\/(\d+)/))&&(o=n[1]),t.exports=o&&+o},function(t,e,r){var n=r(3),o=r(1),i=r(2),u=Object.defineProperty,c=function(t){throw t};t.exports=function(t,e){e||(e={});var r=[][t],f=!!i(e,"ACCESSORS")&&e.ACCESSORS,a=i(e,0)?e[0]:c,s=i(e,1)?e[1]:void 0;return!!r&&!o((function(){if(f&&!n)return!0;var t={length:-1},e=function(e){f?u(t,e,{enumerable:!0,get:c}):t[e]=1};e(1),e(2147483646),e(4294967294),r.call(t,a,s)}))}},function(t,e,r){"use strict";var n=r(28).forEach,o=r(76),i=r(58),u=o("forEach"),c=i("forEach");t.exports=u&&c?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,e,r){"use strict";var n=r(13),o=r(7),i=r(12);t.exports=function(t,e,r){var u=n(e);u in t?o.f(t,u,i(0,r)):t[u]=r}},function(t,e,r){"use strict";function n(t){var e,r=t.Symbol;return"function"==typeof r?r.observable?e=r.observable:(e=r("observable"),r.observable=e):e="@@observable",e}r.d(e,"a",(function(){return n}))},function(t,e,r){var n=r(0),o=r(44),i=n.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e,r){var n=r(2),o=r(48),i=r(10),u=r(7);t.exports=function(t,e){for(var r=o(e),c=u.f,f=i.f,a=0;a<r.length;a++){var s=r[a];n(t,s)||c(t,s,f(e,s))}}},function(t,e,r){var n=r(5),o=r(23),i=r(65),u=function(t){return function(e,r,u){var c,f=n(e),a=o(f.length),s=i(u,a);if(t&&r!=r){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,e,r){var n=r(51),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},function(t,e,r){var n=r(1),o=/#|\.prototype\./,i=function(t,e){var r=c[u(t)];return r==a||r!=f&&("function"==typeof e?n(e):!!e)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},f=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},function(t,e,r){var n,o=r(11),i=r(68),u=r(24),c=r(14),f=r(69),a=r(42),s=r(19),l=s("IE_PROTO"),p=function(){},y=function(t){return"<script>"+t+"<\/script>"},d=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;d=n?function(t){t.write(y("")),t.close();var e=t.parentWindow.Object;return t=null,e}(n):((e=a("iframe")).style.display="none",f.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(y("document.F=Object")),t.close(),t.F);for(var r=u.length;r--;)delete d.prototype[u[r]];return d()};c[l]=!0,t.exports=Object.create||function(t,e){var r;return null!==t?(p.prototype=o(t),r=new p,p.prototype=null,r[l]=t):r=d(),void 0===e?r:i(r,e)}},function(t,e,r){var n=r(3),o=r(7),i=r(11),u=r(27);t.exports=n?Object.defineProperties:function(t,e){i(t);for(var r,n=u(e),c=n.length,f=0;c>f;)o.f(t,r=n[f++],e[r]);return t}},function(t,e,r){var n=r(15);t.exports=n("document","documentElement")},function(t,e,r){var n=r(5),o=r(22).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(n(t))}},function(t,e,r){var n=r(49),o=r(2),i=r(54),u=r(7).f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||u(e,t,{value:i.f(t)})}},function(t,e,r){var n=r(7).f,o=r(2),i=r(9)("toStringTag");t.exports=function(t,e,r){t&&!o(t=r?t:t.prototype,i)&&n(t,i,{configurable:!0,value:e})}},function(t,e,r){var n=r(74);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,r){var n=r(15);t.exports=n("navigator","userAgent")||""},function(t,e,r){"use strict";var n=r(1);t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,r){"use strict";var n=r(4),o=r(1),i=r(26),u=r(6),c=r(16),f=r(23),a=r(60),s=r(55),l=r(56),p=r(9),y=r(57),d=p("isConcatSpreadable"),v=y>=51||!o((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),h=l("concat"),b=function(t){if(!u(t))return!1;var e=t[d];return void 0!==e?!!e:i(t)};n({target:"Array",proto:!0,forced:!v||!h},{concat:function(t){var e,r,n,o,i,u=c(this),l=s(u,0),p=0;for(e=-1,n=arguments.length;e<n;e++)if(i=-1===e?u:arguments[e],b(i)){if(p+(o=f(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(r=0;r<o;r++,p++)r in i&&a(l,p,i[r])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");a(l,p++,i)}return l.length=p,l}})},function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},function(t,e,r){"use strict";r.r(e);var n=r(35),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function u(t){if("object"!=typeof t||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function c(t,e){var r=e&&e.type;return"Given "+(r&&'action "'+String(r)+'"'||"an action")+', reducer "'+t+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}r(17),r(29),r(30),r(31),r(32),r(33),r(34);function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"LANGUAGE":return a({},t,{language:e.payload.language});default:return t}};r(78);function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){d(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var v={products:[]};function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){g(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function g(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var O=function t(e,r,o){var c;if("function"==typeof r&&"function"==typeof o||"function"==typeof o&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof r&&void 0===o&&(o=r,r=void 0),void 0!==o){if("function"!=typeof o)throw new Error("Expected the enhancer to be a function.");return o(t)(e,r)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var f=e,a=r,s=[],l=s,p=!1;function y(){l===s&&(l=s.slice())}function d(){if(p)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return a}function v(t){if("function"!=typeof t)throw new Error("Expected the listener to be a function.");if(p)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var e=!0;return y(),l.push(t),function(){if(e){if(p)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");e=!1,y();var r=l.indexOf(t);l.splice(r,1),s=null}}}function h(t){if(!u(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(p)throw new Error("Reducers may not dispatch actions.");try{p=!0,a=f(a,t)}finally{p=!1}for(var e=s=l,r=0;r<e.length;r++){(0,e[r])()}return t}function b(t){if("function"!=typeof t)throw new Error("Expected the nextReducer to be a function.");f=t,h({type:i.REPLACE})}function g(){var t,e=v;return(t={subscribe:function(t){if("object"!=typeof t||null===t)throw new TypeError("Expected the observer to be an object.");function r(){t.next&&t.next(d())}return r(),{unsubscribe:e(r)}}})[n.a]=function(){return this},t}return h({type:i.INIT}),(c={dispatch:h,subscribe:v,getState:d,replaceReducer:b})[n.a]=g,c}(function(t){for(var e=Object.keys(t),r={},n=0;n<e.length;n++){var o=e[n];0,"function"==typeof t[o]&&(r[o]=t[o])}var u,f=Object.keys(r);try{!function(t){Object.keys(t).forEach((function(e){var r=t[e];if(void 0===r(void 0,{type:i.INIT}))throw new Error('Reducer "'+e+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===r(void 0,{type:i.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+e+"\" returned undefined when probed with a random type. Don't try to handle "+i.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(r)}catch(t){u=t}return function(t,e){if(void 0===t&&(t={}),u)throw u;for(var n=!1,o={},i=0;i<f.length;i++){var a=f[i],s=r[a],l=t[a],p=s(l,e);if(void 0===p){var y=c(a,e);throw new Error(y)}o[a]=p,n=n||p!==l}return(n=n||f.length!==Object.keys(t).length)?o:t}}({language:l,user:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD/USER":return b({},t,{},e.payload.user);case"REMOVE/USER":return b({},t,{users:null});default:return t}},cart:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD/PRODUCT":return y({},t,{products:t.products.concat(e.payload.product)});case"REMOVE/PRODUCT":return y({},t,{products:t.products.filter((function(t){return t.id!==e.payload.id}))});default:return t}}}));O.subscribe((function(){return console.log(O.getState())})),O.dispatch({type:"ADD/PRODUCT",payload:{product:{id:76,name:"milk"}}}),O.dispatch({type:"REMOVE/PRODUCT",payload:{id:76}}),O.dispatch({type:"ADD/USER",payload:{user:{name:"Bob"}}}),O.dispatch(function(t){return{type:"REMOVE/USER",payload:{id:t}}}()),O.dispatch({type:"LANGUAGE",payload:{language:"ru"}})}]);