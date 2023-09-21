import{c as b,s as d,C as J,b as f,f as g,Z as x,j as o,a as i,r as $,e as h,g as l,A as w,E as C}from"./index-77893275.js";const k=b("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),I=b("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),A=d(J)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,z=d.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1;
`,R=d.div`
  width: 100%;
  padding: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  border: solid .1rem ${({theme:e})=>e.border.primary};
  border-radius: .6rem;
`,T=d.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${({theme:e})=>e.text.title};
`,j=d.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`,u=d.button`
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
    background: ${({theme:e})=>f(.98,e.colors.ripple)};
  }

  &:not(:disabled):active {
    background: ${({theme:e})=>f(.92,e.colors.ripple)};
  }
`,L=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
`,B=d.button`
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
    background: ${({theme:n})=>n.colors.primary};
    color: #FFF;
  `:g`
    &:hover {
      background: ${({theme:n})=>f(.98,n.colors.ripple)};
    }

    &:active {
      background: ${({theme:n})=>f(.92,n.colors.ripple)};
    }
  `}
`;function E({totalOfItems:e,currentPage:n,itemsBeingViewed:a,amountOfPages:t,onPaginate:s}){const{colors:c}=x();return o(R,{children:[o(T,{children:["Mostrando ",a," de ",e," registros"]}),o(j,{children:[i(u,{disabled:n<=1,onClick:()=>s(n-1),children:i(k,{size:16,color:c.icon})}),i(L,{children:[...new Array(t)].map((r,m)=>i(B,{onClick:()=>{s(m+1)},enabled:n===m+1,children:m+1},m))}),i(u,{disabled:n>=t,onClick:()=>s(n+1),children:i(I,{size:16,color:c.icon})})]})]})}function F(e,n=1,a){const[t,s]=$.useState(n),c=v=>s(v),r=Math.ceil(a.length/e),m=a.length,p=a.slice((t-1)*e,t*e),y=e*t-(e-p.length);return{paginate:c,currentPage:t,amountOfPages:r,viewedItems:y,totalOfItems:m,items:p}}function O(){const{amountOfPages:e,currentPage:n,items:a,totalOfItems:t,viewedItems:s,paginate:c}=F(12,1,[{id:1,name:"John doe",time:15,fine:15e3},{id:2,name:"John doe",time:15,fine:15e3},{id:3,name:"John doe",time:15,fine:15e3},{id:4,name:"John doe",time:15,fine:15e3},{id:5,name:"John doe",time:15,fine:15e3},{id:6,name:"John doe",time:15,fine:15e3},{id:7,name:"John doe",time:15,fine:15e3},{id:8,name:"John doe",time:15,fine:15e3},{id:9,name:"John doe",time:15,fine:15e3},{id:10,name:"John doe",time:15,fine:15e3},{id:11,name:"John doe",time:15,fine:15e3},{id:12,name:"John doe",time:15,fine:15e3},{id:13,name:"John doe",time:15,fine:15e3},{id:14,name:"John doe",time:15,fine:15e3},{id:15,name:"John doe",time:15,fine:15e3},{id:16,name:"John doe",time:15,fine:15e3},{id:17,name:"John doe",time:15,fine:15e3}]);return o(A,{children:[o(h.Root,{children:[i(h.Header,{children:i(h.Title,{children:"Últimas prisões"})}),i(h.Action,{children:"Nova Prisão"})]}),o(z,{children:[i(l.Root,{headColumns:["ID","Prisioneiro","Tempo","Multa","Ações"],children:a.map(r=>o(l.Row,{children:[o(l.Item,{children:["#",r.id]}),i(l.Item,{children:r.name}),o(l.Item,{children:[r.time," meses"]}),o(l.Item,{children:["R$ ",r.fine.toLocaleString("pt-br")]}),i(l.Item,{children:i(w,{icon:C,size:"sm",label:"Ver detalhes"})})]}))}),i(E,{amountOfPages:e,currentPage:n,itemsBeingViewed:s,totalOfItems:t,onPaginate:r=>c(r)})]})]})}export{O as default};
