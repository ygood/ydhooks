"use strict";(self.webpackChunkydhooks=self.webpackChunkydhooks||[]).push([[42],{61084:function(U,_,a){a.r(_);var C=a(54306),g=a.n(C),h=a(50959),p=a(64975),r=a(11527);_.default=function(){var b=(0,h.useState)(0),y=g()(b,2),T=y[0],v=y[1],M=(0,p.dU)(T);return(0,h.useEffect)(function(){var E=setInterval(function(){v(M.current+1)},1e3);return function(){return clearInterval(E)}},[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("p",{children:["count: ",T]})})}},64975:function(U,_,a){a.d(_,{FU:function(){return y},Cf:function(){return k},DI:function(){return L},dU:function(){return v},ww:function(){return A},vA:function(){return P},ZQ:function(){return K},OT:function(){return w}});var C=a(54306),g=a.n(C),h=a(874),p=a.n(h),r=a(50959),b=function(){var e=(0,r.useState)(void 0),n=g()(e,2),o=n[0],u=n[1],f=(0,r.useCallback)(function(i){p()(i.toString()),u(i)},[u]);return[o,f]},y=b,T=function(e){var n=(0,r.useRef)(e);return n.current=e,n},v=T,M=function(e){var n=v(e);(0,r.useEffect)(function(){return function(){n.current()}},[])},E=M,x=function(e){(0,r.useEffect)(function(){e==null||e()},[])},A=x,I=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:500,o=v(e),u=(0,r.useRef)();E(function(){clearInterval(u.current)});var f=(0,r.useCallback)(function(){for(var i=arguments.length,c=new Array(i),l=0;l<i;l++)c[l]=arguments[l];u.current&&clearInterval(u.current),u.current=setTimeout(function(){o.current.apply(o,c),clearInterval(u.current)},n)},[o,n]);return f},L=I,F=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:500,o=v(e),u=(0,r.useRef)(new Date),f=(0,r.useCallback)(function(){var i=new Date,c=i.valueOf()-u.current.valueOf();c>n&&(o==null||o.current(),u.current=new Date)},[]);return f},P=F;function j(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=arguments.length>1?arguments[1]:void 0,n=(0,r.useState)(t),o=g()(n,2),u=o[0],f=o[1],i=(0,r.useMemo)(function(){var c=e===void 0?!t:e,l=function(){return f(function(s){return s===t?c:t})},D=function(s){return f(s)},O=function(){return f(t)},R=function(){return f(c)};return{toggle:l,set:D,setLeft:O,setRight:R}},[]);return[u,i]}var w=j,B=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=v(e),u=document.title;(0,r.useEffect)(function(){document.title=o.current},[o]),E(function(){n&&(document.title=u)})},K=B,N=a(37635),Q=function(e){return e!==null&&_typeof(e)==="object"},Z=function(e){return typeof e=="function"},z=function(e){return typeof e=="string"},G=function(e){return typeof e=="boolean"},W=function(e){return typeof e=="number"},H=function(e){return typeof e=="undefined"},V=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0;if((n==null?void 0:n.min)!==void 0&&(n==null?void 0:n.max)!==void 0&&(n==null?void 0:n.min)>(n==null?void 0:n.max))throw new Error("\u6700\u5927\u503C\u4E0D\u80FD\u5C0F\u4E8E\u6700\u5C0F\u503C");var o=(0,r.useState)(e),u=g()(o,2),f=u[0],i=u[1],c=(0,r.useMemo)(function(){var l=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;i(function(m){return(n==null?void 0:n.max)!==void 0&&m+s>(n==null?void 0:n.max)?n==null?void 0:n.max:m+s})},D=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;i(function(m){return(n==null?void 0:n.min)!==void 0&&m-s<(n==null?void 0:n.min)?n==null?void 0:n.min:m-s})},O=function(s){i(function(m){var S=W(s)?s:s(m);if((n==null?void 0:n.min)!==void 0&&S<(n==null?void 0:n.min))throw new Error("\u4E0D\u80FD\u5C0F\u4E8E\u6700\u5C0F\u503C");if((n==null?void 0:n.max)!==void 0&&S>(n==null?void 0:n.max))throw new Error("\u4E0D\u80FD\u5927\u4E8E\u6700\u5927\u503C");return S})},R=function(){i(e)};return{inc:l,dec:D,set:O,reset:R}},[]);return[f,c]},k=V}}]);
