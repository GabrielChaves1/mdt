import{c as ge,s as E,C as an,r as c,j as O,a as g,B as ln,b as re,Z as Ue,d as S,m as ht,_ as N,e as Xe,$ as dn,f as fn,U as un,F as pn,g as we}from"./index-b704f29e.js";import{P as mn}from"./plus-464a9d22.js";const hn=ge("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),gn=ge("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),vn=ge("SendHorizonal",[["path",{d:"m3 3 3 9-3 9 19-9Z",key:"1aobqy"}],["path",{d:"M6 12h16",key:"s4cdu5"}]]),bn=ge("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),yn=ge("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]),xn=E(an)`
  display: grid;
  grid-template-areas: 
  'banner  stats'
  'warns   players'
  'warns   chat'
  'widget  chat';
  grid-template-columns: 65.6rem 34.5rem;
  grid-template-rows: 16.5rem 8.5rem auto 24.5rem;
  gap: 2rem;
`,$n=E.div`
  display: flex;
  grid-area: stats;
  gap: 2rem;
`,nt=E.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .2rem;
  flex: 1;
  height: 100%;
  border-radius: .6rem;
  border: solid .1rem ${e=>e.theme.border.primary};
  box-shadow: 0 .4rem .8rem 0 rgba(0, 0, 0, 0.025);

  h1 {
    font-size: 1.8rem;
    font-weight: 500;
    color: ${e=>e.theme.colors.primary};
  }

  span {
    font-size: 3rem;
    font-weight: 800;
    color: ${e=>e.theme.colors.primary};
  }
`;E.div`
  grid-area: warns;
  position: relative;
`;E.div`
  grid-area: graphic;
`;E.div`
  width: 100%;
  border: solid .1rem ${e=>e.theme.border.primary};
  border-radius: .6rem;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 .4rem .8rem 0 rgba(0, 0, 0, 0.025);

  p {
    font-size: 1.4rem;
    color: ${e=>e.theme.text.subtitle};
  }

  span {
    width: .8rem;
    height: .8rem;
    border-radius: 50%;
    background: ${e=>e.theme.colors.primary};
  }
`;const wn=E.div`
  padding: 1.5rem;
  max-height: 26.55rem;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Cn=E.div`
  width: 100%;
  border: solid .1rem ${e=>e.theme.border.primary};
  border-radius: .6rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,En=E.p`
  color: ${e=>e.theme.text.title};
  font-size: 1.4rem;
  font-weight: 400;
`,Pn=E.span`
  color: ${e=>e.theme.text.subtitle};
  font-size: 1.2rem;
  font-weight: 400;
`,Tn=E.div`
  display: flex;
  flex-direction: column;
`;function An(){return O(Cn,{children:[O(Tn,{children:[g(En,{children:"Não se esqueçam de aplicar multa na prisão!"}),g(Pn,{children:"Autor: John Doe"})]}),g(ln,{size:"sm",children:"Ver mais"})]})}const de=c.memo(An),On=E.div`
  display: flex;
  flex-direction: column;
  gap: .4rem;
`,Rn=E.div`
  display: flex;
  flex-direction: column;
  gap: .2rem;
  padding: 1rem;
  width: max-content;
  border-radius: .7rem .7rem .7rem 0;
  background: ${({theme:e})=>re(.85,e.colors.primary)};
`,Sn=E.p`
  font-size: 1.2rem;
  font-weight: 300;
  color: ${({theme:e})=>e.text.subtitle};
  user-select: text;
`,Dn=E.p`
  font-size: 1.4rem;
  font-weight: 300;
  color: ${({theme:e})=>e.text.title};
  user-select: text;
`,Mn=E.time`
  font-size: 1.2rem;
  font-weight: 300;
  color: ${({theme:e})=>e.text.subtitle};
  user-select: text;
`;function _n(){return O(On,{children:[O(Rn,{children:[g(Sn,{children:"John Doe"}),g(Dn,{children:"Boa tarde pessoal!"})]}),g(Mn,{children:"Hoje ás 16:35"})]})}const Ie=c.memo(_n),kn=E.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`,Ln=E.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 2.5rem;
  height: 31.5rem;
  overflow-y: auto;
  position: relative;
`,Nn=E.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.4rem 2.5rem;
`,Hn=E.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 1.2rem;
  border: solid .1rem ${({theme:e})=>e.border.primary};
  border-radius: .6rem;
  width: 100%;
`,In=E.input`
  background: none;
  border: none;
  outline: none;
  flex: 1;
  color: ${({theme:e})=>e.text.title};
  font-size: 1.4rem;
  font-weight: 300;
  
  &::placeholder {
    color: ${({theme:e})=>re(.6,e.text.title)}
  }
`,zn=E.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  outline: none;
`;function Fn(){const{colors:e}=Ue();return O(S.Root,{children:[g(S.Header,{children:O(S.Column,{children:[g(S.Title,{children:"Chat Geral"}),g(S.Subtitle,{children:"Bate-papo geral da policia"})]})}),g(S.Separator,{}),g(S.Content,{children:O(kn,{children:[O(Ln,{children:[g(Ie,{}),g(Ie,{}),g(Ie,{})]}),g(S.Separator,{}),g(Nn,{children:O(Hn,{children:[g(In,{placeholder:"Mensagem..."}),g(zn,{children:g(vn,{color:e.primary})})]})})]})})]})}const Bn=E(ht.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${({theme:e})=>re(.1,e.bg.primary)};
  z-index: 5;
  left: 0;
  top: 0;
  
  display: grid;
  place-items: center;
`,Wn=E(ht.div)`
  width: 64.2rem;
  padding: 2rem;
  background: ${({theme:e})=>e.bg.primary};
  border-radius: .6rem;
  border: solid .1rem ${({theme:e})=>e.border.primary};
  box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  z-index: 6;
`,Vn=E.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`,jn=E.div`
  position: relative;
  width: 100%;
  flex: 1;
`,Un=E.div`
  display: flex;
  flex-direction: column;
  gap: .4rem;
`,Xn=E.button`
  position: absolute;
  right: 2rem;
  top: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  z-index: 2;
`,Yn=E.h3`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({theme:e})=>e.text.title};
`,qn=E.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({theme:e})=>e.text.subtitle};
`;function Gn({children:e}){return g(jn,{children:e})}function Zn({children:e}){return g(Vn,{children:g(Un,{children:e})})}const Kn=({children:e,onOpen:t},n)=>{const{colors:o}=Ue(),[r,i]=c.useState(!1),s=c.useCallback(()=>{t&&t(),i(!0)},[]),l=c.useCallback(()=>{i(!1)},[]);return c.useImperativeHandle(n,()=>({openModal:s,closeModal:l})),r?g(Bn,{transition:{duration:.2},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:O(Wn,{transition:{duration:.2,delay:.1},initial:{opacity:0,scale:.6},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.6},children:[g(Xn,{onClick:l,children:g(yn,{size:"2rem",color:o.icon})}),e]})}):null},Jn=c.forwardRef(Kn);function Qn({children:e}){return g(qn,{children:e})}function eo({children:e}){return g(Yn,{children:e})}const fe={Root:Jn,Header:Zn,Title:eo,Subtitle:Qn,Content:Gn},to=E.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  max-height: 50rem;
  overflow: auto;
`,no=E.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  cursor: pointer;
`,oo=E.div`
  width: 100%;
  display: flex;
  padding: 1rem 1.3rem;
  justify-content: space-between;
  align-items: center;
  border-radius: .6rem;
  border: .1rem solid ${({theme:e})=>e.border.primary};
`,ro=E.p`
  color: ${({theme:e})=>e.text.title};
  font-size: 1.4rem;
  font-weight: 400;
