import{C as o}from"./index-81e935ea.js";import{c as y,s as t,C,a as f,r as a,j as i,b as r,Z as M,M as c,A as b,B as v,u as P,L as A,d as u,E as O,f as R}from"./index-bfdf8dd9.js";import{T as S}from"./index-a02108cc.js";const k=y("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),z=y("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),D=y("SendHorizonal",[["path",{d:"m3 3 3 9-3 9 19-9Z",key:"1aobqy"}],["path",{d:"M6 12h16",key:"s4cdu5"}]]),x=t(C)`
  display: grid;
  grid-template-areas: 
  'banner  stats'
  'warns   players'
  'warns   chat'
  'warns  chat';
  grid-template-columns: 65.6rem 34.5rem;
  grid-template-rows: 16.5rem 8.5rem auto 24.5rem;
  gap: 2rem;
`,j=t.div`
  display: flex;
  grid-area: stats;
  gap: 2rem;
`,w=t.div`
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
`;t.div`
  grid-area: warns;
  position: relative;
`;t.div`
  grid-area: graphic;
`;t.div`
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
`;const N=t.div`
  padding: 1.5rem;
  max-height: 26.55rem;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,T=t.div`
  display: flex;
  flex-direction: column;
  gap: .4rem;
`,H=t.div`
  display: flex;
  flex-direction: column;
  gap: .2rem;
  padding: 1rem;
  width: max-content;
  border-radius: .7rem .7rem .7rem 0;
  background: ${({theme:e})=>f(.85,e.colors.primary)};
`,B=t.p`
  font-size: 1.2rem;
  font-weight: 300;
  color: ${({theme:e})=>e.text.subtitle};
  user-select: text;
`,I=t.p`
  font-size: 1.4rem;
  font-weight: 300;
  color: ${({theme:e})=>e.text.title};
  user-select: text;
`,L=t.time`
  font-size: 1.2rem;
  font-weight: 300;
  color: ${({theme:e})=>e.text.subtitle};
  user-select: text;
`;function E(){return i(T,{children:[i(H,{children:[r(B,{children:"John Doe"}),r(I,{children:"Boa tarde pessoal!"})]}),r(L,{children:"Hoje ás 16:35"})]})}const g=a.memo(E),F=t.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`,W=t.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 2.5rem;
  height: 100%;
  overflow-y: auto;
  position: relative;
`,Z=t.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.4rem;
`,_=t.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 1.2rem;
  border: solid .1rem ${({theme:e})=>e.border.primary};
  border-radius: .6rem;
  width: 100%;
`,q=t.input`
  background: none;
  border: none;
  outline: none;
  flex: 1;
  color: ${({theme:e})=>e.text.title};
  font-size: 1.4rem;
  font-weight: 300;
  
  &::placeholder {
    color: ${({theme:e})=>f(.6,e.text.title)}
  }
`,J=t.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  outline: none;
`;function V(){const{colors:e}=M();return i(o.Root,{children:[r(o.Header,{children:i(o.Column,{children:[r(o.Title,{children:"Chat Geral"}),r(o.Subtitle,{children:"Bate-papo geral da policia"})]})}),r(o.Separator,{}),r(o.Content,{children:i(F,{children:[i(W,{children:[r(g,{}),r(g,{}),r(g,{})]}),r(o.Separator,{}),r(Z,{children:i(_,{children:[r(q,{placeholder:"Mensagem..."}),r(J,{children:r(D,{color:e.primary})})]})})]})})]})}const G=t.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  max-height: 50rem;
  overflow: auto;
