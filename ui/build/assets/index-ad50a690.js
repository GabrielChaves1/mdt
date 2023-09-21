import{c as g,s as t,C as y,r as a,j as i,a as e,B as b,b as p,Z as v,d as o,M as l,A as h,T as w,e as m,E as $,S as C}from"./index-77893275.js";const M=g("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),P=g("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),R=g("SendHorizonal",[["path",{d:"m3 3 3 9-3 9 19-9Z",key:"1aobqy"}],["path",{d:"M6 12h16",key:"s4cdu5"}]]),z=t(y)`
  display: grid;
  grid-template-areas: 
  'banner  stats'
  'warns   players'
  'warns   chat'
  'widget  chat';
  grid-template-columns: 65.6rem 34.5rem;
  grid-template-rows: 16.5rem 8.5rem auto 24.5rem;
  gap: 2rem;
`,A=t.div`
  display: flex;
  grid-area: stats;
  gap: 2rem;
`,f=t.div`
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
`;t.div`
  grid-area: warns;
  position: relative;
`;t.div`
  grid-area: graphic;
`;t.div`
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
`;const k=t.div`
  padding: 1.5rem;
  max-height: 26.55rem;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,S=t.div`
  width: 100%;
  border: solid .1rem ${r=>r.theme.border.primary};
  border-radius: .6rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,j=t.p`
  color: ${r=>r.theme.text.title};
  font-size: 1.4rem;
  font-weight: 400;
`,H=t.span`
  color: ${r=>r.theme.text.subtitle};
  font-size: 1.2rem;
  font-weight: 400;
`,T=t.div`
  display: flex;
  flex-direction: column;
`;function B(){return i(S,{children:[i(T,{children:[e(j,{children:"Não se esqueçam de aplicar multa na prisão!"}),e(H,{children:"Autor: John Doe"})]}),e(b,{size:"sm",children:"Ver mais"})]})}const c=a.memo(B),O=t.div`
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
  background: ${({theme:r})=>p(.85,r.colors.primary)};
`,N=t.p`
  font-size: 1.2rem;
  font-weight: 300;
  color: ${({theme:r})=>r.text.subtitle};
  user-select: text;
`,D=t.p`
  font-size: 1.4rem;
  font-weight: 300;
  color: ${({theme:r})=>r.text.title};
  user-select: text;
`,J=t.time`
  font-size: 1.2rem;
  font-weight: 300;
  color: ${({theme:r})=>r.text.subtitle};
  user-select: text;
`;function E(){return i(O,{children:[i(I,{children:[e(N,{children:"John Doe"}),e(D,{children:"Boa tarde pessoal!"})]}),e(J,{children:"Hoje ás 16:35"})]})}const u=a.memo(E),Z=t.div`
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
`,L=t.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.4rem 2.5rem;
`,W=t.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 1.2rem;
  border: solid .1rem ${({theme:r})=>r.border.primary};
  border-radius: .6rem;
  width: 100%;
`,F=t.input`
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
`,V=t.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  outline: none;
`;function _(){const{colors:r}=v();return i(o.Root,{children:[e(o.Header,{children:i(o.Column,{children:[e(o.Title,{children:"Chat Geral"}),e(o.Subtitle,{children:"Bate-papo geral da policia"})]})}),e(o.Separator,{}),e(o.Content,{children:i(Z,{children:[i(q,{children:[e(u,{}),e(u,{}),e(u,{})]}),e(o.Separator,{}),e(L,{children:i(W,{children:[e(F,{placeholder:"Mensagem..."}),e(V,{children:e(R,{color:r.primary})})]})})]})})]})}const G=t.div`
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
`,Q=t.div`
  width: 100%;
  display: flex;
  padding: 1rem 1.3rem;
  justify-content: space-between;
  align-items: center;
  border-radius: .6rem;
  border: .1rem solid ${({theme:r})=>r.border.primary};
`,U=t.p`
  color: ${({theme:r})=>r.text.title};
  font-size: 1.4rem;
  font-weight: 400;
`,X=t.span`
  padding: .5rem 1rem;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({theme:r})=>r.text.title};
  border-radius: 3rem;
  background: ${({theme:r})=>p(.8,r.colors.primary)};
`;t.button`
  width: 3.3rem;
  height: 3.3rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: solid .1rem ${({theme:r})=>r.border.primary};
  background: none;
  position: relative;
  overflow: hidden;
`;const Y=a.forwardRef((r,n)=>{function d(){}return i(l.Root,{onOpen:d,ref:n,children:[e(l.Header,{title:"Policiais On-line",subtitle:"Atualmente há 5 policiais em serviço"}),e(l.Content,{children:e(G,{children:i(Q,{children:[i(K,{children:[e(U,{children:"John Doe"}),e(X,{children:"Coronel | PMERJ"})]}),e(h,{icon:M,label:"Marcar no Mapa"})]})})})]})}),ee=Y,re=t.textarea`
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
`,oe=a.forwardRef((r,n)=>{function d(){}return i(l.Root,{onOpen:d,ref:n,children:[e(l.Header,{title:"Criar Aviso",subtitle:"Complete o campo abaixo antes de publicar o aviso"}),i(l.Content,{children:[i(te,{children:[e(w,{autoFocus:!0,placeholder:"Título do aviso"}),e(re,{placeholder:"Descrição do aviso"})]}),e(ie,{children:e(b,{children:"Publicar"})})]})]})}),ne=oe;function ae(){const r=a.useRef(null),n=a.useRef(null),d=()=>{var s;(s=r.current)==null||s.openModal()},x=()=>{var s;(s=n.current)==null||s.openModal()};return i(z,{children:[e(ee,{ref:r}),e(ne,{ref:n}),e("div",{style:{gridArea:"banner"},children:e(m.Root,{style:{height:"100%"},children:i(m.Header,{children:[i(m.Title,{children:["Bem-vindo ",e("b",{children:"John Doe"}),"!"]}),e(m.Action,{children:"Iniciar Patrulha"})]})})}),i(A,{children:[i(f,{children:[e("h1",{children:"Prisões"}),e("span",{children:"2.541"})]}),i(f,{children:[e("h1",{children:"Multas"}),e("span",{children:"256"})]})]}),e("div",{style:{gridArea:"warns"},children:i(o.Root,{children:[i(o.Header,{children:[i(o.Column,{children:[e(o.Title,{children:"Avisos"}),e(o.Subtitle,{children:"Resumo de avisos da guarnição"})]}),e(h,{onClick:x,label:"Criar aviso",icon:P})]}),e(o.Separator,{}),e(o.Content,{children:i(k,{children:[e(c,{}),e(c,{}),e(c,{}),e(c,{}),e(c,{})]})})]})}),e("div",{style:{gridArea:"players"},children:e(o.Root,{children:i(o.Header,{children:[i(o.Column,{children:[e(o.Title,{children:"Policiais On-line"}),e(o.Subtitle,{children:"Policiais ativos no momento (11)"})]}),e(h,{onClick:d,label:"Ver Policiais",icon:$})]})})}),e("div",{style:{gridArea:"widget"},children:i(o.Root,{children:[i(o.Header,{children:[e(o.Column,{children:e(o.Title,{children:"Mural de Procurados"})}),e(h,{label:"Selecionar Widget",icon:C})]}),e(o.Separator,{}),e(o.Content,{})]})}),e("div",{style:{gridArea:"chat"},children:e(_,{})})]})}export{ae as default};