`,io=E.span`
  padding: .5rem 1rem;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({theme:e})=>e.text.title};
  border-radius: 3rem;
  background: ${({theme:e})=>re(.8,e.colors.primary)};
`;E.button`
  width: 3.3rem;
  height: 3.3rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: solid .1rem ${({theme:e})=>e.border.primary};
  background: none;
  position: relative;
  overflow: hidden;
`;const so=E.button`
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
  transition: .1s ease-in-out;
  box-shadow: 0 .2rem .4rem rgba(0,0,0,.3);

  &:hover {
    background: ${e=>re(.98,e.theme.colors.ripple)};
  }

  &:active {
    background: ${e=>re(.92,e.theme.colors.ripple)};
  }
`;function V(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e==null||e(r),n===!1||!r.defaultPrevented)return t==null?void 0:t(r)}}function co(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function gt(...e){return t=>e.forEach(n=>co(n,t))}function ce(...e){return c.useCallback(gt(...e),e)}function vt(e,t=[]){let n=[];function o(i,s){const l=c.createContext(s),a=n.length;n=[...n,s];function d(u){const{scope:m,children:p,...h}=u,v=(m==null?void 0:m[e][a])||l,b=c.useMemo(()=>h,Object.values(h));return c.createElement(v.Provider,{value:b},p)}function f(u,m){const p=(m==null?void 0:m[e][a])||l,h=c.useContext(p);if(h)return h;if(s!==void 0)return s;throw new Error(`\`${u}\` must be used within \`${i}\``)}return d.displayName=i+"Provider",[d,f]}const r=()=>{const i=n.map(s=>c.createContext(s));return function(l){const a=(l==null?void 0:l[e])||i;return c.useMemo(()=>({[`__scope${e}`]:{...l,[e]:a}}),[l,a])}};return r.scopeName=e,[o,ao(r,...t)]}function ao(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(i){const s=o.reduce((l,{useScope:a,scopeName:d})=>{const u=a(i)[`__scope${d}`];return{...l,...u}},{});return c.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}const bt=c.forwardRef((e,t)=>{const{children:n,...o}=e,r=c.Children.toArray(n),i=r.find(lo);if(i){const s=i.props.children,l=r.map(a=>a===i?c.Children.count(s)>1?c.Children.only(null):c.isValidElement(s)?s.props.children:null:a);return c.createElement(ze,N({},o,{ref:t}),c.isValidElement(s)?c.cloneElement(s,void 0,l):null)}return c.createElement(ze,N({},o,{ref:t}),n)});bt.displayName="Slot";const ze=c.forwardRef((e,t)=>{const{children:n,...o}=e;return c.isValidElement(n)?c.cloneElement(n,{...fo(o,n.props),ref:t?gt(t,n.ref):n.ref}):c.Children.count(n)>1?c.Children.only(null):null});ze.displayName="SlotClone";const yt=({children:e})=>c.createElement(c.Fragment,null,e);function lo(e){return c.isValidElement(e)&&e.type===yt}function fo(e,t){const n={...t};for(const o in t){const r=e[o],i=t[o];/^on[A-Z]/.test(o)?r&&i?n[o]=(...l)=>{i(...l),r(...l)}:r&&(n[o]=r):o==="style"?n[o]={...r,...i}:o==="className"&&(n[o]=[r,i].filter(Boolean).join(" "))}return{...e,...n}}const uo=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Q=uo.reduce((e,t)=>{const n=c.forwardRef((o,r)=>{const{asChild:i,...s}=o,l=i?bt:t;return c.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),c.createElement(l,N({},s,{ref:r}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function po(e,t){e&&Xe.flushSync(()=>e.dispatchEvent(t))}function ae(e){const t=c.useRef(e);return c.useEffect(()=>{t.current=e}),c.useMemo(()=>(...n)=>{var o;return(o=t.current)===null||o===void 0?void 0:o.call(t,...n)},[])}function mo(e,t=globalThis==null?void 0:globalThis.document){const n=ae(e);c.useEffect(()=>{const o=r=>{r.key==="Escape"&&n(r)};return t.addEventListener("keydown",o),()=>t.removeEventListener("keydown",o)},[n,t])}const Fe="dismissableLayer.update",ho="dismissableLayer.pointerDownOutside",go="dismissableLayer.focusOutside";let ot;const vo=c.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),bo=c.forwardRef((e,t)=>{var n;const{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:r,onPointerDownOutside:i,onFocusOutside:s,onInteractOutside:l,onDismiss:a,...d}=e,f=c.useContext(vo),[u,m]=c.useState(null),p=(n=u==null?void 0:u.ownerDocument)!==null&&n!==void 0?n:globalThis==null?void 0:globalThis.document,[,h]=c.useState({}),v=ce(t,P=>m(P)),b=Array.from(f.layers),[y]=[...f.layersWithOutsidePointerEventsDisabled].slice(-1),x=b.indexOf(y),w=u?b.indexOf(u):-1,C=f.layersWithOutsidePointerEventsDisabled.size>0,$=w>=x,T=yo(P=>{const k=P.target,L=[...f.branches].some(D=>D.contains(k));!$||L||(i==null||i(P),l==null||l(P),P.defaultPrevented||a==null||a())},p),A=xo(P=>{const k=P.target;[...f.branches].some(D=>D.contains(k))||(s==null||s(P),l==null||l(P),P.defaultPrevented||a==null||a())},p);return mo(P=>{w===f.layers.size-1&&(r==null||r(P),!P.defaultPrevented&&a&&(P.preventDefault(),a()))},p),c.useEffect(()=>{if(u)return o&&(f.layersWithOutsidePointerEventsDisabled.size===0&&(ot=p.body.style.pointerEvents,p.body.style.pointerEvents="none"),f.layersWithOutsidePointerEventsDisabled.add(u)),f.layers.add(u),rt(),()=>{o&&f.layersWithOutsidePointerEventsDisabled.size===1&&(p.body.style.pointerEvents=ot)}},[u,p,o,f]),c.useEffect(()=>()=>{u&&(f.layers.delete(u),f.layersWithOutsidePointerEventsDisabled.delete(u),rt())},[u,f]),c.useEffect(()=>{const P=()=>h({});return document.addEventListener(Fe,P),()=>document.removeEventListener(Fe,P)},[]),c.createElement(Q.div,N({},d,{ref:v,style:{pointerEvents:C?$?"auto":"none":void 0,...e.style},onFocusCapture:V(e.onFocusCapture,A.onFocusCapture),onBlurCapture:V(e.onBlurCapture,A.onBlurCapture),onPointerDownCapture:V(e.onPointerDownCapture,T.onPointerDownCapture)}))});function yo(e,t=globalThis==null?void 0:globalThis.document){const n=ae(e),o=c.useRef(!1),r=c.useRef(()=>{});return c.useEffect(()=>{const i=l=>{if(l.target&&!o.current){let d=function(){xt(ho,n,a,{discrete:!0})};const a={originalEvent:l};l.pointerType==="touch"?(t.removeEventListener("click",r.current),r.current=d,t.addEventListener("click",r.current,{once:!0})):d()}o.current=!1},s=window.setTimeout(()=>{t.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(s),t.removeEventListener("pointerdown",i),t.removeEventListener("click",r.current)}},[t,n]),{onPointerDownCapture:()=>o.current=!0}}function xo(e,t=globalThis==null?void 0:globalThis.document){const n=ae(e),o=c.useRef(!1);return c.useEffect(()=>{const r=i=>{i.target&&!o.current&&xt(go,n,{originalEvent:i},{discrete:!1})};return t.addEventListener("focusin",r),()=>t.removeEventListener("focusin",r)},[t,n]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function rt(){const e=new CustomEvent(Fe);document.dispatchEvent(e)}function xt(e,t,n,{discrete:o}){const r=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&r.addEventListener(e,t,{once:!0}),o?po(r,i):r.dispatchEvent(i)}const ie=Boolean(globalThis==null?void 0:globalThis.document)?c.useLayoutEffect:()=>{},$o=dn["useId".toString()]||(()=>{});let wo=0;function Co(e){const[t,n]=c.useState($o());return ie(()=>{e||n(o=>o??String(wo++))},[e]),e||(t?`radix-${t}`:"")}function le(e){return e.split("-")[1]}function Ye(e){return e==="y"?"height":"width"}function j(e){return e.split("-")[0]}function ee(e){return["top","bottom"].includes(j(e))?"x":"y"}function it(e,t,n){let{reference:o,floating:r}=e;const i=o.x+o.width/2-r.width/2,s=o.y+o.height/2-r.height/2,l=ee(t),a=Ye(l),d=o[a]/2-r[a]/2,f=j(t),u=l==="x";let m;switch(f){case"top":m={x:i,y:o.y-r.height};break;case"bottom":m={x:i,y:o.y+o.height};break;case"right":m={x:o.x+o.width,y:s};break;case"left":m={x:o.x-r.width,y:s};break;default:m={x:o.x,y:o.y}}switch(le(t)){case"start":m[l]-=d*(n&&u?-1:1);break;case"end":m[l]+=d*(n&&u?-1:1);break}return m}const Eo=async(e,t,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:i=[],platform:s}=n,l=i.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(t));let d=await s.getElementRects({reference:e,floating:t,strategy:r}),{x:f,y:u}=it(d,o,a),m=o,p={},h=0;for(let v=0;v<l.length;v++){const{name:b,fn:y}=l[v],{x,y:w,data:C,reset:$}=await y({x:f,y:u,initialPlacement:o,placement:m,strategy:r,middlewareData:p,rects:d,platform:s,elements:{reference:e,floating:t}});if(f=x??f,u=w??u,p={...p,[b]:{...p[b],...C}},$&&h<=50){h++,typeof $=="object"&&($.placement&&(m=$.placement),$.rects&&(d=$.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:r}):$.rects),{x:f,y:u}=it(d,m,a)),v=-1;continue}}return{x:f,y:u,placement:m,strategy:r,middlewareData:p}};function U(e,t){return typeof e=="function"?e(t):e}function Po(e){return{top:0,right:0,bottom:0,left:0,...e}}function $t(e){return typeof e!="number"?Po(e):{top:e,right:e,bottom:e,left:e}}function Ae(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function pe(e,t){var n;t===void 0&&(t={});const{x:o,y:r,platform:i,rects:s,elements:l,strategy:a}=e,{boundary:d="clippingAncestors",rootBoundary:f="viewport",elementContext:u="floating",altBoundary:m=!1,padding:p=0}=U(t,e),h=$t(p),b=l[m?u==="floating"?"reference":"floating":u],y=Ae(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(b)))==null||n?b:b.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(l.floating)),boundary:d,rootBoundary:f,strategy:a})),x=u==="floating"?{...s.floating,x:o,y:r}:s.reference,w=await(i.getOffsetParent==null?void 0:i.getOffsetParent(l.floating)),C=await(i.isElement==null?void 0:i.isElement(w))?await(i.getScale==null?void 0:i.getScale(w))||{x:1,y:1}:{x:1,y:1},$=Ae(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:x,offsetParent:w,strategy:a}):x);return{top:(y.top-$.top+h.top)/C.y,bottom:($.bottom-y.bottom+h.bottom)/C.y,left:(y.left-$.left+h.left)/C.x,right:($.right-y.right+h.right)/C.x}}const me=Math.min,K=Math.max;function Be(e,t,n){return K(e,me(t,n))}const st=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:o,placement:r,rects:i,platform:s,elements:l}=t,{element:a,padding:d=0}=U(e,t)||{};if(a==null)return{};const f=$t(d),u={x:n,y:o},m=ee(r),p=Ye(m),h=await s.getDimensions(a),v=m==="y",b=v?"top":"left",y=v?"bottom":"right",x=v?"clientHeight":"clientWidth",w=i.reference[p]+i.reference[m]-u[m]-i.floating[p],C=u[m]-i.reference[m],$=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a));let T=$?$[x]:0;(!T||!await(s.isElement==null?void 0:s.isElement($)))&&(T=l.floating[x]||i.floating[p]);const A=w/2-C/2,P=T/2-h[p]/2-1,k=me(f[b],P),L=me(f[y],P),D=k,H=T-h[p]-L,M=T/2-h[p]/2+A,_=Be(D,M,H),R=le(r)!=null&&M!=_&&i.reference[p]/2-(M<D?k:L)-h[p]/2<0?M<D?D-M:H-M:0;return{[m]:u[m]-R,data:{[m]:_,centerOffset:M-_+R}}}}),To=["top","right","bottom","left"],Ao={left:"right",right:"left",bottom:"top",top:"bottom"};function Oe(e){return e.replace(/left|right|bottom|top/g,t=>Ao[t])}function Oo(e,t,n){n===void 0&&(n=!1);const o=le(e),r=ee(e),i=Ye(r);let s=r==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(s=Oe(s)),{main:s,cross:Oe(s)}}const Ro={start:"end",end:"start"};function We(e){return e.replace(/start|end/g,t=>Ro[t])}function So(e){const t=Oe(e);return[We(e),t,We(t)]}function Do(e,t,n){const o=["left","right"],r=["right","left"],i=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return n?t?r:o:t?o:r;case"left":case"right":return t?i:s;default:return[]}}function Mo(e,t,n,o){const r=le(e);let i=Do(j(e),n==="start",o);return r&&(i=i.map(s=>s+"-"+r),t&&(i=i.concat(i.map(We)))),i}const _o=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n;const{placement:o,middlewareData:r,rects:i,initialPlacement:s,platform:l,elements:a}=t,{mainAxis:d=!0,crossAxis:f=!0,fallbackPlacements:u,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:h=!0,...v}=U(e,t),b=j(o),y=j(s)===s,x=await(l.isRTL==null?void 0:l.isRTL(a.floating)),w=u||(y||!h?[Oe(s)]:So(s));!u&&p!=="none"&&w.push(...Mo(s,h,p,x));const C=[s,...w],$=await pe(t,v),T=[];let A=((n=r.flip)==null?void 0:n.overflows)||[];if(d&&T.push($[b]),f){const{main:D,cross:H}=Oo(o,i,x);T.push($[D],$[H])}if(A=[...A,{placement:o,overflows:T}],!T.every(D=>D<=0)){var P,k;const D=(((P=r.flip)==null?void 0:P.index)||0)+1,H=C[D];if(H)return{data:{index:D,overflows:A},reset:{placement:H}};let M=(k=A.filter(_=>_.overflows[0]<=0).sort((_,I)=>_.overflows[1]-I.overflows[1])[0])==null?void 0:k.placement;if(!M)switch(m){case"bestFit":{var L;const _=(L=A.map(I=>[I.placement,I.overflows.filter(R=>R>0).reduce((R,q)=>R+q,0)]).sort((I,R)=>I[1]-R[1])[0])==null?void 0:L[0];_&&(M=_);break}case"initialPlacement":M=s;break}if(o!==M)return{reset:{placement:M}}}return{}}}};function ct(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function at(e){return To.some(t=>e[t]>=0)}const ko=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:o="referenceHidden",...r}=U(e,t);switch(o){case"referenceHidden":{const i=await pe(t,{...r,elementContext:"reference"}),s=ct(i,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:at(s)}}}case"escaped":{const i=await pe(t,{...r,altBoundary:!0}),s=ct(i,n.floating);return{data:{escapedOffsets:s,escaped:at(s)}}}default:return{}}}}};async function Lo(e,t){const{placement:n,platform:o,elements:r}=e,i=await(o.isRTL==null?void 0:o.isRTL(r.floating)),s=j(n),l=le(n),a=ee(n)==="x",d=["left","top"].includes(s)?-1:1,f=i&&a?-1:1,u=U(t,e);let{mainAxis:m,crossAxis:p,alignmentAxis:h}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return l&&typeof h=="number"&&(p=l==="end"?h*-1:h),a?{x:p*f,y:m*d}:{x:m*d,y:p*f}}const No=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:o}=t,r=await Lo(t,e);return{x:n+r.x,y:o+r.y,data:r}}}};function wt(e){return e==="x"?"y":"x"}const Ho=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:o,placement:r}=t,{mainAxis:i=!0,crossAxis:s=!1,limiter:l={fn:b=>{let{x:y,y:x}=b;return{x:y,y:x}}},...a}=U(e,t),d={x:n,y:o},f=await pe(t,a),u=ee(j(r)),m=wt(u);let p=d[u],h=d[m];if(i){const b=u==="y"?"top":"left",y=u==="y"?"bottom":"right",x=p+f[b],w=p-f[y];p=Be(x,p,w)}if(s){const b=m==="y"?"top":"left",y=m==="y"?"bottom":"right",x=h+f[b],w=h-f[y];h=Be(x,h,w)}const v=l.fn({...t,[u]:p,[m]:h});return{...v,data:{x:v.x-n,y:v.y-o}}}}},Io=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:o,placement:r,rects:i,middlewareData:s}=t,{offset:l=0,mainAxis:a=!0,crossAxis:d=!0}=U(e,t),f={x:n,y:o},u=ee(r),m=wt(u);let p=f[u],h=f[m];const v=U(l,t),b=typeof v=="number"?{mainAxis:v,crossAxis:0}:{mainAxis:0,crossAxis:0,...v};if(a){const w=u==="y"?"height":"width",C=i.reference[u]-i.floating[w]+b.mainAxis,$=i.reference[u]+i.reference[w]-b.mainAxis;p<C?p=C:p>$&&(p=$)}if(d){var y,x;const w=u==="y"?"width":"height",C=["top","left"].includes(j(r)),$=i.reference[m]-i.floating[w]+(C&&((y=s.offset)==null?void 0:y[m])||0)+(C?0:b.crossAxis),T=i.reference[m]+i.reference[w]+(C?0:((x=s.offset)==null?void 0:x[m])||0)-(C?b.crossAxis:0);h<$?h=$:h>T&&(h=T)}return{[u]:p,[m]:h}}}},zo=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:o,platform:r,elements:i}=t,{apply:s=()=>{},...l}=U(e,t),a=await pe(t,l),d=j(n),f=le(n),m=ee(n)==="x",{width:p,height:h}=o.floating;let v,b;d==="top"||d==="bottom"?(v=d,b=f===(await(r.isRTL==null?void 0:r.isRTL(i.floating))?"start":"end")?"left":"right"):(b=d,v=f==="end"?"top":"bottom");const y=h-a[v],x=p-a[b],w=!t.middlewareData.shift;let C=y,$=x;if(m){const A=p-a.left-a.right;$=f||w?me(x,A):A}else{const A=h-a.top-a.bottom;C=f||w?me(y,A):A}if(w&&!f){const A=K(a.left,0),P=K(a.right,0),k=K(a.top,0),L=K(a.bottom,0);m?$=p-2*(A!==0||P!==0?A+P:K(a.left,a.right)):C=h-2*(k!==0||L!==0?k+L:K(a.top,a.bottom))}await s({...t,availableWidth:$,availableHeight:C});const T=await r.getDimensions(i.floating);return p!==T.width||h!==T.height?{reset:{rects:!0}}:{}}}};function z(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function B(e){return z(e).getComputedStyle(e)}function Ct(e){return e instanceof z(e).Node}function G(e){return Ct(e)?(e.nodeName||"").toLowerCase():"#document"}function F(e){return e instanceof HTMLElement||e instanceof z(e).HTMLElement}function lt(e){return typeof ShadowRoot>"u"?!1:e instanceof z(e).ShadowRoot||e instanceof ShadowRoot}function ve(e){const{overflow:t,overflowX:n,overflowY:o,display:r}=B(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+n)&&!["inline","contents"].includes(r)}function Fo(e){return["table","td","th"].includes(G(e))}function qe(e){const t=Ge(),n=B(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function Ge(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Me(e){return["html","body","#document"].includes(G(e))}const Ve=Math.min,ne=Math.max,Re=Math.round,Ce=Math.floor,Z=e=>({x:e,y:e});function Et(e){const t=B(e);let n=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const r=F(e),i=r?e.offsetWidth:n,s=r?e.offsetHeight:o,l=Re(n)!==i||Re(o)!==s;return l&&(n=i,o=s),{width:n,height:o,$:l}}function X(e){return e instanceof Element||e instanceof z(e).Element}function Ze(e){return X(e)?e:e.contextElement}function oe(e){const t=Ze(e);if(!F(t))return Z(1);const n=t.getBoundingClientRect(),{width:o,height:r,$:i}=Et(t);let s=(i?Re(n.width):n.width)/o,l=(i?Re(n.height):n.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const Bo=Z(0);function Pt(e){const t=z(e);return!Ge()||!t.visualViewport?Bo:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Wo(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==z(e)?!1:t}function J(e,t,n,o){t===void 0&&(t=!1),n===void 0&&(n=!1);const r=e.getBoundingClientRect(),i=Ze(e);let s=Z(1);t&&(o?X(o)&&(s=oe(o)):s=oe(e));const l=Wo(i,n,o)?Pt(i):Z(0);let a=(r.left+l.x)/s.x,d=(r.top+l.y)/s.y,f=r.width/s.x,u=r.height/s.y;if(i){const m=z(i),p=o&&X(o)?z(o):o;let h=m.frameElement;for(;h&&o&&p!==m;){const v=oe(h),b=h.getBoundingClientRect(),y=getComputedStyle(h),x=b.left+(h.clientLeft+parseFloat(y.paddingLeft))*v.x,w=b.top+(h.clientTop+parseFloat(y.paddingTop))*v.y;a*=v.x,d*=v.y,f*=v.x,u*=v.y,a+=x,d+=w,h=z(h).frameElement}}return Ae({width:f,height:u,x:a,y:d})}function _e(e){return X(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Y(e){var t;return(t=(Ct(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Vo(e){let{rect:t,offsetParent:n,strategy:o}=e;const r=F(n),i=Y(n);if(n===i)return t;let s={scrollLeft:0,scrollTop:0},l=Z(1);const a=Z(0);if((r||!r&&o!=="fixed")&&((G(n)!=="body"||ve(i))&&(s=_e(n)),F(n))){const d=J(n);l=oe(n),a.x=d.x+n.clientLeft,a.y=d.y+n.clientTop}return{width:t.width*l.x,height:t.height*l.y,x:t.x*l.x-s.scrollLeft*l.x+a.x,y:t.y*l.y-s.scrollTop*l.y+a.y}}function jo(e){return Array.from(e.getClientRects())}function Tt(e){return J(Y(e)).left+_e(e).scrollLeft}function Uo(e){const t=Y(e),n=_e(e),o=e.ownerDocument.body,r=ne(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),i=ne(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Tt(e);const l=-n.scrollTop;return B(o).direction==="rtl"&&(s+=ne(t.clientWidth,o.clientWidth)-r),{width:r,height:i,x:s,y:l}}function se(e){if(G(e)==="html")return e;const t=e.assignedSlot||e.parentNode||lt(e)&&e.host||Y(e);return lt(t)?t.host:t}function At(e){const t=se(e);return Me(t)?e.ownerDocument?e.ownerDocument.body:e.body:F(t)&&ve(t)?t:At(t)}function Se(e,t){var n;t===void 0&&(t=[]);const o=At(e),r=o===((n=e.ownerDocument)==null?void 0:n.body),i=z(o);return r?t.concat(i,i.visualViewport||[],ve(o)?o:[]):t.concat(o,Se(o))}function Xo(e,t){const n=z(e),o=Y(e),r=n.visualViewport;let i=o.clientWidth,s=o.clientHeight,l=0,a=0;if(r){i=r.width,s=r.height;const d=Ge();(!d||d&&t==="fixed")&&(l=r.offsetLeft,a=r.offsetTop)}return{width:i,height:s,x:l,y:a}}function Yo(e,t){const n=J(e,!0,t==="fixed"),o=n.top+e.clientTop,r=n.left+e.clientLeft,i=F(e)?oe(e):Z(1),s=e.clientWidth*i.x,l=e.clientHeight*i.y,a=r*i.x,d=o*i.y;return{width:s,height:l,x:a,y:d}}function dt(e,t,n){let o;if(t==="viewport")o=Xo(e,n);else if(t==="document")o=Uo(Y(e));else if(X(t))o=Yo(t,n);else{const r=Pt(e);o={...t,x:t.x-r.x,y:t.y-r.y}}return Ae(o)}function Ot(e,t){const n=se(e);return n===t||!X(n)||Me(n)?!1:B(n).position==="fixed"||Ot(n,t)}function qo(e,t){const n=t.get(e);if(n)return n;let o=Se(e).filter(l=>X(l)&&G(l)!=="body"),r=null;const i=B(e).position==="fixed";let s=i?se(e):e;for(;X(s)&&!Me(s);){const l=B(s),a=qe(s);!a&&l.position==="fixed"&&(r=null),(i?!a&&!r:!a&&l.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||ve(s)&&!a&&Ot(e,s))?o=o.filter(f=>f!==s):r=l,s=se(s)}return t.set(e,o),o}function Go(e){let{element:t,boundary:n,rootBoundary:o,strategy:r}=e;const s=[...n==="clippingAncestors"?qo(t,this._c):[].concat(n),o],l=s[0],a=s.reduce((d,f)=>{const u=dt(t,f,r);return d.top=ne(u.top,d.top),d.right=Ve(u.right,d.right),d.bottom=Ve(u.bottom,d.bottom),d.left=ne(u.left,d.left),d},dt(t,l,r));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function Zo(e){return Et(e)}function Ko(e,t,n){const o=F(t),r=Y(t),i=n==="fixed",s=J(e,!0,i,t);let l={scrollLeft:0,scrollTop:0};const a=Z(0);if(o||!o&&!i)if((G(t)!=="body"||ve(r))&&(l=_e(t)),F(t)){const d=J(t,!0,i,t);a.x=d.x+t.clientLeft,a.y=d.y+t.clientTop}else r&&(a.x=Tt(r));return{x:s.left+l.scrollLeft-a.x,y:s.top+l.scrollTop-a.y,width:s.width,height:s.height}}function ft(e,t){return!F(e)||B(e).position==="fixed"?null:t?t(e):e.offsetParent}function Jo(e){let t=se(e);for(;F(t)&&!Me(t);){if(qe(t))return t;t=se(t)}return null}function Rt(e,t){const n=z(e);if(!F(e))return n;let o=ft(e,t);for(;o&&Fo(o)&&B(o).position==="static";)o=ft(o,t);return o&&(G(o)==="html"||G(o)==="body"&&B(o).position==="static"&&!qe(o))?n:o||Jo(e)||n}const Qo=async function(e){let{reference:t,floating:n,strategy:o}=e;const r=this.getOffsetParent||Rt,i=this.getDimensions;return{reference:Ko(t,await r(n),o),floating:{x:0,y:0,...await i(n)}}};function er(e){return getComputedStyle(e).direction==="rtl"}const tr={convertOffsetParentRelativeRectToViewportRelativeRect:Vo,getDocumentElement:Y,getClippingRect:Go,getOffsetParent:Rt,getElementRects:Qo,getClientRects:jo,getDimensions:Zo,getScale:oe,isElement:X,isRTL:er};function nr(e,t){let n=null,o;const r=Y(e);function i(){clearTimeout(o),n&&n.disconnect(),n=null}function s(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),i();const{left:d,top:f,width:u,height:m}=e.getBoundingClientRect();if(l||t(),!u||!m)return;const p=Ce(f),h=Ce(r.clientWidth-(d+u)),v=Ce(r.clientHeight-(f+m)),b=Ce(d),x={rootMargin:-p+"px "+-h+"px "+-v+"px "+-b+"px",threshold:ne(0,Ve(1,a))||1};let w=!0;function C($){const T=$[0].intersectionRatio;if(T!==a){if(!w)return s();T?s(!1,T):o=setTimeout(()=>{s(!1,1e-7)},100)}w=!1}try{n=new IntersectionObserver(C,{...x,root:r.ownerDocument})}catch{n=new IntersectionObserver(C,x)}n.observe(e)}return s(!0),i}function or(e,t,n,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=o,d=Ze(e),f=r||i?[...d?Se(d):[],...Se(t)]:[];f.forEach(y=>{r&&y.addEventListener("scroll",n,{passive:!0}),i&&y.addEventListener("resize",n)});const u=d&&l?nr(d,n):null;let m=-1,p=null;s&&(p=new ResizeObserver(y=>{let[x]=y;x&&x.target===d&&p&&(p.unobserve(t),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{p&&p.observe(t)})),n()}),d&&!a&&p.observe(d),p.observe(t));let h,v=a?J(e):null;a&&b();function b(){const y=J(e);v&&(y.x!==v.x||y.y!==v.y||y.width!==v.width||y.height!==v.height)&&n(),v=y,h=requestAnimationFrame(b)}return n(),()=>{f.forEach(y=>{r&&y.removeEventListener("scroll",n),i&&y.removeEventListener("resize",n)}),u&&u(),p&&p.disconnect(),p=null,a&&cancelAnimationFrame(h)}}const rr=(e,t,n)=>{const o=new Map,r={platform:tr,...n},i={...r.platform,_c:o};return Eo(e,t,{...r,platform:i})},ir=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:o,padding:r}=typeof e=="function"?e(n):e;return o&&t(o)?o.current!=null?st({element:o.current,padding:r}).fn(n):{}:o?st({element:o,padding:r}).fn(n):{}}}};var Pe=typeof document<"u"?c.useLayoutEffect:c.useEffect;function De(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,o,r;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(o=n;o--!==0;)if(!De(e[o],t[o]))return!1;return!0}if(r=Object.keys(e),n=r.length,n!==Object.keys(t).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(t,r[o]))return!1;for(o=n;o--!==0;){const i=r[o];if(!(i==="_owner"&&e.$$typeof)&&!De(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function St(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function ut(e,t){const n=St(e);return Math.round(t*n)/n}function pt(e){const t=c.useRef(e);return Pe(()=>{t.current=e}),t}function sr(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:o=[],platform:r,elements:{reference:i,floating:s}={},transform:l=!0,whileElementsMounted:a,open:d}=e,[f,u]=c.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[m,p]=c.useState(o);De(m,o)||p(o);const[h,v]=c.useState(null),[b,y]=c.useState(null),x=c.useCallback(R=>{R!=T.current&&(T.current=R,v(R))},[v]),w=c.useCallback(R=>{R!==A.current&&(A.current=R,y(R))},[y]),C=i||h,$=s||b,T=c.useRef(null),A=c.useRef(null),P=c.useRef(f),k=pt(a),L=pt(r),D=c.useCallback(()=>{if(!T.current||!A.current)return;const R={placement:t,strategy:n,middleware:m};L.current&&(R.platform=L.current),rr(T.current,A.current,R).then(q=>{const W={...q,isPositioned:!0};H.current&&!De(P.current,W)&&(P.current=W,Xe.flushSync(()=>{u(W)}))})},[m,t,n,L]);Pe(()=>{d===!1&&P.current.isPositioned&&(P.current.isPositioned=!1,u(R=>({...R,isPositioned:!1})))},[d]);const H=c.useRef(!1);Pe(()=>(H.current=!0,()=>{H.current=!1}),[]),Pe(()=>{if(C&&(T.current=C),$&&(A.current=$),C&&$){if(k.current)return k.current(C,$,D);D()}},[C,$,D,k]);const M=c.useMemo(()=>({reference:T,floating:A,setReference:x,setFloating:w}),[x,w]),_=c.useMemo(()=>({reference:C,floating:$}),[C,$]),I=c.useMemo(()=>{const R={position:n,left:0,top:0};if(!_.floating)return R;const q=ut(_.floating,f.x),W=ut(_.floating,f.y);return l?{...R,transform:"translate("+q+"px, "+W+"px)",...St(_.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:q,top:W}},[n,l,_.floating,f.x,f.y]);return c.useMemo(()=>({...f,update:D,refs:M,elements:_,floatingStyles:I}),[f,D,M,_,I])}const cr=c.forwardRef((e,t)=>{const{children:n,width:o=10,height:r=5,...i}=e;return c.createElement(Q.svg,N({},i,{ref:t,width:o,height:r,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),e.asChild?n:c.createElement("polygon",{points:"0,0 30,0 15,10"}))}),ar=cr;function lr(e){const[t,n]=c.useState(void 0);return ie(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const o=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;const i=r[0];let s,l;if("borderBoxSize"in i){const a=i.borderBoxSize,d=Array.isArray(a)?a[0]:a;s=d.inlineSize,l=d.blockSize}else s=e.offsetWidth,l=e.offsetHeight;n({width:s,height:l})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else n(void 0)},[e]),t}const Dt="Popper",[Mt,_t]=vt(Dt),[dr,kt]=Mt(Dt),fr=e=>{const{__scopePopper:t,children:n}=e,[o,r]=c.useState(null);return c.createElement(dr,{scope:t,anchor:o,onAnchorChange:r},n)},ur="PopperAnchor",pr=c.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:o,...r}=e,i=kt(ur,n),s=c.useRef(null),l=ce(t,s);return c.useEffect(()=>{i.onAnchorChange((o==null?void 0:o.current)||s.current)}),o?null:c.createElement(Q.div,N({},r,{ref:l}))}),Lt="PopperContent",[mr,hr]=Mt(Lt),gr=c.forwardRef((e,t)=>{var n,o,r,i,s,l,a,d;const{__scopePopper:f,side:u="bottom",sideOffset:m=0,align:p="center",alignOffset:h=0,arrowPadding:v=0,collisionBoundary:b=[],collisionPadding:y=0,sticky:x="partial",hideWhenDetached:w=!1,avoidCollisions:C=!0,onPlaced:$,...T}=e,A=kt(Lt,f),[P,k]=c.useState(null),L=ce(t,He=>k(He)),[D,H]=c.useState(null),M=lr(D),_=(n=M==null?void 0:M.width)!==null&&n!==void 0?n:0,I=(o=M==null?void 0:M.height)!==null&&o!==void 0?o:0,R=u+(p!=="center"?"-"+p:""),q=typeof y=="number"?y:{top:0,right:0,bottom:0,left:0,...y},W=Array.isArray(b)?b:[b],Yt=W.length>0,Ne={padding:q,boundary:W.filter(xr),altBoundary:Yt},{refs:qt,floatingStyles:et,placement:Gt,isPositioned:ye,middlewareData:te}=sr({strategy:"fixed",placement:R,whileElementsMounted:or,elements:{reference:A.anchor},middleware:[No({mainAxis:m+I,alignmentAxis:h}),C&&Ho({mainAxis:!0,crossAxis:!1,limiter:x==="partial"?Io():void 0,...Ne}),C&&_o({...Ne}),zo({...Ne,apply:({elements:He,rects:nn,availableWidth:on,availableHeight:rn})=>{const{width:sn,height:cn}=nn.reference,$e=He.floating.style;$e.setProperty("--radix-popper-available-width",`${on}px`),$e.setProperty("--radix-popper-available-height",`${rn}px`),$e.setProperty("--radix-popper-anchor-width",`${sn}px`),$e.setProperty("--radix-popper-anchor-height",`${cn}px`)}}),D&&ir({element:D,padding:v}),$r({arrowWidth:_,arrowHeight:I}),w&&ko({strategy:"referenceHidden"})]}),[tt,Zt]=Nt(Gt),xe=ae($);ie(()=>{ye&&(xe==null||xe())},[ye,xe]);const Kt=(r=te.arrow)===null||r===void 0?void 0:r.x,Jt=(i=te.arrow)===null||i===void 0?void 0:i.y,Qt=((s=te.arrow)===null||s===void 0?void 0:s.centerOffset)!==0,[en,tn]=c.useState();return ie(()=>{P&&tn(window.getComputedStyle(P).zIndex)},[P]),c.createElement("div",{ref:qt.setFloating,"data-radix-popper-content-wrapper":"",style:{...et,transform:ye?et.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:en,["--radix-popper-transform-origin"]:[(l=te.transformOrigin)===null||l===void 0?void 0:l.x,(a=te.transformOrigin)===null||a===void 0?void 0:a.y].join(" ")},dir:e.dir},c.createElement(mr,{scope:f,placedSide:tt,onArrowChange:H,arrowX:Kt,arrowY:Jt,shouldHideArrow:Qt},c.createElement(Q.div,N({"data-side":tt,"data-align":Zt},T,{ref:L,style:{...T.style,animation:ye?void 0:"none",opacity:(d=te.hide)!==null&&d!==void 0&&d.referenceHidden?0:void 0}}))))}),vr="PopperArrow",br={top:"bottom",right:"left",bottom:"top",left:"right"},yr=c.forwardRef(function(t,n){const{__scopePopper:o,...r}=t,i=hr(vr,o),s=br[i.placedSide];return c.createElement("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0}},c.createElement(ar,N({},r,{ref:n,style:{...r.style,display:"block"}})))});function xr(e){return e!==null}const $r=e=>({name:"transformOrigin",options:e,fn(t){var n,o,r,i,s;const{placement:l,rects:a,middlewareData:d}=t,u=((n=d.arrow)===null||n===void 0?void 0:n.centerOffset)!==0,m=u?0:e.arrowWidth,p=u?0:e.arrowHeight,[h,v]=Nt(l),b={start:"0%",center:"50%",end:"100%"}[v],y=((o=(r=d.arrow)===null||r===void 0?void 0:r.x)!==null&&o!==void 0?o:0)+m/2,x=((i=(s=d.arrow)===null||s===void 0?void 0:s.y)!==null&&i!==void 0?i:0)+p/2;let w="",C="";return h==="bottom"?(w=u?b:`${y}px`,C=`${-p}px`):h==="top"?(w=u?b:`${y}px`,C=`${a.floating.height+p}px`):h==="right"?(w=`${-p}px`,C=u?b:`${x}px`):h==="left"&&(w=`${a.floating.width+p}px`,C=u?b:`${x}px`),{data:{x:w,y:C}}}});function Nt(e){const[t,n="center"]=e.split("-");return[t,n]}const wr=fr,Cr=pr,Er=gr,Pr=yr,Tr=c.forwardRef((e,t)=>{var n;const{container:o=globalThis==null||(n=globalThis.document)===null||n===void 0?void 0:n.body,...r}=e;return o?fn.createPortal(c.createElement(Q.div,N({},r,{ref:t})),o):null});function Ar(e,t){return c.useReducer((n,o)=>{const r=t[n][o];return r??n},e)}const Ke=e=>{const{present:t,children:n}=e,o=Or(t),r=typeof n=="function"?n({present:o.isPresent}):c.Children.only(n),i=ce(o.ref,r.ref);return typeof n=="function"||o.isPresent?c.cloneElement(r,{ref:i}):null};Ke.displayName="Presence";function Or(e){const[t,n]=c.useState(),o=c.useRef({}),r=c.useRef(e),i=c.useRef("none"),s=e?"mounted":"unmounted",[l,a]=Ar(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return c.useEffect(()=>{const d=Ee(o.current);i.current=l==="mounted"?d:"none"},[l]),ie(()=>{const d=o.current,f=r.current;if(f!==e){const m=i.current,p=Ee(d);e?a("MOUNT"):p==="none"||(d==null?void 0:d.display)==="none"?a("UNMOUNT"):a(f&&m!==p?"ANIMATION_OUT":"UNMOUNT"),r.current=e}},[e,a]),ie(()=>{if(t){const d=u=>{const p=Ee(o.current).includes(u.animationName);u.target===t&&p&&Xe.flushSync(()=>a("ANIMATION_END"))},f=u=>{u.target===t&&(i.current=Ee(o.current))};return t.addEventListener("animationstart",f),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{t.removeEventListener("animationstart",f),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else a("ANIMATION_END")},[t,a]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:c.useCallback(d=>{d&&(o.current=getComputedStyle(d)),n(d)},[])}}function Ee(e){return(e==null?void 0:e.animationName)||"none"}function Rr({prop:e,defaultProp:t,onChange:n=()=>{}}){const[o,r]=Sr({defaultProp:t,onChange:n}),i=e!==void 0,s=i?e:o,l=ae(n),a=c.useCallback(d=>{if(i){const u=typeof d=="function"?d(e):d;u!==e&&l(u)}else r(d)},[i,e,r,l]);return[s,a]}function Sr({defaultProp:e,onChange:t}){const n=c.useState(e),[o]=n,r=c.useRef(o),i=ae(t);return c.useEffect(()=>{r.current!==o&&(i(o),r.current=o)},[o,r,i]),n}const Dr=c.forwardRef((e,t)=>c.createElement(Q.span,N({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),Mr=Dr,[ke,_r]=vt("Tooltip",[_t]),Le=_t(),kr="TooltipProvider",Lr=700,je="tooltip.open",[Nr,Je]=ke(kr),Ht=e=>{const{__scopeTooltip:t,delayDuration:n=Lr,skipDelayDuration:o=300,disableHoverableContent:r=!1,children:i}=e,[s,l]=c.useState(!0),a=c.useRef(!1),d=c.useRef(0);return c.useEffect(()=>{const f=d.current;return()=>window.clearTimeout(f)},[]),c.createElement(Nr,{scope:t,isOpenDelayed:s,delayDuration:n,onOpen:c.useCallback(()=>{window.clearTimeout(d.current),l(!1)},[]),onClose:c.useCallback(()=>{window.clearTimeout(d.current),d.current=window.setTimeout(()=>l(!0),o)},[o]),isPointerInTransitRef:a,onPointerInTransitChange:c.useCallback(f=>{a.current=f},[]),disableHoverableContent:r},i)},Qe="Tooltip",[Hr,be]=ke(Qe),It=e=>{const{__scopeTooltip:t,children:n,open:o,defaultOpen:r=!1,onOpenChange:i,disableHoverableContent:s,delayDuration:l}=e,a=Je(Qe,e.__scopeTooltip),d=Le(t),[f,u]=c.useState(null),m=Co(),p=c.useRef(0),h=s??a.disableHoverableContent,v=l??a.delayDuration,b=c.useRef(!1),[y=!1,x]=Rr({prop:o,defaultProp:r,onChange:A=>{A?(a.onOpen(),document.dispatchEvent(new CustomEvent(je))):a.onClose(),i==null||i(A)}}),w=c.useMemo(()=>y?b.current?"delayed-open":"instant-open":"closed",[y]),C=c.useCallback(()=>{window.clearTimeout(p.current),b.current=!1,x(!0)},[x]),$=c.useCallback(()=>{window.clearTimeout(p.current),x(!1)},[x]),T=c.useCallback(()=>{window.clearTimeout(p.current),p.current=window.setTimeout(()=>{b.current=!0,x(!0)},v)},[v,x]);return c.useEffect(()=>()=>window.clearTimeout(p.current),[]),c.createElement(wr,d,c.createElement(Hr,{scope:t,contentId:m,open:y,stateAttribute:w,trigger:f,onTriggerChange:u,onTriggerEnter:c.useCallback(()=>{a.isOpenDelayed?T():C()},[a.isOpenDelayed,T,C]),onTriggerLeave:c.useCallback(()=>{h?$():window.clearTimeout(p.current)},[$,h]),onOpen:C,onClose:$,disableHoverableContent:h},n))},mt="TooltipTrigger",zt=c.forwardRef((e,t)=>{const{__scopeTooltip:n,...o}=e,r=be(mt,n),i=Je(mt,n),s=Le(n),l=c.useRef(null),a=ce(t,l,r.onTriggerChange),d=c.useRef(!1),f=c.useRef(!1),u=c.useCallback(()=>d.current=!1,[]);return c.useEffect(()=>()=>document.removeEventListener("pointerup",u),[u]),c.createElement(Cr,N({asChild:!0},s),c.createElement(Q.button,N({"aria-describedby":r.open?r.contentId:void 0,"data-state":r.stateAttribute},o,{ref:a,onPointerMove:V(e.onPointerMove,m=>{m.pointerType!=="touch"&&!f.current&&!i.isPointerInTransitRef.current&&(r.onTriggerEnter(),f.current=!0)}),onPointerLeave:V(e.onPointerLeave,()=>{r.onTriggerLeave(),f.current=!1}),onPointerDown:V(e.onPointerDown,()=>{d.current=!0,document.addEventListener("pointerup",u,{once:!0})}),onFocus:V(e.onFocus,()=>{d.current||r.onOpen()}),onBlur:V(e.onBlur,r.onClose),onClick:V(e.onClick,r.onClose)})))}),Ft="TooltipPortal",[Ir,zr]=ke(Ft,{forceMount:void 0}),Bt=e=>{const{__scopeTooltip:t,forceMount:n,children:o,container:r}=e,i=be(Ft,t);return c.createElement(Ir,{scope:t,forceMount:n},c.createElement(Ke,{present:n||i.open},c.createElement(Tr,{asChild:!0,container:r},o)))},he="TooltipContent",Wt=c.forwardRef((e,t)=>{const n=zr(he,e.__scopeTooltip),{forceMount:o=n.forceMount,side:r="top",...i}=e,s=be(he,e.__scopeTooltip);return c.createElement(Ke,{present:o||s.open},s.disableHoverableContent?c.createElement(Vt,N({side:r},i,{ref:t})):c.createElement(Fr,N({side:r},i,{ref:t})))}),Fr=c.forwardRef((e,t)=>{const n=be(he,e.__scopeTooltip),o=Je(he,e.__scopeTooltip),r=c.useRef(null),i=ce(t,r),[s,l]=c.useState(null),{trigger:a,onClose:d}=n,f=r.current,{onPointerInTransitChange:u}=o,m=c.useCallback(()=>{l(null),u(!1)},[u]),p=c.useCallback((h,v)=>{const b=h.currentTarget,y={x:h.clientX,y:h.clientY},x=jr(y,b.getBoundingClientRect()),w=Ur(y,x),C=Xr(v.getBoundingClientRect()),$=qr([...w,...C]);l($),u(!0)},[u]);return c.useEffect(()=>()=>m(),[m]),c.useEffect(()=>{if(a&&f){const h=b=>p(b,f),v=b=>p(b,a);return a.addEventListener("pointerleave",h),f.addEventListener("pointerleave",v),()=>{a.removeEventListener("pointerleave",h),f.removeEventListener("pointerleave",v)}}},[a,f,p,m]),c.useEffect(()=>{if(s){const h=v=>{const b=v.target,y={x:v.clientX,y:v.clientY},x=(a==null?void 0:a.contains(b))||(f==null?void 0:f.contains(b)),w=!Yr(y,s);x?m():w&&(m(),d())};return document.addEventListener("pointermove",h),()=>document.removeEventListener("pointermove",h)}},[a,f,s,d,m]),c.createElement(Vt,N({},e,{ref:i}))}),[Br,Wr]=ke(Qe,{isInside:!1}),Vt=c.forwardRef((e,t)=>{const{__scopeTooltip:n,children:o,"aria-label":r,onEscapeKeyDown:i,onPointerDownOutside:s,...l}=e,a=be(he,n),d=Le(n),{onClose:f}=a;return c.useEffect(()=>(document.addEventListener(je,f),()=>document.removeEventListener(je,f)),[f]),c.useEffect(()=>{if(a.trigger){const u=m=>{const p=m.target;p!=null&&p.contains(a.trigger)&&f()};return window.addEventListener("scroll",u,{capture:!0}),()=>window.removeEventListener("scroll",u,{capture:!0})}},[a.trigger,f]),c.createElement(bo,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:i,onPointerDownOutside:s,onFocusOutside:u=>u.preventDefault(),onDismiss:f},c.createElement(Er,N({"data-state":a.stateAttribute},d,l,{ref:t,style:{...l.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"}}),c.createElement(yt,null,o),c.createElement(Br,{scope:n,isInside:!0},c.createElement(Mr,{id:a.contentId,role:"tooltip"},r||o))))}),Vr="TooltipArrow",jt=c.forwardRef((e,t)=>{const{__scopeTooltip:n,...o}=e,r=Le(n);return Wr(Vr,n).isInside?null:c.createElement(Pr,N({},r,o,{ref:t}))});function jr(e,t){const n=Math.abs(t.top-e.y),o=Math.abs(t.bottom-e.y),r=Math.abs(t.right-e.x),i=Math.abs(t.left-e.x);switch(Math.min(n,o,r,i)){case i:return"left";case r:return"right";case n:return"top";case o:return"bottom";default:throw new Error("unreachable")}}function Ur(e,t,n=5){const o=[];switch(t){case"top":o.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":o.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":o.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":o.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n});break}return o}function Xr(e){const{top:t,right:n,bottom:o,left:r}=e;return[{x:r,y:t},{x:n,y:t},{x:n,y:o},{x:r,y:o}]}function Yr(e,t){const{x:n,y:o}=e;let r=!1;for(let i=0,s=t.length-1;i<t.length;s=i++){const l=t[i].x,a=t[i].y,d=t[s].x,f=t[s].y;a>o!=f>o&&n<(d-l)*(o-a)/(f-a)+l&&(r=!r)}return r}function qr(e){const t=e.slice();return t.sort((n,o)=>n.x<o.x?-1:n.x>o.x?1:n.y<o.y?-1:n.y>o.y?1:0),Gr(t)}function Gr(e){if(e.length<=1)return e.slice();const t=[];for(let o=0;o<e.length;o++){const r=e[o];for(;t.length>=2;){const i=t[t.length-1],s=t[t.length-2];if((i.x-s.x)*(r.y-s.y)>=(i.y-s.y)*(r.x-s.x))t.pop();else break}t.push(r)}t.pop();const n=[];for(let o=e.length-1;o>=0;o--){const r=e[o];for(;n.length>=2;){const i=n[n.length-1],s=n[n.length-2];if((i.x-s.x)*(r.y-s.y)>=(i.y-s.y)*(r.x-s.x))n.pop();else break}n.push(r)}return n.pop(),t.length===1&&n.length===1&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)}const Zr=Ht,Kr=It,Ut=zt,Jr=Bt,Xt=Wt,Qr=jt,ei=Object.freeze(Object.defineProperty({__proto__:null,Arrow:Qr,Content:Xt,Portal:Jr,Provider:Zr,Root:Kr,Tooltip:It,TooltipArrow:jt,TooltipContent:Wt,TooltipPortal:Bt,TooltipProvider:Ht,TooltipTrigger:zt,Trigger:Ut,createTooltipScope:_r},Symbol.toStringTag,{value:"Module"})),ti=un`
  from {
    opacity: 0;
    transform: translateY(-.2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,ni=E(Xt)`
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
  animation-name: ${ti};
  will-change: transform, opacity;
  margin-bottom: 1rem;
`,oi=E(Ut)`
  background: none;
  border: none;
  outline: none;
`;function ri({children:e}){return g(ni,{children:e})}function ii({children:e}){return g(oi,{children:e})}const ue={...ei,Content:ri,Trigger:ii};function Te({children:e,icon:t,label:n,...o}){const{colors:r}=Ue();return g(pn,{children:g(ue.Provider,{children:O(ue.Root,{delayDuration:100,children:[g(ue.Trigger,{children:g(so,{...o,children:g(t,{size:16,color:r.icon})})}),g(ue.Portal,{children:g(ue.Content,{sideOffset:5,children:n})})]})})})}const si=c.forwardRef((e,t)=>{function n(){}return O(fe.Root,{onOpen:n,ref:t,children:[O(fe.Header,{children:[g(fe.Title,{children:"Policiais On-line"}),g(fe.Subtitle,{children:"Atualmente há 5 policiais em serviço"})]}),g(fe.Content,{children:g(to,{children:O(oo,{children:[O(no,{children:[g(ro,{children:"John Doe"}),g(io,{children:"Coronel | PMERJ"})]}),g(Te,{icon:gn,label:"Marcar no Mapa"})]})})})]})}),ci=si;function di(){const e=c.useRef(null),t=()=>{var n;(n=e.current)==null||n.openModal()};return O(xn,{children:[g(ci,{ref:e}),g("div",{style:{gridArea:"banner"},children:g(we.Root,{style:{height:"100%"},children:O(we.Header,{children:[O(we.Title,{children:["Bem-vindo ",g("b",{children:"John Doe"}),"!"]}),g(we.Action,{children:"Entrar em serviço"})]})})}),O($n,{children:[O(nt,{children:[g("h1",{children:"Prisões"}),g("span",{children:"2.541"})]}),O(nt,{children:[g("h1",{children:"Multas"}),g("span",{children:"256"})]})]}),g("div",{style:{gridArea:"warns"},children:O(S.Root,{children:[O(S.Header,{children:[O(S.Column,{children:[g(S.Title,{children:"Avisos"}),g(S.Subtitle,{children:"Resumo de avisos da guarnição"})]}),g(Te,{label:"Criar aviso",icon:mn})]}),g(S.Separator,{}),g(S.Content,{children:O(wn,{children:[g(de,{}),g(de,{}),g(de,{}),g(de,{}),g(de,{})]})})]})}),g("div",{style:{gridArea:"players"},children:g(S.Root,{children:O(S.Header,{children:[O(S.Column,{children:[g(S.Title,{children:"Policiais On-line"}),g(S.Subtitle,{children:"Policiais ativos no momento (11)"})]}),g(Te,{onClick:t,label:"Ver Policiais",icon:hn})]})})}),g("div",{style:{gridArea:"widget"},children:O(S.Root,{children:[O(S.Header,{children:[g(S.Column,{children:g(S.Title,{children:"Mural de Procurados"})}),g(Te,{label:"Selecionar Widget",icon:bn})]}),g(S.Separator,{}),g(S.Content,{})]})}),g("div",{style:{gridArea:"chat"},children:g(Fn,{})})]})}export{di as default};
