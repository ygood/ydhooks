"use strict";(self.webpackChunkydhooks=self.webpackChunkydhooks||[]).push([[699],{21413:function(M,T,s){s.r(T);var L=s(50959),g=s(58944),w=s(11527),y=function(){return(0,g.ZQ)("zxczxczxc",!0),(0,w.jsx)(w.Fragment,{})};T.default=y},58944:function(M,T,s){s.d(T,{FU:function(){return F},Cf:function(){return $},DI:function(){return j},OR:function(){return oe},Yz:function(){return X},dU:function(){return h},Rr:function(){return te},JO:function(){return le},ww:function(){return B},Aq:function(){return ue},vA:function(){return K},KS:function(){return q},ZQ:function(){return N},OT:function(){return W}});var L=s(54306),g=s.n(L),w=s(874),y=s.n(w),i=s(50959),b=function(){var n=(0,i.useState)(void 0),e=g()(n,2),t=e[0],u=e[1],o=(0,i.useCallback)(function(a){y()(a.toString()),u(a)},[u]);return[t,o]},F=b,U=function(n){var e=(0,i.useRef)(n);return e.current=n,e},h=U,V=function(n){var e=h(n);(0,i.useEffect)(function(){return function(){e.current()}},[])},C=V,z=function(n){(0,i.useEffect)(function(){n==null||n()},[])},B=z,P=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:500,t=h(n),u=(0,i.useRef)();C(function(){clearInterval(u.current)});var o=(0,i.useCallback)(function(){for(var a=arguments.length,v=new Array(a),d=0;d<a;d++)v[d]=arguments[d];u.current&&clearInterval(u.current),u.current=setTimeout(function(){t.current.apply(t,v),clearInterval(u.current)},e)},[t,e]);return o},j=P,x=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:500,t=h(n),u=(0,i.useRef)(new Date),o=(0,i.useCallback)(function(){var a=new Date,v=a.valueOf()-u.current.valueOf();v>e&&(t==null||t.current(),u.current=new Date)},[]);return o},K=x;function J(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=arguments.length>1?arguments[1]:void 0,e=(0,i.useState)(r),t=g()(e,2),u=t[0],o=t[1],a=(0,i.useMemo)(function(){var v=n===void 0?!r:n,d=function(){return o(function(f){return f===r?v:r})},S=function(f){return o(f)},p=function(){return o(r)},E=function(){return o(v)};return{toggle:d,set:S,setLeft:p,setRight:E}},[]);return[u,a]}var W=J,G=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=h(n),u=document.title;(0,i.useEffect)(function(){document.title=t.current},[t]),C(function(){e&&(document.title=u)})},N=G,de=s(37635),me=function(n){return n!==null&&_typeof(n)==="object"},O=function(n){return typeof n=="function"},ge=function(n){return typeof n=="string"},Se=function(n){return typeof n=="boolean"},Q=function(n){return typeof n=="number"},Z=function(n){return typeof n=="undefined"},Y=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0;if((e==null?void 0:e.min)!==void 0&&(e==null?void 0:e.max)!==void 0&&(e==null?void 0:e.min)>(e==null?void 0:e.max))throw new Error("\u6700\u5927\u503C\u4E0D\u80FD\u5C0F\u4E8E\u6700\u5C0F\u503C");var t=(0,i.useState)(n),u=g()(t,2),o=u[0],a=u[1],v=(0,i.useMemo)(function(){var d=function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;a(function(c){return(e==null?void 0:e.max)!==void 0&&c+f>(e==null?void 0:e.max)?e==null?void 0:e.max:c+f})},S=function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;a(function(c){return(e==null?void 0:e.min)!==void 0&&c-f<(e==null?void 0:e.min)?e==null?void 0:e.min:c-f})},p=function(f){a(function(c){var l=Q(f)?f:f(c);if((e==null?void 0:e.min)!==void 0&&l<(e==null?void 0:e.min))throw new Error("\u4E0D\u80FD\u5C0F\u4E8E\u6700\u5C0F\u503C");if((e==null?void 0:e.max)!==void 0&&l>(e==null?void 0:e.max))throw new Error("\u4E0D\u80FD\u5927\u4E8E\u6700\u5927\u503C");return l})},E=function(){a(n)};return{inc:d,dec:S,set:p,reset:E}},[]);return[o,v]},$=Y,H=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3,t=arguments.length>2?arguments[2]:void 0;(0,i.useEffect)(function(){t!=null&&t.immediate&&n()},[]);var u=(0,i.useRef)();(0,i.useEffect)(function(){clearInterval(u.current),u.current=setInterval(function(){n()},e)},[e]);var o=function(){clearInterval(u.current)};return o},X=H,k=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3,t=(0,i.useRef)(null);(0,i.useEffect)(function(){t.current&&clearTimeout(t.current),t.current=setTimeout(function(){n()},e)},[e]);var u=function(){clearTimeout(t.current)};return u},q=k;function _(r){function n(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=r();if(!u)throw new Error("\u6B64\u73AF\u5883\u4E0D\u5B58\u5728\u672C\u5730\u5B58\u50A8\u65B9\u6CD5");if(!e)throw new Error("key \u5FC5\u987B\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u7C7B\u578B");var o=(t==null?void 0:t.serializer)||JSON.stringify,a=(t==null?void 0:t.deserializer)||JSON.parse,v=function(){var c=u.getItem(e);if(c!==null)return a(c);var l=t==null?void 0:t.defaultValue;return O(l)&&(l=l()),l},d=(0,i.useState)(v()),S=g()(d,2),p=S[0],E=S[1];(0,i.useEffect)(function(){E(v())},[e]);var m=function(c){var l=O(c)?c():c;E(l),Z(l)?u.removeItem(e):u.setItem(e,o(l))};return[p,m]}return n}var D=_,ee=function(){return typeof window!="undefined"&&window.document&&window.document.createElement},R=ee,ne=D(function(){return R()?localStorage:void 0}),te=ne,re=D(function(){return R()?sessionStorage:void 0}),ue=re;function ae(r,n){if(R())return r?typeof r=="function"?r():"current"in r?r.current:r:n}var I={addEvent:function(n,e,t){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};typeof n.addEventListener=="function"?n.addEventListener(e,t,{capture:u.capture,once:u.once,passive:u.passive}):"addAttr"in n&&typeof n.addAttr=="function"?n.addAttr(e,t):n["on".concat(e)]=t},removeEvent:function(n,e,t){typeof n.removeEventListener=="function"?n.removeEventListener(e,t):"removeAttr"in n&&typeof n.removeAttr=="function"?n.removeAttr(e,t):n["on".concat(e)]=null}};function ie(r,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};(0,i.useEffect)(function(){var t=ae(e==null?void 0:e.target,window);if(t)return I.addEvent(t,r,n,e),function(){I.removeEvent(t,r,n)}},[r,n,e])}var oe=ie,se=s(25359),A=s.n(se),fe=s(49811),ce=s.n(fe);function ve(r){var n=(0,i.useRef)(!1);return(0,i.useCallback)(ce()(A()().mark(function e(){var t,u=arguments;return A()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!n.current){a.next=2;break}return a.abrupt("return");case 2:return n.current=!0,a.prev=3,a.next=6,r.apply(void 0,u);case 6:return t=a.sent,n.current=!1,a.abrupt("return",t);case 11:throw a.prev=11,a.t0=a.catch(3),n.current=!1,new Error(a.t0);case 15:case"end":return a.stop()}},e,null,[[3,11]])})),[r])}var le=ve}}]);
