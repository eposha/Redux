!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=84)}([function(t,e,r){(function(e){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e&&e)||Function("return this")()}).call(this,r(33))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},function(t,e,r){var n=r(0),o=r(10).f,i=r(8),c=r(39),u=r(19),f=r(59),a=r(62);t.exports=function(t,e){var r,s,l,p,y,v=t.target,d=t.global,h=t.stat;if(r=d?n:h?n[v]||u(v,{}):(n[v]||{}).prototype)for(s in e){if(p=e[s],l=t.noTargetGet?(y=o(r,s))&&y.value:r[s],!a(d?s:v+(h?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;f(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(r,s,p,t)}}},function(t,e,r){var n=r(1);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e,r){var n=r(14),o=r(36);t.exports=function(t){return n(o(t))}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,r){var n=r(4),o=r(37),i=r(11),c=r(15),u=Object.defineProperty;e.f=n?u:function(t,e,r){if(i(t),e=c(e,!0),i(r),o)try{return u(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},function(t,e,r){var n=r(4),o=r(7),i=r(13);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e,r){var n=r(0),o=r(21),i=r(2),c=r(22),u=r(26),f=r(51),a=o("wks"),s=n.Symbol,l=f?s:s&&s.withoutSetter||c;t.exports=function(t){return i(a,t)||(u&&i(s,t)?a[t]=s[t]:a[t]=l("Symbol."+t)),a[t]}},function(t,e,r){var n=r(4),o=r(34),i=r(13),c=r(5),u=r(15),f=r(2),a=r(37),s=Object.getOwnPropertyDescriptor;e.f=n?s:function(t,e){if(t=c(t),e=u(e,!0),a)try{return s(t,e)}catch(t){}if(f(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e,r){var n=r(6);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,r){var n=r(36);t.exports=function(t){return Object(n(t))}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,r){var n=r(1),o=r(35),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e,r){var n=r(6);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports={}},function(t,e,r){var n=r(45),o=r(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t])||i(o[t]):n[t]&&n[t][e]||o[t]&&o[t][e]}},function(t,e,r){var n=r(47),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},function(t,e,r){var n=r(0),o=r(8);t.exports=function(t,e){try{o(n,t,e)}catch(r){n[t]=e}return e}},function(t,e,r){var n=r(21),o=r(22),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e,r){var n=r(43),o=r(41);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.3",mode:n?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e){var r=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+n).toString(36)}},function(t,e,r){var n=r(46),o=r(24).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,r){var n=r(35);t.exports=Array.isArray||function(t){return"Array"==n(t)}},function(t,e,r){var n=r(1);t.exports=!!Object.getOwnPropertySymbols&&!n((function(){return!String(Symbol())}))},function(t,e,r){"use strict";var n=r(1);t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},function(t,e,r){var n=r(4),o=r(1),i=r(2),c=Object.defineProperty,u=function(t){throw t};t.exports=function(t,e){e||(e={});var r=[][t],f=!!i(e,"ACCESSORS")&&e.ACCESSORS,a=i(e,0)?e[0]:u,s=i(e,1)?e[1]:void 0;return!!r&&!o((function(){if(f&&!n)return!0;var t={length:-1},e=function(e){f?c(t,e,{enumerable:!0,get:u}):t[e]=1};e(1),e(2147483646),e(4294967294),r.call(t,a,s)}))}},function(t,e,r){var n=r(46),o=r(24);t.exports=Object.keys||function(t){return n(t,o)}},function(t,e,r){var n=r(75),o=r(14),i=r(12),c=r(18),u=r(50),f=[].push,a=function(t){var e=1==t,r=2==t,a=3==t,s=4==t,l=6==t,p=5==t||l;return function(y,v,d,h){for(var b,g,m=i(y),O=o(m),w=n(v,d,3),x=c(O.length),S=0,j=h||u,E=e?j(y,x):r?j(y,0):void 0;x>S;S++)if((p||S in O)&&(g=w(b=O[S],S,m),t))if(e)E[S]=g;else if(g)switch(t){case 3:return!0;case 5:return b;case 6:return S;case 2:f.call(E,b)}else if(s)return!1;return l?-1:a||s?s:E}};t.exports={forEach:a(0),map:a(1),filter:a(2),some:a(3),every:a(4),find:a(5),findIndex:a(6)}},function(t,e,r){"use strict";(function(t,n){var o,i=r(57);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:n;var c=Object(i.a)(o);e.a=c}).call(this,r(33),r(83)(t))},function(t,e,r){"use strict";var n=r(3),o=r(1),i=r(25),c=r(6),u=r(12),f=r(18),a=r(49),s=r(50),l=r(52),p=r(9),y=r(53),v=p("isConcatSpreadable"),d=y>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),h=l("concat"),b=function(t){if(!c(t))return!1;var e=t[v];return void 0!==e?!!e:i(t)};n({target:"Array",proto:!0,forced:!d||!h},{concat:function(t){var e,r,n,o,i,c=u(this),l=s(c,0),p=0;for(e=-1,n=arguments.length;e<n;e++)if(i=-1===e?c:arguments[e],b(i)){if(p+(o=f(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(r=0;r<o;r++,p++)r in i&&a(l,p,i[r])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");a(l,p++,i)}return l.length=p,l}})},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){"use strict";var n={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!n.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:n},function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,r){var n=r(4),o=r(1),i=r(38);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,r){var n=r(0),o=r(6),i=n.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,e,r){var n=r(0),o=r(8),i=r(2),c=r(19),u=r(40),f=r(42),a=f.get,s=f.enforce,l=String(String).split("String");(t.exports=function(t,e,r,u){var f=!!u&&!!u.unsafe,a=!!u&&!!u.enumerable,p=!!u&&!!u.noTargetGet;"function"==typeof r&&("string"!=typeof e||i(r,"name")||o(r,"name",e),s(r).source=l.join("string"==typeof e?e:"")),t!==n?(f?!p&&t[e]&&(a=!0):delete t[e],a?t[e]=r:o(t,e,r)):a?t[e]=r:c(e,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&a(this).source||u(this)}))},function(t,e,r){var n=r(41),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},function(t,e,r){var n=r(0),o=r(19),i=n["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,r){var n,o,i,c=r(58),u=r(0),f=r(6),a=r(8),s=r(2),l=r(20),p=r(16),y=u.WeakMap;if(c){var v=new y,d=v.get,h=v.has,b=v.set;n=function(t,e){return b.call(v,t,e),e},o=function(t){return d.call(v,t)||{}},i=function(t){return h.call(v,t)}}else{var g=l("state");p[g]=!0,n=function(t,e){return a(t,g,e),e},o=function(t){return s(t,g)?t[g]:{}},i=function(t){return s(t,g)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!f(e)||(r=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,e){t.exports=!1},function(t,e,r){var n=r(17),o=r(23),i=r(48),c=r(11);t.exports=n("Reflect","ownKeys")||function(t){var e=o.f(c(t)),r=i.f;return r?e.concat(r(t)):e}},function(t,e,r){var n=r(0);t.exports=n},function(t,e,r){var n=r(2),o=r(5),i=r(60).indexOf,c=r(16);t.exports=function(t,e){var r,u=o(t),f=0,a=[];for(r in u)!n(c,r)&&n(u,r)&&a.push(r);for(;e.length>f;)n(u,r=e[f++])&&(~i(a,r)||a.push(r));return a}},function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,r){"use strict";var n=r(15),o=r(7),i=r(13);t.exports=function(t,e,r){var c=n(e);c in t?o.f(t,c,i(0,r)):t[c]=r}},function(t,e,r){var n=r(6),o=r(25),i=r(9)("species");t.exports=function(t,e){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?n(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},function(t,e,r){var n=r(26);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,r){var n=r(1),o=r(9),i=r(53),c=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[];return(e.constructor={})[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},function(t,e,r){var n,o,i=r(0),c=r(63),u=i.process,f=u&&u.versions,a=f&&f.v8;a?o=(n=a.split("."))[0]+n[1]:c&&(!(n=c.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=c.match(/Chrome\/(\d+)/))&&(o=n[1]),t.exports=o&&+o},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,r){var n=r(9);e.f=n},function(t,e,r){"use strict";var n=r(30).forEach,o=r(27),i=r(28),c=o("forEach"),u=i("forEach");t.exports=c&&u?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,e,r){"use strict";function n(t){var e,r=t.Symbol;return"function"==typeof r?r.observable?e=r.observable:(e=r("observable"),r.observable=e):e="@@observable",e}r.d(e,"a",(function(){return n}))},function(t,e,r){var n=r(0),o=r(40),i=n.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e,r){var n=r(2),o=r(44),i=r(10),c=r(7);t.exports=function(t,e){for(var r=o(e),u=c.f,f=i.f,a=0;a<r.length;a++){var s=r[a];n(t,s)||u(t,s,f(e,s))}}},function(t,e,r){var n=r(5),o=r(18),i=r(61),c=function(t){return function(e,r,c){var u,f=n(e),a=o(f.length),s=i(c,a);if(t&&r!=r){for(;a>s;)if((u=f[s++])!=u)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,e,r){var n=r(47),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},function(t,e,r){var n=r(1),o=/#|\.prototype\./,i=function(t,e){var r=u[c(t)];return r==a||r!=f&&("function"==typeof e?n(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},f=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},function(t,e,r){var n=r(17);t.exports=n("navigator","userAgent")||""},function(t,e,r){"use strict";var n=r(3),o=r(14),i=r(5),c=r(27),u=[].join,f=o!=Object,a=c("join",",");n({target:"Array",proto:!0,forced:f||!a},{join:function(t){return u.call(i(this),void 0===t?",":t)}})},function(t,e,r){"use strict";var n=r(3),o=r(66).left,i=r(27),c=r(28),u=i("reduce"),f=c("reduce",{1:0});n({target:"Array",proto:!0,forced:!u||!f},{reduce:function(t){return o(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},function(t,e,r){var n=r(54),o=r(12),i=r(14),c=r(18),u=function(t){return function(e,r,u,f){n(r);var a=o(e),s=i(a),l=c(a.length),p=t?l-1:0,y=t?-1:1;if(u<2)for(;;){if(p in s){f=s[p],p+=y;break}if(p+=y,t?p<0:l<=p)throw TypeError("Reduce of empty array with no initial value")}for(;t?p>=0:l>p;p+=y)p in s&&(f=r(f,s[p],p,a));return f}};t.exports={left:u(!1),right:u(!0)}},function(t,e,r){},function(t,e,r){"use strict";var n=r(3),o=r(0),i=r(17),c=r(43),u=r(4),f=r(26),a=r(51),s=r(1),l=r(2),p=r(25),y=r(6),v=r(11),d=r(12),h=r(5),b=r(15),g=r(13),m=r(69),O=r(29),w=r(23),x=r(72),S=r(48),j=r(10),E=r(7),P=r(34),T=r(8),L=r(39),N=r(21),C=r(20),M=r(16),R=r(22),A=r(9),k=r(55),_=r(73),I=r(74),D=r(42),F=r(30).forEach,G=C("hidden"),U=A("toPrimitive"),V=D.set,W=D.getterFor("Symbol"),q=Object.prototype,H=o.Symbol,B=i("JSON","stringify"),Y=j.f,z=E.f,K=x.f,J=P.f,Q=N("symbols"),X=N("op-symbols"),Z=N("string-to-symbol-registry"),$=N("symbol-to-string-registry"),tt=N("wks"),et=o.QObject,rt=!et||!et.prototype||!et.prototype.findChild,nt=u&&s((function(){return 7!=m(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=Y(q,e);n&&delete q[e],z(t,e,r),n&&t!==q&&z(q,e,n)}:z,ot=function(t,e){var r=Q[t]=m(H.prototype);return V(r,{type:"Symbol",tag:t,description:e}),u||(r.description=e),r},it=a?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof H},ct=function(t,e,r){t===q&&ct(X,e,r),v(t);var n=b(e,!0);return v(r),l(Q,n)?(r.enumerable?(l(t,G)&&t[G][n]&&(t[G][n]=!1),r=m(r,{enumerable:g(0,!1)})):(l(t,G)||z(t,G,g(1,{})),t[G][n]=!0),nt(t,n,r)):z(t,n,r)},ut=function(t,e){v(t);var r=h(e),n=O(r).concat(lt(r));return F(n,(function(e){u&&!ft.call(r,e)||ct(t,e,r[e])})),t},ft=function(t){var e=b(t,!0),r=J.call(this,e);return!(this===q&&l(Q,e)&&!l(X,e))&&(!(r||!l(this,e)||!l(Q,e)||l(this,G)&&this[G][e])||r)},at=function(t,e){var r=h(t),n=b(e,!0);if(r!==q||!l(Q,n)||l(X,n)){var o=Y(r,n);return!o||!l(Q,n)||l(r,G)&&r[G][n]||(o.enumerable=!0),o}},st=function(t){var e=K(h(t)),r=[];return F(e,(function(t){l(Q,t)||l(M,t)||r.push(t)})),r},lt=function(t){var e=t===q,r=K(e?X:h(t)),n=[];return F(r,(function(t){!l(Q,t)||e&&!l(q,t)||n.push(Q[t])})),n};(f||(L((H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=R(t),r=function(t){this===q&&r.call(X,t),l(this,G)&&l(this[G],e)&&(this[G][e]=!1),nt(this,e,g(1,t))};return u&&rt&&nt(q,e,{configurable:!0,set:r}),ot(e,t)}).prototype,"toString",(function(){return W(this).tag})),L(H,"withoutSetter",(function(t){return ot(R(t),t)})),P.f=ft,E.f=ct,j.f=at,w.f=x.f=st,S.f=lt,k.f=function(t){return ot(A(t),t)},u&&(z(H.prototype,"description",{configurable:!0,get:function(){return W(this).description}}),c||L(q,"propertyIsEnumerable",ft,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:H}),F(O(tt),(function(t){_(t)})),n({target:"Symbol",stat:!0,forced:!f},{for:function(t){var e=String(t);if(l(Z,e))return Z[e];var r=H(e);return Z[e]=r,$[r]=e,r},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(l($,t))return $[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),n({target:"Object",stat:!0,forced:!f,sham:!u},{create:function(t,e){return void 0===e?m(t):ut(m(t),e)},defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:at}),n({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:st,getOwnPropertySymbols:lt}),n({target:"Object",stat:!0,forced:s((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(d(t))}}),B)&&n({target:"JSON",stat:!0,forced:!f||s((function(){var t=H();return"[null]"!=B([t])||"{}"!=B({a:t})||"{}"!=B(Object(t))}))},{stringify:function(t,e,r){for(var n,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(n=e,(y(e)||void 0!==t)&&!it(t))return p(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!it(e))return e}),o[1]=e,B.apply(null,o)}});H.prototype[U]||T(H.prototype,U,H.prototype.valueOf),I(H,"Symbol"),M[G]=!0},function(t,e,r){var n,o=r(11),i=r(70),c=r(24),u=r(16),f=r(71),a=r(38),s=r(20),l=s("IE_PROTO"),p=function(){},y=function(t){return"<script>"+t+"<\/script>"},v=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;v=n?function(t){t.write(y("")),t.close();var e=t.parentWindow.Object;return t=null,e}(n):((e=a("iframe")).style.display="none",f.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(y("document.F=Object")),t.close(),t.F);for(var r=c.length;r--;)delete v.prototype[c[r]];return v()};u[l]=!0,t.exports=Object.create||function(t,e){var r;return null!==t?(p.prototype=o(t),r=new p,p.prototype=null,r[l]=t):r=v(),void 0===e?r:i(r,e)}},function(t,e,r){var n=r(4),o=r(7),i=r(11),c=r(29);t.exports=n?Object.defineProperties:function(t,e){i(t);for(var r,n=c(e),u=n.length,f=0;u>f;)o.f(t,r=n[f++],e[r]);return t}},function(t,e,r){var n=r(17);t.exports=n("document","documentElement")},function(t,e,r){var n=r(5),o=r(23).f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return c.slice()}}(t):o(n(t))}},function(t,e,r){var n=r(45),o=r(2),i=r(55),c=r(7).f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||c(e,t,{value:i.f(t)})}},function(t,e,r){var n=r(7).f,o=r(2),i=r(9)("toStringTag");t.exports=function(t,e,r){t&&!o(t=r?t:t.prototype,i)&&n(t,i,{configurable:!0,value:e})}},function(t,e,r){var n=r(54);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,r){"use strict";var n=r(3),o=r(30).filter,i=r(52),c=r(28),u=i("filter"),f=c("filter");n({target:"Array",proto:!0,forced:!u||!f},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,r){"use strict";var n=r(3),o=r(56);n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,e,r){var n=r(3),o=r(1),i=r(5),c=r(10).f,u=r(4),f=o((function(){c(1)}));n({target:"Object",stat:!0,forced:!u||f,sham:!u},{getOwnPropertyDescriptor:function(t,e){return c(i(t),e)}})},function(t,e,r){var n=r(3),o=r(4),i=r(44),c=r(5),u=r(10),f=r(49);n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){for(var e,r,n=c(t),o=u.f,a=i(n),s={},l=0;a.length>l;)void 0!==(r=o(n,e=a[l++]))&&f(s,e,r);return s}})},function(t,e,r){var n=r(3),o=r(12),i=r(29);n({target:"Object",stat:!0,forced:r(1)((function(){i(1)}))},{keys:function(t){return i(o(t))}})},function(t,e,r){var n=r(0),o=r(82),i=r(56),c=r(8);for(var u in o){var f=n[u],a=f&&f.prototype;if(a&&a.forEach!==i)try{c(a,"forEach",i)}catch(t){a.forEach=i}}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},function(t,e,r){"use strict";r.r(e);r(32),r(64),r(65),r(67),r(68),r(76),r(77),r(78),r(79),r(80),r(81);var n=r(31),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function c(t){if("object"!=typeof t||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var s="COUNTER/RESET",l={history:[]},p=function t(e,r,o){var u;if("function"==typeof r&&"function"==typeof o||"function"==typeof o&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof r&&void 0===o&&(o=r,r=void 0),void 0!==o){if("function"!=typeof o)throw new Error("Expected the enhancer to be a function.");return o(t)(e,r)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var f=e,a=r,s=[],l=s,p=!1;function y(){l===s&&(l=s.slice())}function v(){if(p)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return a}function d(t){if("function"!=typeof t)throw new Error("Expected the listener to be a function.");if(p)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var e=!0;return y(),l.push(t),function(){if(e){if(p)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");e=!1,y();var r=l.indexOf(t);l.splice(r,1),s=null}}}function h(t){if(!c(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(p)throw new Error("Reducers may not dispatch actions.");try{p=!0,a=f(a,t)}finally{p=!1}for(var e=s=l,r=0;r<e.length;r++){(0,e[r])()}return t}function b(t){if("function"!=typeof t)throw new Error("Expected the nextReducer to be a function.");f=t,h({type:i.REPLACE})}function g(){var t,e=d;return(t={subscribe:function(t){if("object"!=typeof t||null===t)throw new TypeError("Expected the observer to be an object.");function r(){t.next&&t.next(v())}return r(),{unsubscribe:e(r)}}})[n.a]=function(){return this},t}return h({type:i.INIT}),(u={dispatch:h,subscribe:d,getState:v,replaceReducer:b})[n.a]=g,u}((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"COUNTER/INCREMENT":return f({},t,{history:t.history.concat("+".concat(1))});case"COUNTER/DECREMENT":return f({},t,{history:t.history.concat("-".concat(1))});case s:return f({},t,{history:[]});default:return t}})),y=document.querySelector(".counter__result"),v=document.querySelector('[data-action="increment"]'),d=document.querySelector('[data-action="reset"]'),h=document.querySelector('[data-action="decrement"]');v.addEventListener("click",(function(){p.dispatch({type:"COUNTER/INCREMENT"})})),h.addEventListener("click",(function(){p.dispatch({type:"COUNTER/DECREMENT"})})),d.addEventListener("click",(function(){p.dispatch({type:s})})),p.subscribe((function(){var t=p.getState(),e=t.history.reduce((function(t,e){return t+ +e}),0),r=t.history.join("");y.textContent=0===t.history.length?"":"".concat(r," = ").concat(e)}))}]);