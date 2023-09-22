import{c as h,h as i,j as l,w as g,Z as k,k as d,l as n,g as f}from"./index-42cf2d40.js";const v=h("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),C=h("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),F=h("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),$=i.div`
  width: 100%;
  padding: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  border: solid .1rem ${({theme:e})=>e.border.primary};
  border-radius: .6rem;
`,w=i.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${({theme:e})=>e.text.title};
`,x=i.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`,b=i.button`
  width: 3.6rem;
  height: 3.6rem;
  border: solid .1rem ${({theme:e})=>e.border.primary};
  display: grid;
  place-items: center;
  border-radius: 3rem;
  background: none;
  transition: .1s ease-in-out;

  &:disabled {
    opacity: .5;
    cursor: not-allowed;
  }
  
  &:not(:disabled):hover {
    background: ${({theme:e})=>l(.98,e.colors.ripple)};
  }

  &:not(:disabled):active {
    background: ${({theme:e})=>l(.92,e.colors.ripple)};
  }
`,j=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
`,z=i.button`
  border: solid .1rem ${({theme:e})=>e.border.primary};
  width: 3.6rem;
  height: 3.6rem;
  background: none;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({theme:e})=>e.text.title};
  transition: .1s ease-in-out;
  border-radius: .6rem;

  ${e=>e.enabled?g`
    background: ${({theme:r})=>r.colors.primary};
    color: #FFF;
  `:g`
    &:hover {
      background: ${({theme:r})=>l(.98,r.colors.ripple)};
    }

    &:active {
      background: ${({theme:r})=>l(.92,r.colors.ripple)};
    }
  `}
`;function L({totalOfItems:e,currentPage:r,itemsBeingViewed:s,amountOfPages:o,onPaginate:c}){const{colors:a}=k();return d($,{children:[d(w,{children:["Mostrando ",s," de ",e," registros"]}),d(x,{children:[n(b,{disabled:r<=1,onClick:()=>c(r-1),children:n(v,{size:"1.6rem",color:a.icon})}),n(j,{children:[...new Array(o)].map((p,t)=>n(z,{onClick:()=>{c(t+1)},enabled:r===t+1,children:t+1},t))}),n(b,{disabled:r>=o,onClick:()=>c(r+1),children:n(C,{size:"1.6rem",color:a.icon})})]})]})}function M(e,r=1,s){const[o,c]=f.useState(r),a=y=>c(y),p=Math.ceil(s.length/e),t=s.length,m=s.slice((o-1)*e,o*e),u=e*o-(e-m.length);return{paginate:a,currentPage:o,amountOfPages:p,viewedItems:u,totalOfItems:t,items:m}}export{F as C,L as P,M as u};
