import{e as te,s as h,d as F,j as p,r as o,$ as k,f as B,b as ne,h as oe,i as G,k as re,l as ae,m as ce,n as ie,_ as y,o as se,p as C,q as le,t as ue,u as de,v as fe,w as pe,x as $e,U as me,Z as be,F as he,a as j,y as ve,z as xe,B as ge}from"./index-21f0753e.js";const yt=te("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),Te=h.section`
  width: 100%;
  height: 100%;

  border: solid .1rem ${e=>e.theme.border.primary};
  border-radius: .6rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 .4rem .8rem 0 rgba(0, 0, 0, 0.025);
`,ye=h.header`
  padding: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Ce=h.h2`
  font-size: 1.8rem;
  font-weight: 400;
  color: ${e=>e.theme.text.title};
`,Ee=h.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${e=>e.theme.text.subtitle};
`,we=h.button`
  outline: none;
  background: none;
  position: relative;
  overflow: hidden;

  border: solid .1rem ${e=>e.theme.border.primary};
  padding: 1.1rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: ${e=>e.theme.colors.icon};
  transition: .2s ease-in-out;

  &:hover {
    background: ${e=>F(.98,e.theme.colors.ripple)};
  }
`,Pe=h.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`,_e=h.div`
  width: 100%;
  height: .1rem;
  background: ${e=>e.theme.border.primary};
`,Ae=h.div`
  width: 100%;
  flex: 1;
  position: relative;
`;function Re({children:e}){return p(ye,{children:e})}function Oe(e,n){return o.useReducer((t,r)=>{const a=n[t][r];return a??t},e)}const I=e=>{const{present:n,children:t}=e,r=Ne(n),a=typeof t=="function"?t({present:r.isPresent}):o.Children.only(t),i=k(r.ref,a.ref);return typeof t=="function"||r.isPresent?o.cloneElement(a,{ref:i}):null};I.displayName="Presence";function Ne(e){const[n,t]=o.useState(),r=o.useRef({}),a=o.useRef(e),i=o.useRef("none"),l=e?"mounted":"unmounted",[f,c]=Oe(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return o.useEffect(()=>{const u=O(r.current);i.current=f==="mounted"?u:"none"},[f]),B(()=>{const u=r.current,s=a.current;if(s!==e){const m=i.current,$=O(u);e?c("MOUNT"):$==="none"||(u==null?void 0:u.display)==="none"?c("UNMOUNT"):c(s&&m!==$?"ANIMATION_OUT":"UNMOUNT"),a.current=e}},[e,c]),B(()=>{if(n){const u=d=>{const $=O(r.current).includes(d.animationName);d.target===n&&$&&ne.flushSync(()=>c("ANIMATION_END"))},s=d=>{d.target===n&&(i.current=O(r.current))};return n.addEventListener("animationstart",s),n.addEventListener("animationcancel",u),n.addEventListener("animationend",u),()=>{n.removeEventListener("animationstart",s),n.removeEventListener("animationcancel",u),n.removeEventListener("animationend",u)}}else c("ANIMATION_END")},[n,c]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:o.useCallback(u=>{u&&(r.current=getComputedStyle(u)),t(u)},[])}}function O(e){return(e==null?void 0:e.animationName)||"none"}const[N,De]=oe("Tooltip",[G]),D=G(),Me="TooltipProvider",ke=700,M="tooltip.open",[Ie,L]=N(Me),Y=e=>{const{__scopeTooltip:n,delayDuration:t=ke,skipDelayDuration:r=300,disableHoverableContent:a=!1,children:i}=e,[l,f]=o.useState(!0),c=o.useRef(!1),u=o.useRef(0);return o.useEffect(()=>{const s=u.current;return()=>window.clearTimeout(s)},[]),o.createElement(Ie,{scope:n,isOpenDelayed:l,delayDuration:t,onOpen:o.useCallback(()=>{window.clearTimeout(u.current),f(!1)},[]),onClose:o.useCallback(()=>{window.clearTimeout(u.current),u.current=window.setTimeout(()=>f(!0),r)},[r]),isPointerInTransitRef:c,onPointerInTransitChange:o.useCallback(s=>{c.current=s},[]),disableHoverableContent:a},i)},H="Tooltip",[Le,R]=N(H),q=e=>{const{__scopeTooltip:n,children:t,open:r,defaultOpen:a=!1,onOpenChange:i,disableHoverableContent:l,delayDuration:f}=e,c=L(H,e.__scopeTooltip),u=D(n),[s,d]=o.useState(null),m=re(),$=o.useRef(0),b=l??c.disableHoverableContent,x=f??c.delayDuration,v=o.useRef(!1),[T=!1,g]=ae({prop:r,defaultProp:a,onChange:U=>{U?(c.onOpen(),document.dispatchEvent(new CustomEvent(M))):c.onClose(),i==null||i(U)}}),E=o.useMemo(()=>T?v.current?"delayed-open":"instant-open":"closed",[T]),w=o.useCallback(()=>{window.clearTimeout($.current),v.current=!1,g(!0)},[g]),P=o.useCallback(()=>{window.clearTimeout($.current),g(!1)},[g]),S=o.useCallback(()=>{window.clearTimeout($.current),$.current=window.setTimeout(()=>{v.current=!0,g(!0)},x)},[x,g]);return o.useEffect(()=>()=>window.clearTimeout($.current),[]),o.createElement(ce,u,o.createElement(Le,{scope:n,contentId:m,open:T,stateAttribute:E,trigger:s,onTriggerChange:d,onTriggerEnter:o.useCallback(()=>{c.isOpenDelayed?S():w()},[c.isOpenDelayed,S,w]),onTriggerLeave:o.useCallback(()=>{b?P():window.clearTimeout($.current)},[P,b]),onOpen:w,onClose:P,disableHoverableContent:b},t))},z="TooltipTrigger",K=o.forwardRef((e,n)=>{const{__scopeTooltip:t,...r}=e,a=R(z,t),i=L(z,t),l=D(t),f=o.useRef(null),c=k(n,f,a.onTriggerChange),u=o.useRef(!1),s=o.useRef(!1),d=o.useCallback(()=>u.current=!1,[]);return o.useEffect(()=>()=>document.removeEventListener("pointerup",d),[d]),o.createElement(ie,y({asChild:!0},l),o.createElement(se.button,y({"aria-describedby":a.open?a.contentId:void 0,"data-state":a.stateAttribute},r,{ref:c,onPointerMove:C(e.onPointerMove,m=>{m.pointerType!=="touch"&&!s.current&&!i.isPointerInTransitRef.current&&(a.onTriggerEnter(),s.current=!0)}),onPointerLeave:C(e.onPointerLeave,()=>{a.onTriggerLeave(),s.current=!1}),onPointerDown:C(e.onPointerDown,()=>{u.current=!0,document.addEventListener("pointerup",d,{once:!0})}),onFocus:C(e.onFocus,()=>{u.current||a.onOpen()}),onBlur:C(e.onBlur,a.onClose),onClick:C(e.onClick,a.onClose)})))}),V="TooltipPortal",[He,Se]=N(V,{forceMount:void 0}),X=e=>{const{__scopeTooltip:n,forceMount:t,children:r,container:a}=e,i=R(V,n);return o.createElement(He,{scope:n,forceMount:t},o.createElement(I,{present:t||i.open},o.createElement(le,{asChild:!0,container:a},r)))},A="TooltipContent",Z=o.forwardRef((e,n)=>{const t=Se(A,e.__scopeTooltip),{forceMount:r=t.forceMount,side:a="top",...i}=e,l=R(A,e.__scopeTooltip);return o.createElement(I,{present:r||l.open},l.disableHoverableContent?o.createElement(W,y({side:a},i,{ref:n})):o.createElement(Ue,y({side:a},i,{ref:n})))}),Ue=o.forwardRef((e,n)=>{const t=R(A,e.__scopeTooltip),r=L(A,e.__scopeTooltip),a=o.useRef(null),i=k(n,a),[l,f]=o.useState(null),{trigger:c,onClose:u}=t,s=a.current,{onPointerInTransitChange:d}=r,m=o.useCallback(()=>{f(null),d(!1)},[d]),$=o.useCallback((b,x)=>{const v=b.currentTarget,T={x:b.clientX,y:b.clientY},g=Fe(T,v.getBoundingClientRect()),E=Ge(T,g),w=Ye(x.getBoundingClientRect()),P=Ke([...E,...w]);f(P),d(!0)},[d]);return o.useEffect(()=>()=>m(),[m]),o.useEffect(()=>{if(c&&s){const b=v=>$(v,s),x=v=>$(v,c);return c.addEventListener("pointerleave",b),s.addEventListener("pointerleave",x),()=>{c.removeEventListener("pointerleave",b),s.removeEventListener("pointerleave",x)}}},[c,s,$,m]),o.useEffect(()=>{if(l){const b=x=>{const v=x.target,T={x:x.clientX,y:x.clientY},g=(c==null?void 0:c.contains(v))||(s==null?void 0:s.contains(v)),E=!qe(T,l);g?m():E&&(m(),u())};return document.addEventListener("pointermove",b),()=>document.removeEventListener("pointermove",b)}},[c,s,l,u,m]),o.createElement(W,y({},e,{ref:i}))}),[Be,je]=N(H,{isInside:!1}),W=o.forwardRef((e,n)=>{const{__scopeTooltip:t,children:r,"aria-label":a,onEscapeKeyDown:i,onPointerDownOutside:l,...f}=e,c=R(A,t),u=D(t),{onClose:s}=c;return o.useEffect(()=>(document.addEventListener(M,s),()=>document.removeEventListener(M,s)),[s]),o.useEffect(()=>{if(c.trigger){const d=m=>{const $=m.target;$!=null&&$.contains(c.trigger)&&s()};return window.addEventListener("scroll",d,{capture:!0}),()=>window.removeEventListener("scroll",d,{capture:!0})}},[c.trigger,s]),o.createElement(ue,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:i,onPointerDownOutside:l,onFocusOutside:d=>d.preventDefault(),onDismiss:s},o.createElement(de,y({"data-state":c.stateAttribute},u,f,{ref:n,style:{...f.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"}}),o.createElement(fe,null,r),o.createElement(Be,{scope:t,isInside:!0},o.createElement(pe,{id:c.contentId,role:"tooltip"},a||r))))}),ze="TooltipArrow",J=o.forwardRef((e,n)=>{const{__scopeTooltip:t,...r}=e,a=D(t);return je(ze,t).isInside?null:o.createElement($e,y({},a,r,{ref:n}))});function Fe(e,n){const t=Math.abs(n.top-e.y),r=Math.abs(n.bottom-e.y),a=Math.abs(n.right-e.x),i=Math.abs(n.left-e.x);switch(Math.min(t,r,a,i)){case i:return"left";case a:return"right";case t:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function Ge(e,n,t=5){const r=[];switch(n){case"top":r.push({x:e.x-t,y:e.y+t},{x:e.x+t,y:e.y+t});break;case"bottom":r.push({x:e.x-t,y:e.y-t},{x:e.x+t,y:e.y-t});break;case"left":r.push({x:e.x+t,y:e.y-t},{x:e.x+t,y:e.y+t});break;case"right":r.push({x:e.x-t,y:e.y-t},{x:e.x-t,y:e.y+t});break}return r}function Ye(e){const{top:n,right:t,bottom:r,left:a}=e;return[{x:a,y:n},{x:t,y:n},{x:t,y:r},{x:a,y:r}]}function qe(e,n){const{x:t,y:r}=e;let a=!1;for(let i=0,l=n.length-1;i<n.length;l=i++){const f=n[i].x,c=n[i].y,u=n[l].x,s=n[l].y;c>r!=s>r&&t<(u-f)*(r-c)/(s-c)+f&&(a=!a)}return a}function Ke(e){const n=e.slice();return n.sort((t,r)=>t.x<r.x?-1:t.x>r.x?1:t.y<r.y?-1:t.y>r.y?1:0),Ve(n)}function Ve(e){if(e.length<=1)return e.slice();const n=[];for(let r=0;r<e.length;r++){const a=e[r];for(;n.length>=2;){const i=n[n.length-1],l=n[n.length-2];if((i.x-l.x)*(a.y-l.y)>=(i.y-l.y)*(a.x-l.x))n.pop();else break}n.push(a)}n.pop();const t=[];for(let r=e.length-1;r>=0;r--){const a=e[r];for(;t.length>=2;){const i=t[t.length-1],l=t[t.length-2];if((i.x-l.x)*(a.y-l.y)>=(i.y-l.y)*(a.x-l.x))t.pop();else break}t.push(a)}return t.pop(),n.length===1&&t.length===1&&n[0].x===t[0].x&&n[0].y===t[0].y?n:n.concat(t)}const Xe=Y,Ze=q,Q=K,We=X,ee=Z,Je=J,Qe=Object.freeze(Object.defineProperty({__proto__:null,Arrow:Je,Content:ee,Portal:We,Provider:Xe,Root:Ze,Tooltip:q,TooltipArrow:J,TooltipContent:Z,TooltipPortal:X,TooltipProvider:Y,TooltipTrigger:K,Trigger:Q,createTooltipScope:De},Symbol.toStringTag,{value:"Module"})),et=me`
  from {
    opacity: 0;
    transform: translateY(-.2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,tt=h(ee)`
  border-radius: .4rem;
  padding: 1rem 1.5rem;
  font-size: 1.5rem;
  color: ${e=>e.theme.text.subtitle};
  background-color: ${e=>e.theme.bg.primary};
  border: solid .1rem ${e=>e.theme.border.primary};
  box-shadow: 0 .4rem .8rem 0 rgba(0, 0, 0, 0.04);
  user-select: none;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  animation-name: ${et};
  will-change: transform, opacity;
  margin-bottom: 1rem;
`,nt=h(Q)`
  background: none;
  border: none;
  outline: none;
`;function ot({children:e}){return p(tt,{children:e})}function rt({children:e}){return p(nt,{children:e})}const _={...Qe,Content:ot,Trigger:rt};function at({children:e,icon:n,label:t,...r}){const{colors:a}=be();return p(he,{children:p(_.Provider,{children:j(_.Root,{delayDuration:100,children:[p(_.Trigger,{children:j(we,{...r,children:[p(n,{size:16,color:a.icon}),p(ve,{duration:1e3,color:a.ripple})]})}),p(_.Portal,{children:p(_.Content,{sideOffset:5,children:t})})]})})})}function ct({children:e}){return p(Pe,{children:e})}function it({children:e}){return p(Ee,{children:e})}function st({children:e}){return p(Ce,{children:e})}function lt({children:e}){return p(Te,{children:e})}function ut(){return p(_e,{})}function dt({children:e}){return p(Ae,{children:e})}const Ct={Root:lt,Column:ct,Header:Re,Title:st,Subtitle:it,Action:at,Separator:ut,Content:dt},ft={fade:{initial:{opacity:0,y:"7%"},animate:{opacity:1,y:"0%",transition:{duration:.3}},exit:{opacity:0,y:"7%"}}},pt=h(xe.div)`
  width: 102.1rem;
  flex: 1;
`;function Et({children:e,...n}){return p(pt,{...n,...ft.fade,children:e})}function $t({children:e}){return p(ge,{variant:"primary",children:e})}const mt=h.div`
  width: 100%;
  background: ${e=>F(.89,e.theme.colors.primary)};
  border-radius: .6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
`,bt=h.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`,ht=h.h3`
  font-size: 2rem;
  font-weight: 400;
  color: ${e=>e.theme.text.title};
`;function vt({children:e}){return p(bt,{children:e})}function xt({children:e}){return p(mt,{children:e})}function gt({children:e}){return p(ht,{children:e})}const wt={Root:xt,Header:vt,Title:gt,Action:$t};export{wt as B,Et as C,yt as P,Ct as a};
