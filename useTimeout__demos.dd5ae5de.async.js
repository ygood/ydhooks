"use strict";(self.webpackChunkydhooks=self.webpackChunkydhooks||[]).push([[286],{41904:function(j,h,i){i.r(h);var T=i(99083),E=i(54306),y=i.n(E),p=i(50959),o=i(58944),c=i(11527),R=function(){var g=(0,p.useState)(0),S=y()(g,2),D=S[0],L=S[1],A=(0,o.KS)(function(){L(function(C){return C+1})});return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("p",{children:D}),(0,c.jsx)(T.ZP,{onClick:A,children:"\u505C\u6B62"})]})};h.default=R},92114:function(j,h,i){i.r(h);var T=i(99083),E=i(54306),y=i.n(E),p=i(50959),o=i(58944),c=i(11527),R=function(){var g=(0,p.useState)(0),S=y()(g,2),D=S[0],L=S[1],A=(0,p.useState)(1e3),C=y()(A,2),U=C[0],w=C[1],B=(0,o.KS)(function(){L(function(I){return I+1})},U);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("p",{children:D}),(0,c.jsx)(T.ZP,{onClick:B,children:"\u505C\u6B62"}),(0,c.jsx)(T.ZP,{onClick:function(){w(2e3)},children:"\u4FEE\u6539\u65F6\u95F4\u95F4\u9694"})]})};h.default=R},58944:function(j,h,i){i.d(h,{FU:function(){return R},Cf:function(){return Q},DI:function(){return U},OR:function(){return ie},Yz:function(){return $},dU:function(){return g},Rr:function(){return te},JO:function(){return ve},ww:function(){return A},Aq:function(){return ue},vA:function(){return B},KS:function(){return X},ZQ:function(){return Z},OT:function(){return k}});var T=i(54306),E=i.n(T),y=i(874),p=i.n(y),o=i(50959),c=function(){var n=(0,o.useState)(void 0),e=E()(n,2),t=e[0],u=e[1],s=(0,o.useCallback)(function(a){p()(a.toString()),u(a)},[u]);return[t,s]},R=c,b=function(n){var e=(0,o.useRef)(n);return e.current=n,e},g=b,S=function(n){var e=g(n);(0,o.useEffect)(function(){return function(){e.current()}},[])},D=S,L=function(n){(0,o.useEffect)(function(){n==null||n()},[])},A=L,C=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:500,t=g(n),u=(0,o.useRef)();D(function(){clearInterval(u.current)});var s=(0,o.useCallback)(function(){for(var a=arguments.length,v=new Array(a),m=0;m<a;m++)v[m]=arguments[m];u.current&&clearInterval(u.current),u.current=setTimeout(function(){t.current.apply(t,v),clearInterval(u.current)},e)},[t,e]);return s},U=C,w=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:500,t=g(n),u=(0,o.useRef)(new Date),s=(0,o.useCallback)(function(){var a=new Date,v=a.valueOf()-u.current.valueOf();v>e&&(t==null||t.current(),u.current=new Date)},[]);return s},B=w;function I(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=arguments.length>1?arguments[1]:void 0,e=(0,o.useState)(r),t=E()(e,2),u=t[0],s=t[1],a=(0,o.useMemo)(function(){var v=n===void 0?!r:n,m=function(){return s(function(f){return f===r?v:r})},O=function(f){return s(f)},P=function(){return s(r)},M=function(){return s(v)};return{toggle:m,set:O,setLeft:P,setRight:M}},[]);return[u,a]}var k=I,z=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=g(n),u=document.title;(0,o.useEffect)(function(){document.title=t.current},[t]),D(function(){e&&(document.title=u)})},Z=z,de=i(37635),me=function(n){return n!==null&&_typeof(n)==="object"},K=function(n){return typeof n=="function"},ge=function(n){return typeof n=="string"},_e=function(n){return typeof n=="boolean"},J=function(n){return typeof n=="number"},G=function(n){return typeof n=="undefined"},N=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0;if((e==null?void 0:e.min)!==void 0&&(e==null?void 0:e.max)!==void 0&&(e==null?void 0:e.min)>(e==null?void 0:e.max))throw new Error("\u6700\u5927\u503C\u4E0D\u80FD\u5C0F\u4E8E\u6700\u5C0F\u503C");var t=(0,o.useState)(n),u=E()(t,2),s=u[0],a=u[1],v=(0,o.useMemo)(function(){var m=function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;a(function(l){return(e==null?void 0:e.max)!==void 0&&l+f>(e==null?void 0:e.max)?e==null?void 0:e.max:l+f})},O=function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;a(function(l){return(e==null?void 0:e.min)!==void 0&&l-f<(e==null?void 0:e.min)?e==null?void 0:e.min:l-f})},P=function(f){a(function(l){var d=J(f)?f:f(l);if((e==null?void 0:e.min)!==void 0&&d<(e==null?void 0:e.min))throw new Error("\u4E0D\u80FD\u5C0F\u4E8E\u6700\u5C0F\u503C");if((e==null?void 0:e.max)!==void 0&&d>(e==null?void 0:e.max))throw new Error("\u4E0D\u80FD\u5927\u4E8E\u6700\u5927\u503C");return d})},M=function(){a(n)};return{inc:m,dec:O,set:P,reset:M}},[]);return[s,v]},Q=N,Y=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3,t=arguments.length>2?arguments[2]:void 0;(0,o.useEffect)(function(){t!=null&&t.immediate&&n()},[]);var u=(0,o.useRef)();(0,o.useEffect)(function(){clearInterval(u.current),u.current=setInterval(function(){n()},e)},[e]);var s=function(){clearInterval(u.current)};return s},$=Y,H=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3,t=(0,o.useRef)(null);(0,o.useEffect)(function(){t.current&&clearTimeout(t.current),t.current=setTimeout(function(){n()},e)},[e]);var u=function(){clearTimeout(t.current)};return u},X=H;function q(r){function n(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=r();if(!u)throw new Error("\u6B64\u73AF\u5883\u4E0D\u5B58\u5728\u672C\u5730\u5B58\u50A8\u65B9\u6CD5");if(!e)throw new Error("key \u5FC5\u987B\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u7C7B\u578B");var s=(t==null?void 0:t.serializer)||JSON.stringify,a=(t==null?void 0:t.deserializer)||JSON.parse,v=function(){var l=u.getItem(e);if(l!==null)return a(l);var d=t==null?void 0:t.defaultValue;return K(d)&&(d=d()),d},m=(0,o.useState)(v()),O=E()(m,2),P=O[0],M=O[1];(0,o.useEffect)(function(){M(v())},[e]);var _=function(l){var d=K(l)?l():l;M(d),G(d)?u.removeItem(e):u.setItem(e,s(d))};return[P,_]}return n}var V=q,ee=function(){return typeof window!="undefined"&&window.document&&window.document.createElement},F=ee,ne=V(function(){return F()?localStorage:void 0}),te=ne,re=V(function(){return F()?sessionStorage:void 0}),ue=re;function ae(r,n){if(F())return r?typeof r=="function"?r():"current"in r?r.current:r:n}var W={addEvent:function(n,e,t){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};typeof n.addEventListener=="function"?n.addEventListener(e,t,{capture:u.capture,once:u.once,passive:u.passive}):"addAttr"in n&&typeof n.addAttr=="function"?n.addAttr(e,t):n["on".concat(e)]=t},removeEvent:function(n,e,t){typeof n.removeEventListener=="function"?n.removeEventListener(e,t):"removeAttr"in n&&typeof n.removeAttr=="function"?n.removeAttr(e,t):n["on".concat(e)]=null}};function oe(r,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};(0,o.useEffect)(function(){var t=ae(e==null?void 0:e.target,window);if(t)return W.addEvent(t,r,n,e),function(){W.removeEvent(t,r,n)}},[r,n,e])}var ie=oe,se=i(25359),x=i.n(se),fe=i(49811),le=i.n(fe);function ce(r){var n=(0,o.useRef)(!1);return(0,o.useCallback)(le()(x()().mark(function e(){var t,u=arguments;return x()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!n.current){a.next=2;break}return a.abrupt("return");case 2:return n.current=!0,a.prev=3,a.next=6,r.apply(void 0,u);case 6:return t=a.sent,n.current=!1,a.abrupt("return",t);case 11:throw a.prev=11,a.t0=a.catch(3),n.current=!1,new Error(a.t0);case 15:case"end":return a.stop()}},e,null,[[3,11]])})),[r])}var ve=ce}}]);
