"use strict";(self.webpackChunkydhooks=self.webpackChunkydhooks||[]).push([[56],{27815:function(L,p,s){s.r(p);var C=s(99083),h=s(23400),O=s(54306),M=s.n(O),a=s(50959),D=s(73250),m=s(11527);p.default=function(){var w=(0,D.FU)(),_=M()(w,2),I=_[0],y=_[1];return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("p",{children:I}),(0,m.jsx)("p",{children:(0,m.jsx)(h.Z,{})}),(0,m.jsx)("p",{children:(0,m.jsx)(C.ZP,{onClick:function(){y("zxczxc")},children:"copy"})})]})}},73250:function(L,p,s){s.d(p,{FU:function(){return m},Cf:function(){return Q},DI:function(){return j},Yz:function(){return k},dU:function(){return _},Rr:function(){return ee},ww:function(){return P},Aq:function(){return te},vA:function(){return V},KS:function(){return H},ZQ:function(){return W},OT:function(){return K}});var C=s(54306),h=s.n(C),O=s(874),M=s.n(O),a=s(50959),D=function(){var n=(0,a.useState)(void 0),e=h()(n,2),t=e[0],r=e[1],o=(0,a.useCallback)(function(i){M()(i.toString()),r(i)},[r]);return[t,o]},m=D,w=function(n){var e=(0,a.useRef)(n);return e.current=n,e},_=w,I=function(n){var e=_(n);(0,a.useEffect)(function(){return function(){e.current()}},[])},y=I,R=function(n){(0,a.useEffect)(function(){n==null||n()},[])},P=R,A=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:500,t=_(n),r=(0,a.useRef)();y(function(){clearInterval(r.current)});var o=(0,a.useCallback)(function(){for(var i=arguments.length,l=new Array(i),d=0;d<i;d++)l[d]=arguments[d];r.current&&clearInterval(r.current),r.current=setTimeout(function(){t.current.apply(t,l),clearInterval(r.current)},e)},[t,e]);return o},j=A,B=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:500,t=_(n),r=(0,a.useRef)(new Date),o=(0,a.useCallback)(function(){var i=new Date,l=i.valueOf()-r.current.valueOf();l>e&&(t==null||t.current(),r.current=new Date)},[]);return o},V=B;function F(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=arguments.length>1?arguments[1]:void 0,e=(0,a.useState)(u),t=h()(e,2),r=t[0],o=t[1],i=(0,a.useMemo)(function(){var l=n===void 0?!u:n,d=function(){return o(function(c){return c===u?l:u})},S=function(c){return o(c)},T=function(){return o(u)},E=function(){return o(l)};return{toggle:d,set:S,setLeft:T,setRight:E}},[]);return[r,i]}var K=F,z=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=_(n),r=document.title;(0,a.useEffect)(function(){document.title=t.current},[t]),y(function(){e&&(document.title=r)})},W=z,re=s(37635),ue=function(n){return n!==null&&_typeof(n)==="object"},x=function(n){return typeof n=="function"},ae=function(n){return typeof n=="string"},oe=function(n){return typeof n=="boolean"},N=function(n){return typeof n=="number"},Z=function(n){return typeof n=="undefined"},J=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0;if((e==null?void 0:e.min)!==void 0&&(e==null?void 0:e.max)!==void 0&&(e==null?void 0:e.min)>(e==null?void 0:e.max))throw new Error("\u6700\u5927\u503C\u4E0D\u80FD\u5C0F\u4E8E\u6700\u5C0F\u503C");var t=(0,a.useState)(n),r=h()(t,2),o=r[0],i=r[1],l=(0,a.useMemo)(function(){var d=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;i(function(f){return(e==null?void 0:e.max)!==void 0&&f+c>(e==null?void 0:e.max)?e==null?void 0:e.max:f+c})},S=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;i(function(f){return(e==null?void 0:e.min)!==void 0&&f-c<(e==null?void 0:e.min)?e==null?void 0:e.min:f-c})},T=function(c){i(function(f){var v=N(c)?c:c(f);if((e==null?void 0:e.min)!==void 0&&v<(e==null?void 0:e.min))throw new Error("\u4E0D\u80FD\u5C0F\u4E8E\u6700\u5C0F\u503C");if((e==null?void 0:e.max)!==void 0&&v>(e==null?void 0:e.max))throw new Error("\u4E0D\u80FD\u5927\u4E8E\u6700\u5927\u503C");return v})},E=function(){i(n)};return{inc:d,dec:S,set:T,reset:E}},[]);return[o,l]},Q=J,Y=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3,t=arguments.length>2?arguments[2]:void 0;(0,a.useEffect)(function(){t!=null&&t.immediate&&n()},[]);var r=(0,a.useRef)();(0,a.useEffect)(function(){clearInterval(r.current),r.current=setInterval(function(){n()},e)},[e]);var o=function(){clearInterval(r.current)};return o},k=Y,G=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3,t=(0,a.useRef)(null);(0,a.useEffect)(function(){t.current&&clearTimeout(t.current),t.current=setTimeout(function(){n()},e)},[e]);var r=function(){clearTimeout(t.current)};return r},H=G;function X(u){function n(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=u();if(!r)throw new Error("\u6B64\u73AF\u5883\u4E0D\u5B58\u5728\u672C\u5730\u5B58\u50A8\u65B9\u6CD5");if(!e)throw new Error("key \u5FC5\u987B\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u7C7B\u578B");var o=(t==null?void 0:t.serializer)||JSON.stringify,i=(t==null?void 0:t.deserializer)||JSON.parse,l=function(){var f=r.getItem(e);if(f!==null)return i(f);var v=t==null?void 0:t.defaultValue;return x(v)&&(v=v()),v},d=(0,a.useState)(l()),S=h()(d,2),T=S[0],E=S[1];(0,a.useEffect)(function(){E(l())},[e]);var g=function(f){var v=x(f)?f():f;E(v),Z(v)?r.removeItem(e):r.setItem(e,o(v))};return[T,g]}return n}var b=X,$=function(){return typeof window!="undefined"&&window.document&&window.document.createElement},U=$,q=b(function(){return U()?localStorage:void 0}),ee=q,ne=b(function(){return U()?sessionStorage:void 0}),te=ne}}]);
