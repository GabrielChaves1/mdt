import{r as t,$ as P,g as R,h as T,i as v,_ as $,k as M,l as q,s as m,a as k,m as B,b as x}from"./index-bfdf8dd9.js";function F(e){const r=t.useRef({value:e,previous:e});return t.useMemo(()=>(r.current.value!==e&&(r.current.previous=r.current.value,r.current.value=e),r.current.previous),[e])}const S="Switch",[I,Y]=P(S),[N,H]=I(S),X=t.forwardRef((e,r)=>{const{__scopeSwitch:o,name:c,checked:n,defaultChecked:b,required:d,disabled:a,value:i="on",onCheckedChange:l,...w}=e,[s,p]=t.useState(null),y=R(r,f=>p(f)),h=t.useRef(!1),g=s?Boolean(s.closest("form")):!0,[u=!1,E]=T({prop:n,defaultProp:b,onChange:l});return t.createElement(N,{scope:o,checked:u,disabled:a},t.createElement(v.button,$({type:"button",role:"switch","aria-checked":u,"aria-required":d,"data-state":C(u),"data-disabled":a?"":void 0,disabled:a,value:i},w,{ref:y,onClick:M(e.onClick,f=>{E(_=>!_),g&&(h.current=f.isPropagationStopped(),h.current||f.stopPropagation())})})),g&&t.createElement(A,{control:s,bubbles:!h.current,name:c,value:i,checked:u,required:d,disabled:a,style:{transform:"translateX(-100%)"}}))}),j="SwitchThumb",z=t.forwardRef((e,r)=>{const{__scopeSwitch:o,...c}=e,n=H(j,o);return t.createElement(v.span,$({"data-state":C(n.checked),"data-disabled":n.disabled?"":void 0},c,{ref:r}))}),A=e=>{const{control:r,checked:o,bubbles:c=!0,...n}=e,b=t.useRef(null),d=F(o),a=q(r);return t.useEffect(()=>{const i=b.current,l=window.HTMLInputElement.prototype,s=Object.getOwnPropertyDescriptor(l,"checked").set;if(d!==o&&s){const p=new Event("click",{bubbles:c});s.call(i,o),i.dispatchEvent(p)}},[d,o,c]),t.createElement("input",$({type:"checkbox","aria-hidden":!0,defaultChecked:o},n,{tabIndex:-1,ref:b,style:{...e.style,...a,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function C(e){return e?"checked":"unchecked"}const O=X,D=z,L=m(O)`
  cursor: pointer;
  padding: .3rem .4rem;
  border: solid .1rem ${({theme:e})=>e.border.primary};
  border-radius: 5rem;
  box-shadow: 0 .4rem .8rem 0 rgba(0, 0, 0, 0.08);
  width: 5.2rem;
  height: 2.3rem;
  background: none;
  position: relative;
  display: flex;
  align-items: center;
  transition: .15s ease-in-out;

  &[data-state="checked"] {
    background: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0rem .8rem 0 ${({theme:e})=>k(.8,e.colors.primary)};
  }
`,U=m(D)`
  display: block;
  width: 1.8rem;
  height: 1.7rem;
  transition: transform 150ms;
  border-radius: .7rem;
  transform: translateX(0rem);
  background: ${({theme:e})=>k(.3,e.colors.icon)};
  will-change: transform;

  &[data-state="checked"] {
    transform: translateX(2.5rem);
    background: #FFF;
  }
`;m.button`
  cursor: pointer;
  padding: .3rem .4rem;
  border: solid .1rem ${({theme:e})=>e.border.primary};
  border-radius: 5rem;
  box-shadow: 0 .4rem .8rem 0 rgba(0, 0, 0, 0.08);
  width: 5.2rem;
  height: 2.3rem;
  background: none;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    left: .4rem;
    width: 1.8rem;
    height: 1.7rem;
    border-radius: .7rem;
    background: ${({theme:e})=>k(.3,e.colors.icon)};
    transition: .2s ease-in-out;
  }

  ${e=>e.enabled&&B`
    &::before {

      right: .4rem;
      background: ${({theme:r})=>r.colors.primary};
    }
  `}
`;function G(e){return x(L,{...e,className:"SwitchRoot",id:"airplane-mode",children:x(U,{className:"SwitchThumb"})})}export{G as S};
