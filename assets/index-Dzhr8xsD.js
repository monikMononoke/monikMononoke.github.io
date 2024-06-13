(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const m of c)if(m.type==="childList")for(const T of m.addedNodes)T.tagName==="LINK"&&T.rel==="modulepreload"&&a(T)}).observe(document,{childList:!0,subtree:!0});function r(c){const m={};return c.integrity&&(m.integrity=c.integrity),c.referrerPolicy&&(m.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?m.credentials="include":c.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function a(c){if(c.ep)return;c.ep=!0;const m=r(c);fetch(c.href,m)}})();function K(){return K=Object.assign?Object.assign.bind():function(l){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(l[a]=r[a])}return l},K.apply(this,arguments)}var $=function(n,r){return n.querySelector(r)},Pt=function(n,r){return n.querySelectorAll(r)},Xt=function(n){n===void 0&&(n={});var r={};return Object.keys(n).forEach(function(a){typeof n[a]<"u"&&(r[a]=n[a])}),r},Yt={alwaysActive:!1,activeOffset:50,shadowOffset:50,shadowScale:1,duration:300,rotate:!0,rotateTouch:!0,rotateXMax:15,rotateYMax:15,rotateXInvert:!1,rotateYInvert:!1,stretchX:0,stretchY:0,stretchZ:0,commonOrigin:!0,shadow:!0,highlight:!0};function $t(l){l===void 0&&(l={});var n=l,r=n.el,a=n.eventsEl,c=l,m=c.isComponent,T,g={__atropos__:!0,params:K({},Yt,{onEnter:null,onLeave:null,onRotate:null},Xt(l||{})),destroyed:!1,isActive:!1},e=g.params,w,b,z,R,C,y,p,E,G,J,O=[],V,nt=function i(){V=requestAnimationFrame(function(){O.forEach(function(t){if(typeof t=="function")t();else{var o=t.element,s=t.prop,u=t.value;o.style[s]=u}}),O.splice(0,O.length),i()})};nt();var x=function(t,o){O.push({element:t,prop:"transitionDuration",value:o})},L=function(t,o){O.push({element:t,prop:"transitionTimingFunction",value:o})},M=function(t,o){O.push({element:t,prop:"transform",value:o})},F=function(t,o){O.push({element:t,prop:"opacity",value:o})},it=function(t,o){O.push({element:t,prop:"transformOrigin",value:o})},X=function(t,o,s,u){return t.addEventListener(o,s,u)},Y=function(t,o,s,u){return t.removeEventListener(o,s,u)},st=function(){var t;y=$(r,".atropos-shadow"),y||(y=document.createElement("span"),y.classList.add("atropos-shadow"),t=!0),M(y,"translate3d(0,0,-"+e.shadowOffset+"px) scale("+e.shadowScale+")"),t&&w.appendChild(y)},ut=function(){var t;p=$(r,".atropos-highlight"),p||(p=document.createElement("span"),p.classList.add("atropos-highlight"),t=!0),M(p,"translate3d(0,0,0)"),t&&z.appendChild(p)},H=function(t){var o=t.rotateXPercentage,s=o===void 0?0:o,u=t.rotateYPercentage,f=u===void 0?0:u,d=t.duration,A=t.opacityOnly,D=t.easeOut,S=function(h){if(h.dataset.atroposOpacity&&typeof h.dataset.atroposOpacity=="string")return h.dataset.atroposOpacity.split(";").map(function(P){return parseFloat(P)})};Pt(T,"[data-atropos-offset], [data-atropos-opacity]").forEach(function(v){x(v,d),L(v,D?"ease-out":"");var h=S(v);if(s===0&&f===0)A||M(v,"translate3d(0, 0, 0)"),h&&F(v,h[0]);else{var P=parseFloat(v.dataset.atroposOffset)/100;if(!Number.isNaN(P)&&!A&&M(v,"translate3d("+-f*-P+"%, "+s*-P+"%, 0)"),h){var Z=h[0],U=h[1],j=Math.max(Math.abs(s),Math.abs(f));F(v,Z+(U-Z)*j/100)}}})},Q=function(t,o){var s=r!==a;if(R||(R=r.getBoundingClientRect()),s&&!C&&(C=a.getBoundingClientRect()),typeof t>"u"&&typeof o>"u"){var u=s?C:R;t=u.left+u.width/2,o=u.top+u.height/2}var f=0,d=0,A=R,D=A.top,S=A.left,v=A.width,h=A.height,P;if(s){var B=C,rt=B.top,at=B.left,dt=B.width,vt=B.height,ht=S-at,mt=D-rt,yt=v/2+ht,gt=h/2+mt,Ot=t-at,Mt=o-rt;d=e.rotateYMax*(Ot-yt)/(dt-v/2)*-1,f=e.rotateXMax*(Mt-gt)/(vt-h/2),P=t-S+"px "+(o-D)+"px"}else{var Z=v/2,U=h/2,j=t-S,lt=o-D;d=e.rotateYMax*(j-Z)/(v/2)*-1,f=e.rotateXMax*(lt-U)/(h/2)}f=Math.min(Math.max(-f,-e.rotateXMax),e.rotateXMax),e.rotateXInvert&&(f=-f),d=Math.min(Math.max(-d,-e.rotateYMax),e.rotateYMax),e.rotateYInvert&&(d=-d);var I=f/e.rotateXMax*100,q=d/e.rotateYMax*100,wt=(s?q/100*e.stretchX:0)*(e.rotateYInvert?-1:1),xt=(s?I/100*e.stretchY:0)*(e.rotateXInvert?-1:1),Lt=s?Math.max(Math.abs(I),Math.abs(q))/100*e.stretchZ:0;M(w,"translate3d("+wt+"%, "+-xt+"%, "+-Lt+"px) rotateX("+f+"deg) rotateY("+d+"deg)"),P&&e.commonOrigin&&it(w,P),p&&(x(p,e.duration+"ms"),L(p,"ease-out"),M(p,"translate3d("+-q*.25+"%, "+I*.25+"%, 0)"),F(p,Math.max(Math.abs(I),Math.abs(q))/100)),H({rotateXPercentage:I,rotateYPercentage:q,duration:e.duration+"ms",easeOut:!0}),typeof e.onRotate=="function"&&e.onRotate(f,d)},W=function(){O.push(function(){return r.classList.add("atropos-active")}),x(w,e.duration+"ms"),L(w,"ease-out"),M(b,"translate3d(0,0, "+e.activeOffset+"px)"),x(b,e.duration+"ms"),L(b,"ease-out"),y&&(x(y,e.duration+"ms"),L(y,"ease-out")),g.isActive=!0},N=function(t){if(E=void 0,!(t.type==="pointerdown"&&t.pointerType==="mouse")&&!(t.type==="pointerenter"&&t.pointerType!=="mouse")){if(t.type==="pointerdown"&&t.preventDefault(),G=t.clientX,J=t.clientY,e.alwaysActive){R=void 0,C=void 0;return}W(),typeof e.onEnter=="function"&&e.onEnter()}},k=function(t){E===!1&&t.cancelable&&t.preventDefault()},tt=function(t){if(!(!e.rotate||!g.isActive)){if(t.pointerType!=="mouse"){if(!e.rotateTouch)return;t.preventDefault()}var o=t.clientX,s=t.clientY,u=o-G,f=s-J;if(typeof e.rotateTouch=="string"&&(u!==0||f!==0)&&typeof E>"u"){if(u*u+f*f>=25){var d=Math.atan2(Math.abs(f),Math.abs(u))*180/Math.PI;E=e.rotateTouch==="scroll-y"?d>45:90-d>45}E===!1&&(r.classList.add("atropos-rotate-touch"),t.cancelable&&t.preventDefault())}t.pointerType!=="mouse"&&E||Q(o,s)}},_=function(t){if(R=void 0,C=void 0,!!g.isActive&&!(t&&t.type==="pointerup"&&t.pointerType==="mouse")&&!(t&&t.type==="pointerleave"&&t.pointerType!=="mouse")){if(typeof e.rotateTouch=="string"&&E&&r.classList.remove("atropos-rotate-touch"),e.alwaysActive){Q(),typeof e.onRotate=="function"&&e.onRotate(0,0),typeof e.onLeave=="function"&&e.onLeave();return}O.push(function(){return r.classList.remove("atropos-active")}),x(b,e.duration+"ms"),L(b,""),M(b,"translate3d(0,0, 0px)"),y&&(x(y,e.duration+"ms"),L(y,"")),p&&(x(p,e.duration+"ms"),L(p,""),M(p,"translate3d(0, 0, 0)"),F(p,0)),x(w,e.duration+"ms"),L(w,""),M(w,"translate3d(0,0,0) rotateX(0deg) rotateY(0deg)"),H({duration:e.duration+"ms"}),g.isActive=!1,typeof e.onRotate=="function"&&e.onRotate(0,0),typeof e.onLeave=="function"&&e.onLeave()}},et=function(t){var o=t.target;!a.contains(o)&&o!==a&&g.isActive&&_()},ft=function(){typeof r=="string"&&(r=$(document,r)),r&&(r.__atropos__||(typeof a<"u"?typeof a=="string"&&(a=$(document,a)):a=r,T=m?r.parentNode.host:r,Object.assign(g,{el:r}),w=$(r,".atropos-rotate"),b=$(r,".atropos-scale"),z=$(r,".atropos-inner"),r.__atropos__=g))},ct=function(){ft(),!(!r||!a)&&(e.shadow&&st(),e.highlight&&ut(),e.rotateTouch&&(typeof e.rotateTouch=="string"?r.classList.add("atropos-rotate-touch-"+e.rotateTouch):r.classList.add("atropos-rotate-touch")),$(T,"[data-atropos-opacity]")&&H({opacityOnly:!0}),X(document,"click",et),X(a,"pointerdown",N),X(a,"pointerenter",N),X(a,"pointermove",tt),X(a,"touchmove",k),X(a,"pointerleave",_),X(a,"pointerup",_),X(a,"lostpointercapture",_),e.alwaysActive&&(W(),Q()))},pt=function(){g.destroyed=!0,cancelAnimationFrame(V),Y(document,"click",et),Y(a,"pointerdown",N),Y(a,"pointerenter",N),Y(a,"pointermove",tt),Y(a,"touchmove",k),Y(a,"pointerleave",_),Y(a,"pointerup",_),Y(a,"lostpointercapture",_),delete r.__atropos__};return g.destroy=pt,ct(),g}$t({el:".my-atropos",shadow:!1,shadowOffset:!1});const ot=document.querySelector(".cursor"),Tt=l=>{const{clientX:n,clientY:r}=l;ot.style.left=n+"px",ot.style.top=r+"px"};window.addEventListener("mousemove",Tt);