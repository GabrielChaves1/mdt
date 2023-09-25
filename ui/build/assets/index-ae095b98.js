import{s as r,a as p,j as o,b as t,n as u,o as f,p as h,f as m,q as b}from"./index-748f3a2a.js";const w=r.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,x=r.div`
  display: grid;
  grid-template-columns: repeat(4, 24rem);
  grid-template-rows: repeat(3, 17.2rem);
  gap: 2rem;
  flex: 1;
  align-content: flex-start;
`,y=r.div`
  border-radius: .6rem;
  border: solid .1rem ${({theme:e})=>e.border.primary};
`,C=r.div`
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
`,D=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .6rem;

  font-size: 1.2rem;
  font-weight: 400;
  color: #FFF;
`,P=r.div`
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-left: solid .1rem ${({theme:e})=>e.border.primary};
  border-right: solid .1rem ${({theme:e})=>e.border.primary};
`,T=r.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({theme:e})=>e.text.title};
  max-width: 80%;
  text-align: center;
`,z=r.time`
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
`;function S({date:e,id:s,timeToComplete:d,title:n}){const a=new Date(e),l=String(a.getDate()).padStart(2,"0"),c=String(a.getMonth()+1).padStart(2,"0"),i=String(a.getFullYear());return o(C,{children:[o($,{children:[t(v,{children:"Policia Militar"}),o(D,{children:[t(u,{size:"1.6rem",color:"white"}),d," min"]})]}),o(P,{children:[t(T,{children:n}),o(z,{children:[l,"/",c,"/",i]})]}),t(f,{to:`/courses/${s}`,children:t(F,{children:"Ver Detalhes"})})]})}function k(){const{amountOfPages:s,currentPage:d,items:n,totalOfItems:a,viewedItems:l,paginate:c}=h(12,1,[{id:1,title:"Curso de Armamento",date:Date.now(),timeToComplete:30},{id:2,title:"Curso Tático",date:Date.now(),timeToComplete:30},{id:3,title:"Curso de Desce e Quebra",date:Date.now(),timeToComplete:30},{id:4,title:"Curso de Rolamento",date:Date.now(),timeToComplete:30},{id:5,title:"Curso de Investigação",date:Date.now(),timeToComplete:30}]);return o(w,{children:[t(m.Root,{children:t(m.Header,{children:t(m.Title,{children:"Cursos Disponíveis"})})}),o(x,{children:[n==null?void 0:n.map(i=>t(S,{...i},i.id)),[...new Array(12-n.length)].map((i,g)=>t(y,{},g))]}),t(b,{amountOfPages:s,currentPage:d,itemsBeingViewed:l,onPaginate:i=>c(i),totalOfItems:a})]})}export{k as default};
