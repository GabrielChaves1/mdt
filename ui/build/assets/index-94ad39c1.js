import{C as g,u,P as f}from"./usePaginate-89a80142.js";import{s as r,b as p,j as i,a as t,L as h,d as m}from"./index-2e6b3bed.js";const b=r.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,y=r.div`
  display: grid;
  grid-template-columns: repeat(4, 24rem);
  grid-template-rows: repeat(3, 17.2rem);
  gap: 2rem;
  flex: 1;
  align-content: flex-start;
`,x=r.div`
  border-radius: .6rem;
  border: solid .1rem ${({theme:e})=>e.border.primary};
`,w=r.div`
  display: flex;
  flex-direction: column;
`,$=r.div`
  display: flex;
  width: 100%;
  background: ${({theme:e})=>e.colors.primary};
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-radius: .6rem .6rem 0 0;
`,v=r.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: #FFF;
`,P=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .6rem;

  font-size: 1.2rem;
  font-weight: 400;
  color: #FFF;
`,C=r.div`
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-left: solid .1rem ${({theme:e})=>e.border.primary};
  border-right: solid .1rem ${({theme:e})=>e.border.primary};
`,z=r.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({theme:e})=>e.text.title};
`,D=r.time`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({theme:e})=>e.text.subtitle};
`,F=r.button`
  width: 100%;
  height: 3.5rem;
  background: none;
  outline: none;
  border: solid .1rem ${({theme:e})=>e.border.primary};
  border-radius: 0 0 .6rem .6rem;
  color: ${({theme:e})=>e.text.title};
  font-size: 1.4rem;
  font-weight: 400;
  transition: .15s ease-in-out;

  &:hover {
    background: ${({theme:e})=>p(.98,e.colors.ripple)};
  }

  &:active {
    background: ${({theme:e})=>p(.94,e.colors.ripple)};
  }
`;function S({date:e,id:s,timeToComplete:d,title:n}){const a=new Date(e),l=String(a.getDate()).padStart(2,"0"),c=String(a.getMonth()+1).padStart(2,"0"),o=String(a.getFullYear());return i(w,{children:[i($,{children:[t(v,{children:"Investigação"}),i(P,{children:[t(g,{size:"1.6rem",color:"white"}),d," min"]})]}),i(C,{children:[t(z,{children:n}),i(D,{children:[l,"/",c,"/",o]})]}),t(h,{to:`/courses/${s}`,children:t(F,{children:"Ver Detalhes"})})]})}function T(){const{amountOfPages:s,currentPage:d,items:n,totalOfItems:a,viewedItems:l,paginate:c}=u(12,1,[{id:1,title:"Curso de Armamento",date:Date.now(),timeToComplete:30}]);return i(b,{children:[t(m.Root,{children:t(m.Header,{children:t(m.Title,{children:"Cursos Disponíveis"})})}),i(y,{children:[n==null?void 0:n.map(o=>t(S,{...o},o.id)),[...new Array(12-n.length)].map(()=>t(x,{}))]}),t(f,{amountOfPages:s,currentPage:d,itemsBeingViewed:l,onPaginate:o=>c(o),totalOfItems:a})]})}export{T as default};