`,Q=t.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  cursor: pointer;
`,Y=t.div`
  width: 100%;
  display: flex;
  padding: 1rem 1.3rem;
  justify-content: space-between;
  align-items: center;
  border-radius: .6rem;
  border: .1rem solid ${({theme:e})=>e.border.primary};
`,K=t.p`
  color: ${({theme:e})=>e.text.title};
  font-size: 1.4rem;
  font-weight: 400;
`,U=t.span`
  padding: .5rem 1rem;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({theme:e})=>e.text.title};
  border-radius: 3rem;
  background: ${({theme:e})=>f(.8,e.colors.primary)};
`;t.button`
  width: 3.3rem;
  height: 3.3rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: solid .1rem ${({theme:e})=>e.border.primary};
  background: none;
  position: relative;
  overflow: hidden;
`;const X=a.forwardRef((e,l)=>{function d(){}return i(c.Root,{onOpen:d,ref:l,children:[r(c.Header,{title:"Policiais On-line",subtitle:"Atualmente há 5 policiais em serviço"}),r(c.Content,{children:r(G,{children:i(Y,{children:[i(Q,{children:[r(K,{children:"John Doe"}),r(U,{children:"Coronel | PMERJ"})]}),r(b,{icon:k,label:"Marcar no Mapa"})]})})})]})}),ee=X,re=t.textarea`
  resize: none;
  width: 100%;
  height: 11.6rem;
  padding: 1.2rem 1rem;
  border: solid .1rem ${e=>e.theme.border.primary};
  border-radius: .6rem;
  background: none;
  
  font-size: 1.4rem;
  font-weight: 300;
  color: ${e=>e.theme.text.title};

  &::placeholder {
    color: ${e=>f(.7,e.theme.text.title)};
  }
`,te=t.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`,ie=t.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`,oe=a.forwardRef((e,l)=>{const[d,s]=a.useState();function m(){s(Date.now())}return i(c.Root,{onOpen:m,ref:l,children:[r(c.Header,{title:"Criar Aviso",subtitle:"Complete o campo abaixo antes de publicar o aviso"}),i(c.Content,{children:[i(te,{children:[r(S,{max:60,autoFocus:!0,placeholder:"Título do aviso"}),r(re,{placeholder:"Descrição do aviso"})]}),r(ie,{children:r(v,{children:"Publicar"})})]})]})}),ne=oe,ae=t.div`
  width: 100%;
  border: solid .1rem ${e=>e.theme.border.primary};
  border-radius: .6rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,le=t.p`
  color: ${e=>e.theme.text.title};
  font-size: 1.4rem;
  font-weight: 400;
`,de=t.span`
  color: ${e=>e.theme.text.subtitle};
  font-size: 1.2rem;
  font-weight: 400;
`,se=t.div`
  display: flex;
  flex-direction: column;
`;function ce({author:e,description:l,id:d,title:s,createdAt:m}){const h=new Date(m),p=h.getDate(),n=String(h.getMonth()+1).padStart(2,"0"),$=h.getFullYear();return i(ae,{children:[i(se,{children:[r(le,{children:s}),i(de,{children:[p,"/",n,"/",$," - ",e.name," #",e.id]})]}),r(v,{size:"sm",children:"Ver mais"})]})}const me=a.memo(ce);function fe(){var p;const{data:e,isLoading:l}=P(["getInitialData"],()=>R("getInitialData"),{initialData:{officer:{id:1,name:"Droyen Patrulheiro"},canStartPatrol:!0,totalOfPrisions:1243,totalOfFines:52,totalOfWorkingOfficers:34,notices:[{id:1,title:"Não colocar itens no baú",description:"Não coloquem itens no baú temporariamente",createdAt:Date.now(),author:{id:1,name:"Droyen Patrulheiro"}}],permissions:["CAN_CREATE_NOTICE"]}}),d=a.useRef(null),s=a.useRef(null),m=()=>{var n;(n=d.current)==null||n.openModal()},h=()=>{var n;(n=s.current)==null||n.openModal()};return l||!e?r(x,{children:r(A,{})}):i(x,{children:[r(ee,{ref:d}),r(ne,{ref:s}),r("div",{style:{gridArea:"banner"},children:r(u.Root,{style:{height:"100%"},children:i(u.Header,{children:[i(u.Title,{children:["Bem-vindo ",r("b",{children:e.officer.name}),"!"]}),e.canStartPatrol&&r(u.Action,{children:"Iniciar Patrulha"})]})})}),i(j,{children:[i(w,{children:[r("h1",{children:"Prisões"}),r("span",{children:e.totalOfPrisions.toLocaleString("pt-br")})]}),i(w,{children:[r("h1",{children:"Multas"}),r("span",{children:e.totalOfFines.toLocaleString("pt-br")})]})]}),r("div",{style:{gridArea:"warns"},children:i(o.Root,{children:[i(o.Header,{children:[i(o.Column,{children:[r(o.Title,{children:"Avisos"}),r(o.Subtitle,{children:"Resumo de avisos da guarnição"})]}),r(b,{onClick:h,label:"Criar aviso",icon:z})]}),r(o.Separator,{}),r(o.Content,{children:r(N,{children:(p=e.notices)==null?void 0:p.map(n=>r(me,{...n}))})})]})}),r("div",{style:{gridArea:"players"},children:r(o.Root,{children:i(o.Header,{children:[i(o.Column,{children:[r(o.Title,{children:"Policiais On-line"}),i(o.Subtitle,{children:["Policiais ativos no momento (",e.totalOfWorkingOfficers,")"]})]}),r(b,{onClick:m,label:"Ver Policiais",icon:O})]})})}),r("div",{style:{gridArea:"chat"},children:r(V,{})})]})}export{fe as default};
