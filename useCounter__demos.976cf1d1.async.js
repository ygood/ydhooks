"use strict";(self.webpackChunkydhooks=self.webpackChunkydhooks||[]).push([[968],{29334:function(k,y,i){i.r(y);var _=i(99083),C=i(54306),p=i.n(C),A=i(50959),u=i(27874),f=i(11527),M=function(){var d=(0,u.Cf)(10,{max:20,min:0}),E=p()(d,2),D=E[0],h=E[1],b=h.inc,O=h.dec,R=h.set,x=h.reset;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("p",{children:D}),(0,f.jsx)(_.ZP,{onClick:function(){b(2)},children:"inc"}),(0,f.jsx)(_.ZP,{onClick:function(){O(2)},children:"dec"}),(0,f.jsx)(_.ZP,{onClick:function(){R(function(I){return I+1})},children:"set"}),(0,f.jsx)(_.ZP,{onClick:function(){x()},children:"reset"})]})};y.default=M},27874:function(k,y,i){i.d(y,{FU:function(){return M},Cf:function(){return V},DI:function(){return R},Yz:function(){return N},dU:function(){return d},ww:function(){return b},vA:function(){return T},KS:function(){return Q},ZQ:function(){return w},OT:function(){return F}});var _=i(54306),C=i.n(_),p=i(874),A=i.n(p),u=i(50959),f=function(){var n=(0,u.useState)(void 0),e=C()(n,2),t=e[0],r=e[1],a=(0,u.useCallback)(function(s){A()(s.toString()),r(s)},[r]);return[t,a]},M=f,L=function(n){var e=(0,u.useRef)(n);return e.current=n,e},d=L,E=function(n){var e=d(n);(0,u.useEffect)(function(){return function(){e.current()}},[])},D=E,h=function(n){(0,u.useEffect)(function(){n==null||n()},[])},b=h,O=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:500,t=d(n),r=(0,u.useRef)();D(function(){clearInterval(r.current)});var a=(0,u.useCallback)(function(){for(var s=arguments.length,l=new Array(s),v=0;v<s;v++)l[v]=arguments[v];r.current&&clearInterval(r.current),r.current=setTimeout(function(){t.current.apply(t,l),clearInterval(r.current)},e)},[t,e]);return a},R=O,x=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:500,t=d(n),r=(0,u.useRef)(new Date),a=(0,u.useCallback)(function(){var s=new Date,l=s.valueOf()-r.current.valueOf();l>e&&(t==null||t.current(),r.current=new Date)},[]);return a},T=x;function I(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,n=arguments.length>1?arguments[1]:void 0,e=(0,u.useState)(o),t=C()(e,2),r=t[0],a=t[1],s=(0,u.useMemo)(function(){var l=n===void 0?!o:n,v=function(){return a(function(c){return c===o?l:o})},P=function(c){return a(c)},S=function(){return a(o)},U=function(){return a(l)};return{toggle:v,set:P,setLeft:S,setRight:U}},[]);return[r,s]}var F=I,B=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=d(n),r=document.title;(0,u.useEffect)(function(){document.title=t.current},[t]),D(function(){e&&(document.title=r)})},w=B,Y=i(37635),$=function(n){return n!==null&&_typeof(n)==="object"},G=function(n){return typeof n=="function"},H=function(n){return typeof n=="string"},J=function(n){return typeof n=="boolean"},K=function(n){return typeof n=="number"},X=function(n){return typeof n=="undefined"},W=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0;if((e==null?void 0:e.min)!==void 0&&(e==null?void 0:e.max)!==void 0&&(e==null?void 0:e.min)>(e==null?void 0:e.max))throw new Error("\u6700\u5927\u503C\u4E0D\u80FD\u5C0F\u4E8E\u6700\u5C0F\u503C");var t=(0,u.useState)(n),r=C()(t,2),a=r[0],s=r[1],l=(0,u.useMemo)(function(){var v=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;s(function(g){return(e==null?void 0:e.max)!==void 0&&g+c>(e==null?void 0:e.max)?e==null?void 0:e.max:g+c})},P=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;s(function(g){return(e==null?void 0:e.min)!==void 0&&g-c<(e==null?void 0:e.min)?e==null?void 0:e.min:g-c})},S=function(c){s(function(g){var j=K(c)?c:c(g);if((e==null?void 0:e.min)!==void 0&&j<(e==null?void 0:e.min))throw new Error("\u4E0D\u80FD\u5C0F\u4E8E\u6700\u5C0F\u503C");if((e==null?void 0:e.max)!==void 0&&j>(e==null?void 0:e.max))throw new Error("\u4E0D\u80FD\u5927\u4E8E\u6700\u5927\u503C");return j})},U=function(){s(n)};return{inc:v,dec:P,set:S,reset:U}},[]);return[a,l]},V=W,Z=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3,t=arguments.length>2?arguments[2]:void 0;(0,u.useEffect)(function(){t!=null&&t.immediate&&n()},[]);var r=(0,u.useRef)();(0,u.useEffect)(function(){clearInterval(r.current),r.current=setInterval(function(){n()},e)},[e]);var a=function(){clearInterval(r.current)};return a},N=Z,z=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3,t=(0,u.useRef)(null);(0,u.useEffect)(function(){t.current&&clearTimeout(t.current),t.current=setTimeout(function(){n()},e)},[e]);var r=function(){clearTimeout(t.current)};return r},Q=z}}]);