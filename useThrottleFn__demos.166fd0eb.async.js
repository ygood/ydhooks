"use strict";(self.webpackChunkydhooks=self.webpackChunkydhooks||[]).push([[391],{44768:function(P,p,s){s.r(p);var w=s(99083),h=s(54306),O=s.n(h),M=s(50959),a=s(73250),g=s(11527);p.default=function(){var b=(0,M.useState)(1),y=O()(b,2),_=y[0],D=y[1],C=function(){D(function(A){return A+1})},I=(0,a.vA)(C,2e3);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("p",{children:_}),(0,g.jsx)("p",{children:(0,g.jsx)(w.ZP,{onClick:function(){I()},children:"\u52A0\u4E00"})})]})}},73250:function(P,p,s){s.d(p,{FU:function(){return b},Cf:function(){return k},DI:function(){return V},Yz:function(){return Y},dU:function(){return _},Rr:function(){return ee},ww:function(){return R},Aq:function(){return te},vA:function(){return j},KS:function(){return H},ZQ:function(){return z},OT:function(){return K}});var w=s(54306),h=s.n(w),O=s(874),M=s.n(O),a=s(50959),g=function(){var n=(0,a.useState)(void 0),e=h()(n,2),t=e[0],r=e[1],o=(0,a.useCallback)(function(i){M()(i.toString()),r(i)},[r]);return[t,o]},b=g,y=function(n){var e=(0,a.useRef)(n);return e.current=n,e},_=y,D=function(n){var e=_(n);(0,a.useEffect)(function(){return function(){e.current()}},[])},C=D,I=function(n){(0,a.useEffect)(function(){n==null||n()},[])},R=I,A=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:500,t=_(n),r=(0,a.useRef)();C(function(){clearInterval(r.current)});var o=(0,a.useCallback)(function(){for(var i=arguments.length,l=new Array(i),d=0;d<i;d++)l[d]=arguments[d];r.current&&clearInterval(r.current),r.current=setTimeout(function(){t.current.apply(t,l),clearInterval(r.current)},e)},[t,e]);return o},V=A,B=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:500,t=_(n),r=(0,a.useRef)(new Date),o=(0,a.useCallback)(function(){var i=new Date,l=i.valueOf()-r.current.valueOf();l>e&&(t==null||t.current(),r.current=new Date)},[]);return o},j=B;function F(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=arguments.length>1?arguments[1]:void 0,e=(0,a.useState)(u),t=h()(e,2),r=t[0],o=t[1],i=(0,a.useMemo)(function(){var l=n===void 0?!u:n,d=function(){return o(function(c){return c===u?l:u})},S=function(c){return o(c)},T=function(){return o(u)},E=function(){return o(l)};return{toggle:d,set:S,setLeft:T,setRight:E}},[]);return[r,i]}var K=F,W=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=_(n),r=document.title;(0,a.useEffect)(function(){document.title=t.current},[t]),C(function(){e&&(document.title=r)})},z=W,re=s(37635),ue=function(n){return n!==null&&_typeof(n)==="object"},L=function(n){return typeof n=="function"},ae=function(n){return typeof n=="string"},oe=function(n){return typeof n=="boolean"},N=function(n){return typeof n=="number"},J=function(n){return typeof n=="undefined"},Z=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0;if((e==null?void 0:e.min)!==void 0&&(e==null?void 0:e.max)!==void 0&&(e==null?void 0:e.min)>(e==null?void 0:e.max))throw new Error("\u6700\u5927\u503C\u4E0D\u80FD\u5C0F\u4E8E\u6700\u5C0F\u503C");var t=(0,a.useState)(n),r=h()(t,2),o=r[0],i=r[1],l=(0,a.useMemo)(function(){var d=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;i(function(f){return(e==null?void 0:e.max)!==void 0&&f+c>(e==null?void 0:e.max)?e==null?void 0:e.max:f+c})},S=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;i(function(f){return(e==null?void 0:e.min)!==void 0&&f-c<(e==null?void 0:e.min)?e==null?void 0:e.min:f-c})},T=function(c){i(function(f){var v=N(c)?c:c(f);if((e==null?void 0:e.min)!==void 0&&v<(e==null?void 0:e.min))throw new Error("\u4E0D\u80FD\u5C0F\u4E8E\u6700\u5C0F\u503C");if((e==null?void 0:e.max)!==void 0&&v>(e==null?void 0:e.max))throw new Error("\u4E0D\u80FD\u5927\u4E8E\u6700\u5927\u503C");return v})},E=function(){i(n)};return{inc:d,dec:S,set:T,reset:E}},[]);return[o,l]},k=Z,Q=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3,t=arguments.length>2?arguments[2]:void 0;(0,a.useEffect)(function(){t!=null&&t.immediate&&n()},[]);var r=(0,a.useRef)();(0,a.useEffect)(function(){clearInterval(r.current),r.current=setInterval(function(){n()},e)},[e]);var o=function(){clearInterval(r.current)};return o},Y=Q,G=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3,t=(0,a.useRef)(null);(0,a.useEffect)(function(){t.current&&clearTimeout(t.current),t.current=setTimeout(function(){n()},e)},[e]);var r=function(){clearTimeout(t.current)};return r},H=G;function X(u){function n(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=u();if(!r)throw new Error("\u6B64\u73AF\u5883\u4E0D\u5B58\u5728\u672C\u5730\u5B58\u50A8\u65B9\u6CD5");if(!e)throw new Error("key \u5FC5\u987B\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u7C7B\u578B");var o=(t==null?void 0:t.serializer)||JSON.stringify,i=(t==null?void 0:t.deserializer)||JSON.parse,l=function(){var f=r.getItem(e);if(f!==null)return i(f);var v=t==null?void 0:t.defaultValue;return L(v)&&(v=v()),v},d=(0,a.useState)(l()),S=h()(d,2),T=S[0],E=S[1];(0,a.useEffect)(function(){E(l())},[e]);var m=function(f){var v=L(f)?f():f;E(v),J(v)?r.removeItem(e):r.setItem(e,o(v))};return[T,m]}return n}var U=X,$=function(){return typeof window!="undefined"&&window.document&&window.document.createElement},x=$,q=U(function(){return x()?localStorage:void 0}),ee=q,ne=U(function(){return x()?sessionStorage:void 0}),te=ne}}]);
