import{c as f,s as i,C as y,r as a,j as t,a as e,B as x,b as p,Z as w,d as o,M as l,A as h,T as v,e as m,S as $}from"./index-737cf395.js";import{P as C}from"./plus-3c63a36e.js";const M=f("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),P=f("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),z=f("SendHorizonal",[["path",{d:"m3 3 3 9-3 9 19-9Z",key:"1aobqy"}],["path",{d:"M6 12h16",key:"s4cdu5"}]]),R=i(y)`
  display: grid;
  grid-template-areas: 
  'banner  stats'
  'warns   players'
  'warns   chat'
  'widget  chat';
  grid-template-columns: 65.6rem 34.5rem;
  grid-template-rows: 16.5rem 8.5rem auto 24.5rem;
  gap: 2rem;
`,A=i.div`
  display: flex;
  grid-area: stats;
  gap: 2rem;
`,g=i.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .2rem;
  flex: 1;
  height: 100%;
  border-radius: .6rem;
  border: solid .1rem ${r=>r.theme.border.primary};
  box-shadow: 0 .4rem .8rem 0 rgba(0, 0, 0, 0.025);

  h1 {
    font-size: 1.8rem;
    font-weight: 500;
    color: ${r=>r.theme.colors.primary};
  }

  span {
    font-size: 3rem;
    font-weight: 800;
    color: ${r=>r.theme.colors.primary};
  }
`;i.div`
  grid-area: warns;
  position: relative;
`;i.div`
  grid-area: graphic;
`;i.div`
  width: 100%;
  border: solid .1rem ${r=>r.theme.border.primary};
  border-radius: .6rem;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 .4rem .8rem 0 rgba(0, 0, 0, 0.025);

  p {
    font-size: 1.4rem;
    color: ${r=>r.theme.text.subtitle};
  }

  span {
    width: .8rem;
    height: .8rem;
    border-radius: 50%;
    background: ${r=>r.theme.colors.primary};
  }
`;const k=i.div`
  padding: 1.5rem;
  max-height: 26.55rem;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,S=i.div`
  width: 100%;
  border: solid .1rem ${r=>r.theme.border.primary};
  border-radius: .6rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,j=i.p`
  color: ${r=>r.theme.text.title};
  font-size: 1.4rem;
  font-weight: 400;
`,H=i.span`
  color: ${r=>r.theme.text.subtitle};
  font-size: 1.2rem;
  font-weight: 400;
`,T=i.div`
  display: flex;
  flex-direction: column;
`;function B(){return t(S,{children:[t(T,{children:[e(j,{children:"Não se esqueçam de aplicar multa na prisão!"}),e(H,{children:"Autor: John Doe"})]}),e(x,{size:"sm",children:"Ver mais"})]})}const s=a.memo(B),O=i.div`
  display: flex;
  flex-direction: column;
  gap: .4rem;
`,I=i.div`
  display: flex;
  flex-direction: column;
  gap: .2rem;
  padding: 1rem;
  width: max-content;
  border-radius: .7rem .7rem .7rem 0;
  background: ${({theme:r})=>p(.85,r.colors.primary)};
`,N=i.p`
  font-size: 1.2rem;
  font-weight: 300;
  color: ${({theme:r})=>r.text.subtitle};
  user-select: text;
`,D=i.p`
  font-size: 1.4rem;
  font-weight: 300;
  color: ${({theme:r})=>r.text.title};
  user-select: text;
`,J=i.time`
  font-size: 1.2rem;
  font-weight: 300;
  color: ${({theme:r})=>r.text.subtitle};
  user-select: text;
`;function Z(){return t(O,{children:[t(I,{children:[e(N,{children:"John Doe"}),e(D,{children:"Boa tarde pessoal!"})]}),e(J,{children:"Hoje ás 16:35"})]})}const u=a.memo(Z),E=i.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`,q=i.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 2.5rem;
  height: 31.5rem;
  overflow-y: auto;
  position: relative;
`,L=i.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.4rem 2.5rem;
`,W=i.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 1.2rem;
  border: solid .1rem ${({theme:r})=>r.border.primary};
  border-radius: .6rem;
  width: 100%;
`,F=i.input`
  background: none;
  border: none;
  outline: none;
  flex: 1;
  color: ${({theme:r})=>r.text.title};
  font-size: 1.4rem;
  font-weight: 300;
  
  &::placeholder {
    color: ${({theme:r})=>p(.6,r.text.title)}
  }
