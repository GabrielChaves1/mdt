import{c as v,s as t,C as M,a as y,r as l,j as i,b as r,X as P,d as o,M as d,A as b,T as O,e as R,B as $,u as S,L as A,f as u,P as z,E as k,g as D}from"./index-748f3a2a.js";const j=v("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),N=v("SendHorizonal",[["path",{d:"m3 3 3 9-3 9 19-9Z",key:"1aobqy"}],["path",{d:"M6 12h16",key:"s4cdu5"}]]),x=t(M)`
  display: grid;
  grid-template-areas: 
  'banner  stats'
  'warns   players'
  'warns   chat'
  'warns  chat';
  grid-template-columns: 65.6rem 34.5rem;
  grid-template-rows: 16.5rem 8.5rem auto 24.5rem;
  gap: 2rem;
`,T=t.div`
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
  background: ${({theme:e})=>y(.85,e.colors.primary)};
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
`;function _(){return i(B,{children:[i(I,{children:[r(L,{children:"John Doe"}),r(E,{children:"Boa tarde pessoal!"})]}),r(F,{children:"Hoje ás 16:35"})]})}const g=l.memo(_),W=t.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`,q=t.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 2.5rem;
  height: 100%;
  overflow-y: auto;
  position: relative;
`,J=t.div`
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
`,X=t.input`
  background: none;
  border: none;
  outline: none;
  flex: 1;
  color: ${({theme:e})=>e.text.title};
  font-size: 1.4rem;
  font-weight: 300;
  
  &::placeholder {
    color: ${({theme:e})=>y(.6,e.text.title)}
  }
`,Z=t.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  outline: none;
`;function G(){const{colors:e}=P();return i(o.Root,{children:[r(o.Header,{children:i(o.Column,{children:[r(o.Title,{children:"Chat Geral"}),r(o.Subtitle,{children:"Bate-papo geral da policia"})]})}),r(o.Separator,{}),r(o.Content,{children:i(W,{children:[i(q,{children:[r(g,{}),r(g,{}),r(g,{})]}),r(o.Separator,{}),r(J,{children:i(V,{children:[r(X,{placeholder:"Mensagem..."}),r(Z,{children:r(N,{color:e.primary})})]})})]})})]})}const Q=t.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  max-height: 50rem;
  overflow: auto;
`,Y=t.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  cursor: pointer;
`,K=t.div`
  width: 100%;
  display: flex;
  padding: 1rem 1.3rem;
  justify-content: space-between;
  align-items: center;
  border-radius: .6rem;
  border: .1rem solid ${({theme:e})=>e.border.primary};
`,U=t.p`
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
  background: ${({theme:e})=>y(.8,e.colors.primary)};
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
`;const re=l.forwardRef((e,a)=>{function s(){}return i(d.Root,{onOpen:s,ref:a,children:[r(d.Header,{title:"Policiais On-line",subtitle:"Atualmente há 5 policiais em serviço"}),r(d.Content,{children:r(Q,{children:i(K,{children:[i(Y,{children:[r(U,{children:"John Doe"}),r(ee,{children:"Coronel | PMERJ"})]}),r(b,{icon:j,label:"Marcar no Mapa"})]})})})]})}),te=re,ie=t.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`,oe=t.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`,ne=l.forwardRef((e,a)=>{const[s,m]=l.useState();function h(){m(Date.now())}return i(d.Root,{onOpen:h,ref:a,children:[r(d.Header,{title:"Criar Aviso",subtitle:"Complete o campo abaixo antes de publicar o aviso"}),i(d.Content,{children:[i(ie,{children:[r(O,{max:60,autoFocus:!0,placeholder:"Título do aviso"}),r(R,{placeholder:"Descrição do aviso"})]}),r(oe,{children:r($,{children:"Publicar"})})]})]})}),ae=ne,le=t.div`
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
`;function me({autor:e,id_autor:a,descricao:s,id:m,titulo:h,data:f}){const c=new Date(f),p=c.getDate(),n=String(c.getMonth()+1).padStart(2,"0"),C=c.getFullYear();return i(le,{children:[i(de,{children:[r(se,{children:h}),i(ce,{children:[p,"/",n,"/",C," - ",e," #",a]})]}),r($,{size:"sm",children:"Ver mais"})]})}const he=l.memo(me);function ue(){var c,p;const{data:e,isLoading:a}=S(["getInitialData"],()=>D("getInitialData"),{initialData:{officer:{id:1,name:"Droyen Patrulheiro"},canStartPatrol:!0,totalOfPrisions:1243,totalOfFines:52,totalOfWorkingOfficers:34,notices:[{id:1,titulo:"Não colocar itens no baú",descricao:"Não coloquem itens no baú temporariamente",data:Date.now(),id_autor:1,autor:"Droyen Patrulheiro"}],permissions:["CAN_CREATE_NOTICE"]}}),s=l.useRef(null),m=l.useRef(null),h=()=>{var n;(n=s.current)==null||n.openModal()},f=()=>{var n;(n=m.current)==null||n.openModal()};return a||!e?r(x,{children:r(A,{})}):i(x,{children:[r(te,{ref:s}),r(ae,{ref:m}),r("div",{style:{gridArea:"banner"},children:r(u.Root,{style:{height:"100%"},children:i(u.Header,{children:[i(u.Title,{children:["Bem-vindo ",r("b",{children:(c=e==null?void 0:e.officer)==null?void 0:c.name}),"!"]}),(e==null?void 0:e.canStartPatrol)&&r(u.Action,{children:"Iniciar Patrulha"})]})})}),i(T,{children:[i(w,{children:[r("h1",{children:"Prisões"}),r("span",{children:e==null?void 0:e.totalOfPrisions.toLocaleString("pt-br")})]}),i(w,{children:[r("h1",{children:"Multas"}),r("span",{children:e==null?void 0:e.totalOfFines.toLocaleString("pt-br")})]})]}),r("div",{style:{gridArea:"warns"},children:i(o.Root,{children:[i(o.Header,{children:[i(o.Column,{children:[r(o.Title,{children:"Avisos"}),r(o.Subtitle,{children:"Resumo de avisos da guarnição"})]}),r(b,{onClick:f,label:"Criar aviso",icon:z})]}),r(o.Separator,{}),r(o.Content,{children:r(H,{children:(p=e==null?void 0:e.notices)==null?void 0:p.map(n=>r(he,{...n},n.id))})})]})}),r("div",{style:{gridArea:"players"},children:r(o.Root,{children:i(o.Header,{children:[i(o.Column,{children:[r(o.Title,{children:"Policiais On-line"}),i(o.Subtitle,{children:["Policiais ativos no momento (",e==null?void 0:e.totalOfWorkingOfficers,")"]})]}),r(b,{onClick:h,label:"Ver Policiais",icon:k})]})})}),r("div",{style:{gridArea:"chat"},children:r(G,{})})]})}export{ue as default};
