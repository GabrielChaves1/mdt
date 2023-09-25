import{c as $,s as t,a as g,C as O,r as s,j as i,b as r,Z as S,d as n,M as h,A as b,L as C,f as x,T as k,e as A,B as M,u as R,g as f,P as z,E as j}from"./index-58e2572b.js";const D=$("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),N=$("SendHorizonal",[["path",{d:"m3 3 3 9-3 9 19-9Z",key:"1aobqy"}],["path",{d:"M6 12h16",key:"s4cdu5"}]]),w=t(O)`
  display: grid;
  grid-template-areas: 
  'banner  stats'
  'warns   players'
  'warns   chat'
  'warns  chat';
  grid-template-columns: 64.55rem 33.55rem;
  grid-template-rows: 16.5rem 8.5rem auto 24.5rem;
  gap: 2rem;
`,T=t.div`
  display: flex;
  grid-area: stats;
  gap: 2rem;
`,v=t.div`
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
  background: linear-gradient(120deg, transparent, ${({theme:e})=>g(.97,e.colors.primary)});

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
`;const H=t.div`
  padding: 1.5rem;
  max-height: 26.55rem;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,B=t.div`
  display: flex;
  flex-direction: column;
  gap: .4rem;
`,I=t.div`
  display: flex;
  flex-direction: column;
  gap: .2rem;
  padding: 1rem;
  width: max-content;
  border-radius: .7rem .7rem .7rem 0;
  background: ${({theme:e})=>g(.85,e.colors.primary)};
`,L=t.p`
  font-size: 1.2rem;
  font-weight: 300;
  color: ${({theme:e})=>e.text.subtitle};
  user-select: text;
`,E=t.p`
  font-size: 1.4rem;
  font-weight: 300;
  color: ${({theme:e})=>e.text.title};
  user-select: text;
`,F=t.time`
  font-size: 1.2rem;
  font-weight: 300;
  color: ${({theme:e})=>e.text.subtitle};
  user-select: text;
`;function _(){return i(B,{children:[i(I,{children:[r(L,{children:"John Doe"}),r(E,{children:"Boa tarde pessoal!"})]}),r(F,{children:"Hoje ás 16:35"})]})}const y=s.memo(_),W=t.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`,Z=t.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 2.5rem;
  height: 100%;
  overflow-y: auto;
  position: relative;
`,q=t.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.4rem;
`,V=t.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 1.2rem;
  border: solid .1rem ${({theme:e})=>e.border.primary};
  border-radius: .6rem;
  width: 100%;
`,G=t.input`
  background: none;
  border: none;
  outline: none;
  flex: 1;
  color: ${({theme:e})=>e.text.title};
  font-size: 1.4rem;
  font-weight: 300;
  
  &::placeholder {
    color: ${({theme:e})=>g(.6,e.text.title)}
  }
`,J=t.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  outline: none;
`;function Q(){const{colors:e}=S();return i(n.Root,{children:[r(n.Header,{children:i(n.Column,{children:[r(n.Title,{children:"Chat Geral"}),r(n.Subtitle,{children:"Bate-papo geral da policia"})]})}),r(n.Separator,{}),r(n.Content,{children:i(W,{children:[i(Z,{children:[r(y,{}),r(y,{}),r(y,{})]}),r(n.Separator,{}),r(q,{children:i(V,{children:[r(G,{placeholder:"Mensagem..."}),r(J,{children:r(N,{color:e.primary})})]})})]})})]})}const Y=t.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  max-height: 50rem;
  overflow: auto;
`,K=t.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  cursor: pointer;
`,U=t.div`
  width: 100%;
  display: flex;
  padding: 1rem 1.3rem;
  justify-content: space-between;
  align-items: center;
  border-radius: .6rem;
  border: .1rem solid ${({theme:e})=>e.border.primary};
`,X=t.p`
  color: ${({theme:e})=>e.text.title};
  font-size: 1.4rem;
  font-weight: 400;
`,ee=t.span`
  padding: .5rem 1rem;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({theme:e})=>e.text.title};
  border-radius: 3rem;
  background: ${({theme:e})=>g(.8,e.colors.primary)};
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
`;const re=s.forwardRef((e,c)=>{const[l,d]=s.useState();async function m(){const o=await x("getOnlineOfficers");o.length<=0||d(o)}function p(o){x("markOfficerOnMap",o.id)}return i(h.Root,{height:"50rem",onOpen:m,ref:c,children:[r(h.Header,{title:"Policiais On-line",subtitle:l&&`Atualmente há ${l.length} oficiais em serviço`}),r(h.Content,{children:l?r(Y,{children:l.map(o=>i(U,{children:[i(K,{children:[r(X,{children:o.name}),i(ee,{children:[o.role," | ",o.org]})]}),r(b,{onClick:()=>p(o),icon:D,label:"Marcar no Mapa"})]}))}):r(C,{})})]})}),te=re,ie=t.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`,ne=t.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`,oe=s.forwardRef((e,c)=>{const[l,d]=s.useState();function m(){d(Date.now())}return i(h.Root,{onOpen:m,ref:c,children:[r(h.Header,{title:"Criar Aviso",subtitle:"Complete o campo abaixo antes de publicar o aviso"}),i(h.Content,{children:[i(ie,{children:[r(k,{max:60,autoFocus:!0,placeholder:"Título do aviso"}),r(A,{placeholder:"Descrição do aviso"})]}),r(ne,{children:r(M,{children:"Publicar"})})]})]})}),ae=oe,le=t.div`
  width: 100%;
  border: solid .1rem ${e=>e.theme.border.primary};
  border-radius: .6rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,se=t.p`
  color: ${e=>e.theme.text.title};
  font-size: 1.4rem;
  font-weight: 400;
`,ce=t.span`
  color: ${e=>e.theme.text.subtitle};
  font-size: 1.2rem;
  font-weight: 400;
`,de=t.div`
  display: flex;
  flex-direction: column;
`;function me({autor:e,id_autor:c,descricao:l,id:d,titulo:m,data:p}){const o=new Date(p),u=o.getDate(),a=String(o.getMonth()+1).padStart(2,"0"),P=o.getFullYear();return i(le,{children:[i(de,{children:[r(se,{children:m}),i(ce,{children:[u,"/",a,"/",P," - ",e," #",c]})]}),r(M,{size:"sm",children:"Ver mais"})]})}const he=s.memo(me);function ue(){var o,u;const{data:e,isLoading:c}=R(["getInitialData"],()=>x("getInitialData"),{initialData:{officer:{id:1,name:"Droyen Patrulheiro"},canStartPatrol:!0,totalOfPrisions:1243,totalOfFines:52,totalOfWorkingOfficers:34,notices:[{id:1,titulo:"Não colocar itens no baú",descricao:"Não coloquem itens no baú temporariamente",data:Date.now(),id_autor:1,autor:"Droyen Patrulheiro"}],permissions:["CAN_CREATE_NOTICE"]}}),l=s.useRef(null),d=s.useRef(null),m=()=>{var a;(a=l.current)==null||a.openModal()},p=()=>{var a;(a=d.current)==null||a.openModal()};return c||!e?r(w,{children:r(C,{})}):i(w,{children:[r(te,{ref:l}),r(ae,{ref:d}),r("div",{style:{gridArea:"banner"},children:r(f.Root,{style:{height:"100%"},children:i(f.Header,{children:[i(f.Title,{children:["Bem-vindo ",r("b",{children:(o=e==null?void 0:e.officer)==null?void 0:o.name}),"!"]}),(e==null?void 0:e.canStartPatrol)&&r(f.Action,{children:"Iniciar Patrulha"})]})})}),i(T,{children:[i(v,{children:[r("h1",{children:"Prisões"}),r("span",{children:e==null?void 0:e.totalOfPrisions.toLocaleString("pt-br")})]}),i(v,{children:[r("h1",{children:"Multas"}),r("span",{children:e==null?void 0:e.totalOfFines.toLocaleString("pt-br")})]})]}),r("div",{style:{gridArea:"warns"},children:i(n.Root,{children:[i(n.Header,{children:[i(n.Column,{children:[r(n.Title,{children:"Avisos"}),r(n.Subtitle,{children:"Resumo de avisos da guarnição"})]}),r(b,{onClick:p,label:"Criar aviso",icon:z})]}),r(n.Separator,{}),r(n.Content,{children:r(H,{children:(u=e==null?void 0:e.notices)==null?void 0:u.map(a=>r(he,{...a},a.id))})})]})}),r("div",{style:{gridArea:"players"},children:r(n.Root,{children:i(n.Header,{children:[i(n.Column,{children:[r(n.Title,{children:"Policiais On-line"}),i(n.Subtitle,{children:["Policiais ativos no momento (",e==null?void 0:e.totalOfWorkingOfficers,")"]})]}),r(b,{onClick:m,label:"Ver Policiais",icon:j})]})})}),r("div",{style:{gridArea:"chat"},children:r(Q,{})})]})}export{ue as default};
