import{s as r,a as g,j as i,b as t,q as p,t as u,v as f,d as m,P as h}from"./index-bfdf8dd9.js";const b=r.div`
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
`,v=r.div`
  display: flex;
  width: 100%;
  background: ${({theme:e})=>e.colors.primary};
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-radius: .6rem .6rem 0 0;
`,$=r.p`
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
`,z=r.div`
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-left: solid .1rem ${({theme:e})=>e.border.primary};
  border-right: solid .1rem ${({theme:e})=>e.border.primary};
`,C=r.p`
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
    background: ${({theme:e})=>g(.98,e.colors.ripple)};
  }

  &:active {
    background: ${({theme:e})=>g(.94,e.colors.ripple)};
  }
`;function S({date:e,id:s,timeToComplete:d,title:n}){const a=new Date(e),l=String(a.getDate()).padStart(2,"0"),c=String(a.getMonth()+1).padStart(2,"0"),o=String(a.getFullYear());return i(w,{children:[i(v,{children:[t($,{children:"Investigação"}),i(P,{children:[t(p,{size:"1.6rem",color:"white"}),d," min"]})]}),i(z,{children:[t(C,{children:n}),i(D,{children:[l,"/",c,"/",o]})]}),t(u,{to:`/courses/${s}`,children:t(F,{children:"Ver Detalhes"})})]})}function k(){const{amountOfPages:s,currentPage:d,items:n,totalOfItems:a,viewedItems:l,paginate:c}=f(12,1,[{id:1,title:"Curso de Armamento",date:Date.now(),timeToComplete:30}]);return i(b,{children:[t(m.Root,{children:t(m.Header,{children:t(m.Title,{children:"Cursos Disponíveis"})})}),i(y,{children:[n==null?void 0:n.map(o=>t(S,{...o},o.id)),[...new Array(12-n.length)].map(()=>t(x,{}))]}),t(h,{amountOfPages:s,currentPage:d,itemsBeingViewed:l,onPaginate:o=>c(o),totalOfItems:a})]})}export{k as default};
