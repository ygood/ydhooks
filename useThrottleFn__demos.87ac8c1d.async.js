"use strict";(self.webpackChunkydhooks=self.webpackChunkydhooks||[]).push([[391],{44768:function(V,T,s){s.r(T);var C=s(99083),h=s(54306),O=s.n(h),A=s(50959),o=s(99275),g=s(11527);T.default=function(){var D=(0,A.useState)(1),y=O()(D,2),_=y[0],L=y[1],w=function(){L(function(b){return b+1})},M=(0,o.vA)(w,2e3);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("p",{children:_}),(0,g.jsx)("p",{children:(0,g.jsx)(C.ZP,{onClick:function(){M()},children:"\u52A0\u4E00"})})]})}},99275:function(V,T,s){s.d(T,{FU:function(){return D},Cf:function(){return Q},DI:function(){return B},OR:function(){return ie},Yz:function(){return G},dU:function(){return _},Rr:function(){return ne},ww:function(){return R},Aq:function(){return re},vA:function(){return F},KS:function(){return X},ZQ:function(){return J},OT:function(){return W}});var C=s(54306),h=s.n(C),O=s(874),A=s.n(O),o=s(50959),g=function(){var n=(0,o.useState)(void 0),e=h()(n,2),t=e[0],u=e[1],i=(0,o.useCallback)(function(a){A()(a.toString()),u(a)},[u]);return[t,i]},D=g,y=function(n){var e=(0,o.useRef)(n);return e.current=n,e},_=y,L=function(n){var e=_(n);(0,o.useEffect)(function(){return function(){e.current()}},[])},w=L,M=function(n){(0,o.useEffect)(function(){n==null||n()},[])},R=M,b=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:500,t=_(n),u=(0,o.useRef)();w(function(){clearInterval(u.current)});var i=(0,o.useCallback)(function(){for(var a=arguments.length,v=new Array(a),d=0;d<a;d++)v[d]=arguments[d];u.current&&clearInterval(u.current),u.current=setTimeout(function(){t.current.apply(t,v),clearInterval(u.current)},e)},[t,e]);return i},B=b,j=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:500,t=_(n),u=(0,o.useRef)(new Date),i=(0,o.useCallback)(function(){var a=new Date,v=a.valueOf()-u.current.valueOf();v>e&&(t==null||t.current(),u.current=new Date)},[]);return i},F=j;function K(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=arguments.length>1?arguments[1]:void 0,e=(0,o.useState)(r),t=h()(e,2),u=t[0],i=t[1],a=(0,o.useMemo)(function(){var v=n===void 0?!r:n,d=function(){return i(function(f){return f===r?v:r})},E=function(f){return i(f)},p=function(){return i(r)},S=function(){return i(v)};return{toggle:d,set:E,setLeft:p,setRight:S}},[]);return[u,a]}var W=K,z=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=_(n),u=document.title;(0,o.useEffect)(function(){document.title=t.current},[t]),w(function(){e&&(document.title=u)})},J=z,ae=s(37635),se=function(n){return n!==null&&_typeof(n)==="object"},U=function(n){return typeof n=="function"},fe=function(n){return typeof n=="string"},ce=function(n){return typeof n=="boolean"},N=function(n){return typeof n=="number"},Z=function(n){return typeof n=="undefined"},k=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0;if((e==null?void 0:e.min)!==void 0&&(e==null?void 0:e.max)!==void 0&&(e==null?void 0:e.min)>(e==null?void 0:e.max))throw new Error("\u6700\u5927\u503C\u4E0D\u80FD\u5C0F\u4E8E\u6700\u5C0F\u503C");var t=(0,o.useState)(n),u=h()(t,2),i=u[0],a=u[1],v=(0,o.useMemo)(function(){var d=function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;a(function(c){return(e==null?void 0:e.max)!==void 0&&c+f>(e==null?void 0:e.max)?e==null?void 0:e.max:c+f})},E=function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;a(function(c){return(e==null?void 0:e.min)!==void 0&&c-f<(e==null?void 0:e.min)?e==null?void 0:e.min:c-f})},p=function(f){a(function(c){var l=N(f)?f:f(c);if((e==null?void 0:e.min)!==void 0&&l<(e==null?void 0:e.min))throw new Error("\u4E0D\u80FD\u5C0F\u4E8E\u6700\u5C0F\u503C");if((e==null?void 0:e.max)!==void 0&&l>(e==null?void 0:e.max))throw new Error("\u4E0D\u80FD\u5927\u4E8E\u6700\u5927\u503C");return l})},S=function(){a(n)};return{inc:d,dec:E,set:p,reset:S}},[]);return[i,v]},Q=k,Y=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3,t=arguments.length>2?arguments[2]:void 0;(0,o.useEffect)(function(){t!=null&&t.immediate&&n()},[]);var u=(0,o.useRef)();(0,o.useEffect)(function(){clearInterval(u.current),u.current=setInterval(function(){n()},e)},[e]);var i=function(){clearInterval(u.current)};return i},G=Y,H=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3,t=(0,o.useRef)(null);(0,o.useEffect)(function(){t.current&&clearTimeout(t.current),t.current=setTimeout(function(){n()},e)},[e]);var u=function(){clearTimeout(t.current)};return u},X=H;function $(r){function n(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=r();if(!u)throw new Error("\u6B64\u73AF\u5883\u4E0D\u5B58\u5728\u672C\u5730\u5B58\u50A8\u65B9\u6CD5");if(!e)throw new Error("key \u5FC5\u987B\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u7C7B\u578B");var i=(t==null?void 0:t.serializer)||JSON.stringify,a=(t==null?void 0:t.deserializer)||JSON.parse,v=function(){var c=u.getItem(e);if(c!==null)return a(c);var l=t==null?void 0:t.defaultValue;return U(l)&&(l=l()),l},d=(0,o.useState)(v()),E=h()(d,2),p=E[0],S=E[1];(0,o.useEffect)(function(){S(v())},[e]);var m=function(c){var l=U(c)?c():c;S(l),Z(l)?u.removeItem(e):u.setItem(e,i(l))};return[p,m]}return n}var x=$,q=function(){return typeof window!="undefined"&&window.document&&window.document.createElement},I=q,ee=x(function(){return I()?localStorage:void 0}),ne=ee,te=x(function(){return I()?sessionStorage:void 0}),re=te;function ue(r,n){if(I())return r?typeof r=="function"?r():"current"in r?r.current:r:n}var P={addEvent:function(n,e,t){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};typeof n.addEventListener=="function"?n.addEventListener(e,t,{capture:u.capture,once:u.once,passive:u.passive}):"addAttr"in n&&typeof n.addAttr=="function"?n.addAttr(e,t):n["on".concat(e)]=t},removeEvent:function(n,e,t){typeof n.removeEventListener=="function"?n.removeEventListener(e,t):"removeAttr"in n&&typeof n.removeAttr=="function"?n.removeAttr(e,t):n["on".concat(e)]=null}};function oe(r,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};(0,o.useEffect)(function(){var t=ue(e==null?void 0:e.target,window);if(t)return P.addEvent(t,r,n,e),function(){P.removeEvent(t,r,n)}},[r,n,e])}var ie=oe}}]);
