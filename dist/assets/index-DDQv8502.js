import{aC as ge,f as pe}from"./index-DjJz4vr4.js";var M={};(function(p){Object.defineProperty(p,"__esModule",{value:!0});var T=pe;function _(e){if(e&&e.__esModule)return e;var n=Object.create(null);return e&&Object.keys(e).forEach(function(t){if(t!=="default"){var i=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,i.get?i:{enumerable:!0,get:function(){return e[t]}})}}),n.default=e,Object.freeze(n)}var a=_(T);/*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */var f=function(){return f=Object.assign||function(n){for(var t,i=1,d=arguments.length;i<d;i++){t=arguments[i];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(n[l]=t[l])}return n},f.apply(this,arguments)},G=function(e){var n=e.bgColor,t=n===void 0?"#6a1b9a":n,i=e.height,d=i===void 0?"20px":i,l=e.width,H=l===void 0?"100%":l,h=e.borderRadius,J=h===void 0?"50px":h,y=e.labelAlignment,r=y===void 0?"right":y,C=e.baseBgColor,K=C===void 0?"#e0e0de":C,x=e.labelColor,Q=x===void 0?"#fff":x,N=e.labelSize,U=N===void 0?"15px":N,O=e.isLabelVisible,Y=O===void 0?!0:O,S=e.dir,Z=S===void 0?"ltr":S,w=e.ariaValuemin,$=w===void 0?0:w,j=e.ariaValuemax,ee=j===void 0?100:j,E=e.ariaValuetext,R=E===void 0?null:E,A=e.maxCompleted,te=A===void 0?100:A,P=e.animateOnRender,v=P===void 0?!1:P,V=e.initCompletedOnAnimation,b=V===void 0?0:V,F=e.isIndeterminate,o=F===void 0?!1:F,u=e.completed,ne=e.margin,ie=e.padding,ae=e.customLabelStyles,re=e.transitionDuration,le=e.transitionTimingFunction,L=e.className,I=e.customLabel,W=e.barContainerClassName,z=e.completedClassName,m=e.labelClassName,oe=function(s){return s==="left"?"flex-start":s==="center"?"center":s==="right"?"flex-end":null},B=oe(r),D=typeof b=="number"?"".concat(b,"%"):b,se=function(s,be){if(s){var q=Number(be)/s;return q>1?"100%":"".concat(q*100,"%")}return D},g=se(te,u),X=a.useState(D),de=X[0],ue=X[1],me={height:d,background:K,borderRadius:J,padding:ie,width:H,margin:ne,overflow:"hidden"},ce={height:d,width:o?"100%":v?de:g,background:t,transition:o?"none":"width ".concat(re||"1s"," ").concat(le||"ease-in-out"),borderRadius:"inherit",display:"flex",alignItems:"center",justifyContent:r!=="outside"&&B?B:"normal",animation:o?"indeterminate 1.5s infinite linear":"none"},k=f({padding:r==="outside"?"0 0 0 5px":"5px",color:Q,fontWeight:"bold",fontSize:U,display:Y?"initial":"none"},ae),fe={display:r==="outside"?"flex":"initial",alignItems:r==="outside"?"center":"initial"},ve=typeof u=="number"?"".concat(u,"%"):"".concat(u),c=I||ve;return a.useEffect(function(){v&&!o&&requestAnimationFrame(function(){return ue(g)})},[g,v,o]),a.createElement("div",{style:L?void 0:fe,className:L,dir:Z,role:"progressbar","aria-valuenow":o?void 0:parseFloat(c),"aria-valuemin":$,"aria-valuemax":ee,"aria-valuetext":"".concat(R===null?c:R)},a.createElement("div",{style:W?void 0:me,className:W},a.createElement("div",{style:z?void 0:ce,className:z},r!=="outside"&&a.createElement("span",{style:m?void 0:k,className:m},c))),r==="outside"&&a.createElement("span",{style:m?void 0:k,className:m},c),a.createElement("style",null,`
          @keyframes indeterminate {
            0% {
              width: 30%;
              transform: translateX(-50%);
            }
            50% {
              width: 30%;
              transform: translateX(250%);
            }
            100% {
              width: 30%;
              transform: translateX(-50%);
            }
          }
        `))};p.default=G})(M);const ye=ge(M);export{ye as P};
