"use strict";(self.webpackChunkydhooks=self.webpackChunkydhooks||[]).push([[68],{55534:function(B,E,o){o.r(E);var h=o(99083),S=o(54306),M=o.n(S),I=o(50959),a=o(99275),i=o(11527),C=function(){var g=(0,a.Aq)("msg",{defaultValue:"test"}),T=M()(g,2),c=T[0],D=T[1];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:c}),(0,i.jsx)(h.ZP,{onClick:function(){D("test1")},children:"\u4FEE\u6539"}),(0,i.jsx)(h.ZP,{onClick:function(){D(void 0)},children:"\u6E05\u9664"})]})};E.default=C},92629:function(B,E,o){o.r(E);var h=o(99083),S=o(54306),M=o.n(S),I=o(50959),a=o(99275),i=o(11527),C=function(){var g=(0,a.Aq)("msg_adv",{defaultValue:{name:"yanlei",action:"love",lover:"dengjuan"}}),T=M()(g,2),c=T[0],D=T[1];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"".concat(c==null?void 0:c.name," ").concat(c==null?void 0:c.action," ").concat(c==null?void 0:c.lover)}),(0,i.jsx)(h.ZP,{onClick:function(){D({name:"dengjuan",action:"love",lover:"yanlei"})},children:"\u4FEE\u6539"}),(0,i.jsx)(h.ZP,{onClick:function(){D(void 0)},children:"\u6E05\u9664"})]})};E.default=C},49327:function(B,E,o){o.r(E);var h=o(99083),S=o(54306),M=o.n(S),I=o(50959),a=o(99275),i=o(11527),C=function(){var g=function(P){var b=JSON.parse(P);return b.age=19,b},T=function(P){return P.action="very love",JSON.stringify(P)},c=(0,a.Aq)("custom_serializer",{defaultValue:{name:"yanlei",action:"love",lover:"dengjuan",age:18},serializer:T,deserializer:g}),D=M()(c,2),s=D[0],U=D[1];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"".concat(s==null?void 0:s.name," ").concat(s==null?void 0:s.action," ").concat(s==null?void 0:s.lover," ").concat(s==null?void 0:s.age)}),(0,i.jsx)(h.ZP,{onClick:function(){U({name:"dengjuan",action:"love",lover:"yanlei",age:18})},children:"\u4FEE\u6539"}),(0,i.jsx)(h.ZP,{onClick:function(){U(void 0)},children:"\u6E05\u9664"})]})};E.default=C},99275:function(B,E,o){o.d(E,{FU:function(){return C},Cf:function(){return Q},DI:function(){return L},OR:function(){return ae},Yz:function(){return G},dU:function(){return g},Rr:function(){return ne},ww:function(){return s},Aq:function(){return re},vA:function(){return b},KS:function(){return X},ZQ:function(){return z},OT:function(){return V}});var h=o(54306),S=o.n(h),M=o(874),I=o.n(M),a=o(50959),i=function(){var n=(0,a.useState)(void 0),e=S()(n,2),t=e[0],u=e[1],l=(0,a.useCallback)(function(d){I()(d.toString()),u(d)},[u]);return[t,l]},C=i,j=function(n){var e=(0,a.useRef)(n);return e.current=n,e},g=j,T=function(n){var e=g(n);(0,a.useEffect)(function(){return function(){e.current()}},[])},c=T,D=function(n){(0,a.useEffect)(function(){n==null||n()},[])},s=D,U=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:500,t=g(n),u=(0,a.useRef)();c(function(){clearInterval(u.current)});var l=(0,a.useCallback)(function(){for(var d=arguments.length,_=new Array(d),O=0;O<d;O++)_[O]=arguments[O];u.current&&clearInterval(u.current),u.current=setTimeout(function(){t.current.apply(t,_),clearInterval(u.current)},e)},[t,e]);return l},L=U,P=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:500,t=g(n),u=(0,a.useRef)(new Date),l=(0,a.useCallback)(function(){var d=new Date,_=d.valueOf()-u.current.valueOf();_>e&&(t==null||t.current(),u.current=new Date)},[]);return l},b=P;function F(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=arguments.length>1?arguments[1]:void 0,e=(0,a.useState)(r),t=S()(e,2),u=t[0],l=t[1],d=(0,a.useMemo)(function(){var _=n===void 0?!r:n,O=function(){return l(function(v){return v===r?_:r})},A=function(v){return l(v)},R=function(){return l(r)},p=function(){return l(_)};return{toggle:O,set:A,setLeft:R,setRight:p}},[]);return[u,d]}var V=F,k=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=g(n),u=document.title;(0,a.useEffect)(function(){document.title=t.current},[t]),c(function(){e&&(document.title=u)})},z=k,ie=o(37635),se=function(n){return n!==null&&_typeof(n)==="object"},K=function(n){return typeof n=="function"},le=function(n){return typeof n=="string"},de=function(n){return typeof n=="boolean"},Z=function(n){return typeof n=="number"},J=function(n){return typeof n=="undefined"},N=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0;if((e==null?void 0:e.min)!==void 0&&(e==null?void 0:e.max)!==void 0&&(e==null?void 0:e.min)>(e==null?void 0:e.max))throw new Error("\u6700\u5927\u503C\u4E0D\u80FD\u5C0F\u4E8E\u6700\u5C0F\u503C");var t=(0,a.useState)(n),u=S()(t,2),l=u[0],d=u[1],_=(0,a.useMemo)(function(){var O=function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;d(function(f){return(e==null?void 0:e.max)!==void 0&&f+v>(e==null?void 0:e.max)?e==null?void 0:e.max:f+v})},A=function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;d(function(f){return(e==null?void 0:e.min)!==void 0&&f-v<(e==null?void 0:e.min)?e==null?void 0:e.min:f-v})},R=function(v){d(function(f){var m=Z(v)?v:v(f);if((e==null?void 0:e.min)!==void 0&&m<(e==null?void 0:e.min))throw new Error("\u4E0D\u80FD\u5C0F\u4E8E\u6700\u5C0F\u503C");if((e==null?void 0:e.max)!==void 0&&m>(e==null?void 0:e.max))throw new Error("\u4E0D\u80FD\u5927\u4E8E\u6700\u5927\u503C");return m})},p=function(){d(n)};return{inc:O,dec:A,set:R,reset:p}},[]);return[l,_]},Q=N,Y=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3,t=arguments.length>2?arguments[2]:void 0;(0,a.useEffect)(function(){t!=null&&t.immediate&&n()},[]);var u=(0,a.useRef)();(0,a.useEffect)(function(){clearInterval(u.current),u.current=setInterval(function(){n()},e)},[e]);var l=function(){clearInterval(u.current)};return l},G=Y,H=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3,t=(0,a.useRef)(null);(0,a.useEffect)(function(){t.current&&clearTimeout(t.current),t.current=setTimeout(function(){n()},e)},[e]);var u=function(){clearTimeout(t.current)};return u},X=H;function $(r){function n(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=r();if(!u)throw new Error("\u6B64\u73AF\u5883\u4E0D\u5B58\u5728\u672C\u5730\u5B58\u50A8\u65B9\u6CD5");if(!e)throw new Error("key \u5FC5\u987B\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u7C7B\u578B");var l=(t==null?void 0:t.serializer)||JSON.stringify,d=(t==null?void 0:t.deserializer)||JSON.parse,_=function(){var f=u.getItem(e);if(f!==null)return d(f);var m=t==null?void 0:t.defaultValue;return K(m)&&(m=m()),m},O=(0,a.useState)(_()),A=S()(O,2),R=A[0],p=A[1];(0,a.useEffect)(function(){p(_())},[e]);var y=function(f){var m=K(f)?f():f;p(m),J(m)?u.removeItem(e):u.setItem(e,l(m))};return[R,y]}return n}var W=$,q=function(){return typeof window!="undefined"&&window.document&&window.document.createElement},x=q,ee=W(function(){return x()?localStorage:void 0}),ne=ee,te=W(function(){return x()?sessionStorage:void 0}),re=te;function ue(r,n){if(x())return r?typeof r=="function"?r():"current"in r?r.current:r:n}var w={addEvent:function(n,e,t){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};typeof n.addEventListener=="function"?n.addEventListener(e,t,{capture:u.capture,once:u.once,passive:u.passive}):"addAttr"in n&&typeof n.addAttr=="function"?n.addAttr(e,t):n["on".concat(e)]=t},removeEvent:function(n,e,t){typeof n.removeEventListener=="function"?n.removeEventListener(e,t):"removeAttr"in n&&typeof n.removeAttr=="function"?n.removeAttr(e,t):n["on".concat(e)]=null}};function oe(r,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};(0,a.useEffect)(function(){var t=ue(e==null?void 0:e.target,window);if(t)return w.addEvent(t,r,n,e),function(){w.removeEvent(t,r,n)}},[r,n,e])}var ae=oe}}]);
