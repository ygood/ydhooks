"use strict";(self.webpackChunkydhooks=self.webpackChunkydhooks||[]).push([[699],{21413:function(x,h,f){f.r(h);var M=f(50959),m=f(57970),y=f(11527),T=function(){return(0,m.ZQ)("zxczxczxc",!0),(0,y.jsx)(y.Fragment,{})};h.default=T},57970:function(x,h,f){f.d(h,{FU:function(){return S},Cf:function(){return N},DI:function(){return w},Yz:function(){return Z},dU:function(){return g},ww:function(){return U},vA:function(){return P},ZQ:function(){return V},OT:function(){return B}});var M=f(54306),m=f.n(M),y=f(874),T=f.n(y),a=f(50959),I=function(){var e=(0,a.useState)(void 0),n=m()(e,2),r=n[0],t=n[1],o=(0,a.useCallback)(function(i){T()(i.toString()),t(i)},[t]);return[r,o]},S=I,b=function(e){var n=(0,a.useRef)(e);return n.current=e,n},g=b,O=function(e){var n=g(e);(0,a.useEffect)(function(){return function(){n.current()}},[])},R=O,F=function(e){(0,a.useEffect)(function(){e==null||e()},[])},U=F,L=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:500,r=g(e),t=(0,a.useRef)();R(function(){clearInterval(t.current)});var o=(0,a.useCallback)(function(){for(var i=arguments.length,c=new Array(i),v=0;v<i;v++)c[v]=arguments[v];t.current&&clearInterval(t.current),t.current=setTimeout(function(){r.current.apply(r,c),clearInterval(t.current)},n)},[r,n]);return o},w=L,A=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:500,r=g(e),t=(0,a.useRef)(new Date),o=(0,a.useCallback)(function(){var i=new Date,c=i.valueOf()-t.current.valueOf();c>n&&(r==null||r.current(),t.current=new Date)},[]);return o},P=A;function j(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=arguments.length>1?arguments[1]:void 0,n=(0,a.useState)(u),r=m()(n,2),t=r[0],o=r[1],i=(0,a.useMemo)(function(){var c=e===void 0?!u:e,v=function(){return o(function(s){return s===u?c:u})},C=function(s){return o(s)},E=function(){return o(u)},p=function(){return o(c)};return{toggle:v,set:C,setLeft:E,setRight:p}},[]);return[t,i]}var B=j,z=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=g(e),t=document.title;(0,a.useEffect)(function(){document.title=r.current},[r]),R(function(){n&&(document.title=t)})},V=z,Y=f(37635),_=function(e){return e!==null&&_typeof(e)==="object"},G=function(e){return typeof e=="function"},H=function(e){return typeof e=="string"},J=function(e){return typeof e=="boolean"},K=function(e){return typeof e=="number"},X=function(e){return typeof e=="undefined"},W=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0;if((n==null?void 0:n.min)!==void 0&&(n==null?void 0:n.max)!==void 0&&(n==null?void 0:n.min)>(n==null?void 0:n.max))throw new Error("\u6700\u5927\u503C\u4E0D\u80FD\u5C0F\u4E8E\u6700\u5C0F\u503C");var r=(0,a.useState)(e),t=m()(r,2),o=t[0],i=t[1],c=(0,a.useMemo)(function(){var v=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;i(function(d){return(n==null?void 0:n.max)!==void 0&&d+s>(n==null?void 0:n.max)?n==null?void 0:n.max:d+s})},C=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;i(function(d){return(n==null?void 0:n.min)!==void 0&&d-s<(n==null?void 0:n.min)?n==null?void 0:n.min:d-s})},E=function(s){i(function(d){var D=K(s)?s:s(d);if((n==null?void 0:n.min)!==void 0&&D<(n==null?void 0:n.min))throw new Error("\u4E0D\u80FD\u5C0F\u4E8E\u6700\u5C0F\u503C");if((n==null?void 0:n.max)!==void 0&&D>(n==null?void 0:n.max))throw new Error("\u4E0D\u80FD\u5927\u4E8E\u6700\u5927\u503C");return D})},p=function(){i(e)};return{inc:v,dec:C,set:E,reset:p}},[]);return[o,c]},N=W,Q=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3,r=arguments.length>2?arguments[2]:void 0;(0,a.useEffect)(function(){r!=null&&r.immediate&&e()},[]);var t=(0,a.useRef)();(0,a.useEffect)(function(){clearInterval(t.current),t.current=setInterval(function(){e()},n)},[n]);var o=function(){clearInterval(t.current)};return o},Z=Q}}]);