"use strict";(self.webpackChunkydhooks=self.webpackChunkydhooks||[]).push([[388],{72421:function(A,C,i){i.r(C);var _=i(99083),h=i(54306),D=i.n(h),S=i(50959),o=i(64975),c=i(11527),M=function(){var v=(0,o.OT)(1,2),y=D()(v,2),E=y[0],T=y[1],O=T.toggle,R=T.setLeft,b=T.setRight;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("p",{children:"".concat(E)}),(0,c.jsx)("p",{children:(0,c.jsx)(_.ZP,{onClick:function(){O()},children:"toggle"})}),(0,c.jsx)("p",{children:(0,c.jsx)(_.ZP,{onClick:function(){R()},children:"setLeft"})}),(0,c.jsx)("p",{children:(0,c.jsx)(_.ZP,{onClick:function(){b()},children:"setRight"})})]})};C.default=M},64975:function(A,C,i){i.d(C,{FU:function(){return M},Cf:function(){return V},DI:function(){return b},dU:function(){return v},ww:function(){return O},vA:function(){return F},ZQ:function(){return w},OT:function(){return k}});var _=i(54306),h=i.n(_),D=i(874),S=i.n(D),o=i(50959),c=function(){var e=(0,o.useState)(void 0),n=h()(e,2),u=n[0],r=n[1],l=(0,o.useCallback)(function(s){S()(s.toString()),r(s)},[r]);return[u,l]},M=c,U=function(e){var n=(0,o.useRef)(e);return n.current=e,n},v=U,y=function(e){var n=v(e);(0,o.useEffect)(function(){return function(){n.current()}},[])},E=y,T=function(e){(0,o.useEffect)(function(){e==null||e()},[])},O=T,R=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:500,u=v(e),r=(0,o.useRef)();E(function(){clearInterval(r.current)});var l=(0,o.useCallback)(function(){for(var s=arguments.length,f=new Array(s),d=0;d<s;d++)f[d]=arguments[d];r.current&&clearInterval(r.current),r.current=setTimeout(function(){u.current.apply(u,f),clearInterval(r.current)},n)},[u,n]);return l},b=R,p=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:500,u=v(e),r=(0,o.useRef)(new Date),l=(0,o.useCallback)(function(){var s=new Date,f=s.valueOf()-r.current.valueOf();f>n&&(u==null||u.current(),r.current=new Date)},[]);return l},F=p;function I(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=arguments.length>1?arguments[1]:void 0,n=(0,o.useState)(t),u=h()(n,2),r=u[0],l=u[1],s=(0,o.useMemo)(function(){var f=e===void 0?!t:e,d=function(){return l(function(a){return a===t?f:t})},x=function(a){return l(a)},L=function(){return l(t)},P=function(){return l(f)};return{toggle:d,set:x,setLeft:L,setRight:P}},[]);return[r,s]}var k=I,B=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=v(e),r=document.title;(0,o.useEffect)(function(){document.title=u.current},[u]),E(function(){n&&(document.title=r)})},w=B,Z=i(37635),N=function(e){return e!==null&&_typeof(e)==="object"},Q=function(e){return typeof e=="function"},$=function(e){return typeof e=="string"},z=function(e){return typeof e=="boolean"},K=function(e){return typeof e=="number"},G=function(e){return typeof e=="undefined"},W=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0;if((n==null?void 0:n.min)!==void 0&&(n==null?void 0:n.max)!==void 0&&(n==null?void 0:n.min)>(n==null?void 0:n.max))throw new Error("\u6700\u5927\u503C\u4E0D\u80FD\u5C0F\u4E8E\u6700\u5C0F\u503C");var u=(0,o.useState)(e),r=h()(u,2),l=r[0],s=r[1],f=(0,o.useMemo)(function(){var d=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;s(function(g){return(n==null?void 0:n.max)!==void 0&&g+a>(n==null?void 0:n.max)?n==null?void 0:n.max:g+a})},x=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;s(function(g){return(n==null?void 0:n.min)!==void 0&&g-a<(n==null?void 0:n.min)?n==null?void 0:n.min:g-a})},L=function(a){s(function(g){var j=K(a)?a:a(g);if((n==null?void 0:n.min)!==void 0&&j<(n==null?void 0:n.min))throw new Error("\u4E0D\u80FD\u5C0F\u4E8E\u6700\u5C0F\u503C");if((n==null?void 0:n.max)!==void 0&&j>(n==null?void 0:n.max))throw new Error("\u4E0D\u80FD\u5927\u4E8E\u6700\u5927\u503C");return j})},P=function(){s(e)};return{inc:d,dec:x,set:L,reset:P}},[]);return[l,f]},V=W}}]);
