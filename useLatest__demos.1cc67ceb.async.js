"use strict";(self.webpackChunkydhooks=self.webpackChunkydhooks||[]).push([[42],{61084:function(O,_,s){s.r(_);var p=s(54306),g=s.n(p),h=s(50959),C=s(27874),u=s(11527);_.default=function(){var b=(0,h.useState)(0),T=g()(b,2),y=T[0],v=T[1],M=(0,C.dU)(y);return(0,h.useEffect)(function(){var E=setInterval(function(){v(M.current+1)},1e3);return function(){return clearInterval(E)}},[]),(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("p",{children:["count: ",y]})})}},27874:function(O,_,s){s.d(_,{FU:function(){return T},Cf:function(){return k},DI:function(){return L},Yz:function(){return z},dU:function(){return v},ww:function(){return x},vA:function(){return P},KS:function(){return Y},ZQ:function(){return K},OT:function(){return w}});var p=s(54306),g=s.n(p),h=s(874),C=s.n(h),u=s(50959),b=function(){var n=(0,u.useState)(void 0),e=g()(n,2),t=e[0],r=e[1],a=(0,u.useCallback)(function(i){C()(i.toString()),r(i)},[r]);return[t,a]},T=b,y=function(n){var e=(0,u.useRef)(n);return e.current=n,e},v=y,M=function(n){var e=v(n);(0,u.useEffect)(function(){return function(){e.current()}},[])},E=M,U=function(n){(0,u.useEffect)(function(){n==null||n()},[])},x=U,A=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:500,t=v(n),r=(0,u.useRef)();E(function(){clearInterval(r.current)});var a=(0,u.useCallback)(function(){for(var i=arguments.length,f=new Array(i),l=0;l<i;l++)f[l]=arguments[l];r.current&&clearInterval(r.current),r.current=setTimeout(function(){t.current.apply(t,f),clearInterval(r.current)},e)},[t,e]);return a},L=A,F=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:500,t=v(n),r=(0,u.useRef)(new Date),a=(0,u.useCallback)(function(){var i=new Date,f=i.valueOf()-r.current.valueOf();f>e&&(t==null||t.current(),r.current=new Date)},[]);return a},P=F;function j(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=arguments.length>1?arguments[1]:void 0,e=(0,u.useState)(o),t=g()(e,2),r=t[0],a=t[1],i=(0,u.useMemo)(function(){var f=n===void 0?!o:n,l=function(){return a(function(c){return c===o?f:o})},R=function(c){return a(c)},D=function(){return a(o)},I=function(){return a(f)};return{toggle:l,set:R,setLeft:D,setRight:I}},[]);return[r,i]}var w=j,B=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=v(n),r=document.title;(0,u.useEffect)(function(){document.title=t.current},[t]),E(function(){e&&(document.title=r)})},K=B,Z=s(37635),G=function(n){return n!==null&&_typeof(n)==="object"},H=function(n){return typeof n=="function"},J=function(n){return typeof n=="string"},X=function(n){return typeof n=="boolean"},W=function(n){return typeof n=="number"},$=function(n){return typeof n=="undefined"},V=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0;if((e==null?void 0:e.min)!==void 0&&(e==null?void 0:e.max)!==void 0&&(e==null?void 0:e.min)>(e==null?void 0:e.max))throw new Error("\u6700\u5927\u503C\u4E0D\u80FD\u5C0F\u4E8E\u6700\u5C0F\u503C");var t=(0,u.useState)(n),r=g()(t,2),a=r[0],i=r[1],f=(0,u.useMemo)(function(){var l=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;i(function(m){return(e==null?void 0:e.max)!==void 0&&m+c>(e==null?void 0:e.max)?e==null?void 0:e.max:m+c})},R=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;i(function(m){return(e==null?void 0:e.min)!==void 0&&m-c<(e==null?void 0:e.min)?e==null?void 0:e.min:m-c})},D=function(c){i(function(m){var S=W(c)?c:c(m);if((e==null?void 0:e.min)!==void 0&&S<(e==null?void 0:e.min))throw new Error("\u4E0D\u80FD\u5C0F\u4E8E\u6700\u5C0F\u503C");if((e==null?void 0:e.max)!==void 0&&S>(e==null?void 0:e.max))throw new Error("\u4E0D\u80FD\u5927\u4E8E\u6700\u5927\u503C");return S})},I=function(){i(n)};return{inc:l,dec:R,set:D,reset:I}},[]);return[a,f]},k=V,N=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3,t=arguments.length>2?arguments[2]:void 0;(0,u.useEffect)(function(){t!=null&&t.immediate&&n()},[]);var r=(0,u.useRef)();(0,u.useEffect)(function(){clearInterval(r.current),r.current=setInterval(function(){n()},e)},[e]);var a=function(){clearInterval(r.current)};return a},z=N,Q=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3,t=(0,u.useRef)(null);(0,u.useEffect)(function(){t.current&&clearTimeout(t.current),t.current=setTimeout(function(){n()},e)},[e]);var r=function(){clearTimeout(t.current)};return r},Y=Q}}]);