`,V=i.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  outline: none;
`;function _(){const{colors:r}=w();return t(o.Root,{children:[e(o.Header,{children:t(o.Column,{children:[e(o.Title,{children:"Chat Geral"}),e(o.Subtitle,{children:"Bate-papo geral da policia"})]})}),e(o.Separator,{}),e(o.Content,{children:t(E,{children:[t(q,{children:[e(u,{}),e(u,{}),e(u,{})]}),e(o.Separator,{}),e(L,{children:t(W,{children:[e(F,{placeholder:"Mensagem..."}),e(V,{children:e(z,{color:r.primary})})]})})]})})]})}const G=i.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  max-height: 50rem;
  overflow: auto;
`,K=i.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  cursor: pointer;
`,Q=i.div`
  width: 100%;
  display: flex;
  padding: 1rem 1.3rem;
  justify-content: space-between;
  align-items: center;
  border-radius: .6rem;
  border: .1rem solid ${({theme:r})=>r.border.primary};
`,U=i.p`
  color: ${({theme:r})=>r.text.title};
  font-size: 1.4rem;
  font-weight: 400;
`,X=i.span`
  padding: .5rem 1rem;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({theme:r})=>r.text.title};
  border-radius: 3rem;
  background: ${({theme:r})=>p(.8,r.colors.primary)};
`;i.button`
  width: 3.3rem;
  height: 3.3rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: solid .1rem ${({theme:r})=>r.border.primary};
  background: none;
  position: relative;
  overflow: hidden;
`;const Y=a.forwardRef((r,n)=>{function d(){}return t(l.Root,{onOpen:d,ref:n,children:[e(l.Header,{title:"Policiais On-line",subtitle:"Atualmente há 5 policiais em serviço"}),e(l.Content,{children:e(G,{children:t(Q,{children:[t(K,{children:[e(U,{children:"John Doe"}),e(X,{children:"Coronel | PMERJ"})]}),e(h,{icon:P,label:"Marcar no Mapa"})]})})})]})}),ee=Y,re=i.textarea`
  resize: none;
  width: 100%;
  height: 11.6rem;
  padding: 1.2rem 1rem;
  border: solid .1rem ${r=>r.theme.border.primary};
  border-radius: .6rem;
  background: none;
  
  font-size: 1.4rem;
  font-weight: 300;
  color: ${r=>r.theme.text.title};

  &::placeholder {
    color: ${r=>p(.7,r.theme.text.title)};
  }
`,ie=i.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`,te=i.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`,oe=a.forwardRef((r,n)=>{function d(){}return t(l.Root,{onOpen:d,ref:n,children:[e(l.Header,{title:"Criar Aviso",subtitle:"Complete o campo abaixo antes de publicar o aviso"}),t(l.Content,{children:[t(ie,{children:[e(v,{autoFocus:!0,placeholder:"Título do aviso"}),e(re,{placeholder:"Descrição do aviso"})]}),e(te,{children:e(x,{children:"Publicar"})})]})]})}),ne=oe;function de(){const r=a.useRef(null),n=a.useRef(null),d=()=>{var c;(c=r.current)==null||c.openModal()},b=()=>{var c;(c=n.current)==null||c.openModal()};return t(R,{children:[e(ee,{ref:r}),e(ne,{ref:n}),e("div",{style:{gridArea:"banner"},children:e(m.Root,{style:{height:"100%"},children:t(m.Header,{children:[t(m.Title,{children:["Bem-vindo ",e("b",{children:"John Doe"}),"!"]}),e(m.Action,{children:"Iniciar Patrulha"})]})})}),t(A,{children:[t(g,{children:[e("h1",{children:"Prisões"}),e("span",{children:"2.541"})]}),t(g,{children:[e("h1",{children:"Multas"}),e("span",{children:"256"})]})]}),e("div",{style:{gridArea:"warns"},children:t(o.Root,{children:[t(o.Header,{children:[t(o.Column,{children:[e(o.Title,{children:"Avisos"}),e(o.Subtitle,{children:"Resumo de avisos da guarnição"})]}),e(h,{onClick:b,label:"Criar aviso",icon:C})]}),e(o.Separator,{}),e(o.Content,{children:t(k,{children:[e(s,{}),e(s,{}),e(s,{}),e(s,{}),e(s,{})]})})]})}),e("div",{style:{gridArea:"players"},children:e(o.Root,{children:t(o.Header,{children:[t(o.Column,{children:[e(o.Title,{children:"Policiais On-line"}),e(o.Subtitle,{children:"Policiais ativos no momento (11)"})]}),e(h,{onClick:d,label:"Ver Policiais",icon:M})]})})}),e("div",{style:{gridArea:"widget"},children:t(o.Root,{children:[t(o.Header,{children:[e(o.Column,{children:e(o.Title,{children:"Mural de Procurados"})}),e(h,{label:"Selecionar Widget",icon:$})]}),e(o.Separator,{}),e(o.Content,{})]})}),e("div",{style:{gridArea:"chat"},children:e(_,{})})]})}export{de as default};
