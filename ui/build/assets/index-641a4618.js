import{s as t,C as s,r as c,j as r,a as e,B as h,Z as m,b as a,c as i}from"./index-a5ae1e1f.js";import{P as p}from"./plus-9ec6d706.js";const u=t(s)`
  display: grid;
  grid-template-areas: 
  'banner stats'
  'warns players'
  'graphic players';
  grid-template-columns: 65.6rem 34.5rem;
  grid-template-rows: 16.5rem auto 24.5rem;
  gap: 2rem;
`,g=t.div`
  display: flex;
  gap: 2rem;
`,d=t.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .2rem;
  flex: 1;
  height: 100%;
  border-radius: .6rem;
  border: solid .1rem ${n=>n.theme.border.primary};
  box-shadow: 0 .4rem .8rem 0 rgba(0, 0, 0, 0.025);

  h1 {
    font-size: 1.8rem;
    font-weight: 500;
    color: ${n=>n.theme.colors.primary};
  }

  span {
    font-size: 3rem;
    font-weight: 800;
    color: ${n=>n.theme.colors.primary};
  }
`,f=t.div`
  grid-area: warns;
`,b=t.div`
  grid-area: graphic;
`,y=t.div`
  grid-area: players;
  position: relative;
`,x=t.div`
  gap: .9rem;
  padding: 2rem 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
`,o=t.div`
  width: 100%;
  border: solid .1rem ${n=>n.theme.border.primary};
  border-radius: .6rem;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 .4rem .8rem 0 rgba(0, 0, 0, 0.025);

  p {
    font-size: 1.4rem;
    color: ${n=>n.theme.text.subtitle};
  }

  span {
    width: .8rem;
    height: .8rem;
    border-radius: 50%;
    background: ${n=>n.theme.colors.primary};
  }
`,v=t.div`
  padding: 1.5rem;
  height: 26.5rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,w=t.div`
  width: 100%;
  border: solid .1rem ${n=>n.theme.border.primary};
  border-radius: .6rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,P=t.p`
  color: ${n=>n.theme.text.title};
  font-size: 1.4rem;
  font-weight: 400;
`,C=t.span`
  color: ${n=>n.theme.text.subtitle};
  font-size: 1.2rem;
  font-weight: 400;
`,$=t.div`
  display: flex;
  flex-direction: column;
`;function z(){return r(w,{children:[r($,{children:[e(P,{children:"Não se esqueçam de aplicar multa na prisão!"}),e(C,{children:"Autor: John Doe"})]}),e(h,{size:"sm",children:"Ver mais"})]})}const l=c.memo(z);function j(){return m(),r(u,{children:[e(a.Root,{children:r(a.Header,{children:[r(a.Title,{children:["Bem-vindo ",e("b",{children:"John Doe"}),"!"]}),e(a.Action,{children:"Entrar em serviço"})]})}),r(g,{children:[r(d,{children:[e("h1",{children:"Prisões"}),e("span",{children:"2.541"})]}),r(d,{children:[e("h1",{children:"Multas"}),e("span",{children:"256"})]})]}),e(f,{children:r(i.Root,{children:[r(i.Header,{children:[r(i.Column,{children:[e(i.Title,{children:"Avisos"}),e(i.Subtitle,{children:"Resumo de avisos da guarnição"})]}),e(i.Action,{label:"Criar aviso",icon:p})]}),e(i.Separator,{}),e(i.Content,{children:r(v,{children:[e(l,{}),e(l,{}),e(l,{}),e(l,{}),e(l,{})]})})]})}),e(b,{children:r(i.Root,{children:[e(i.Header,{children:r(i.Column,{children:[e(i.Title,{children:"Gráfico de Apreensões"}),e(i.Subtitle,{children:"Indicador de apreensões diárias"})]})}),e(i.Content,{})]})}),e(y,{children:r(i.Root,{children:[e(i.Header,{children:r(i.Column,{children:[e(i.Title,{children:"Policiais On-line"}),e(i.Subtitle,{children:"Policiais ativos no momento (11)"})]})}),e(i.Separator,{}),e(i.Content,{children:r(x,{children:[r(o,{children:[e("p",{children:"Droyen dev"}),e("span",{})]}),r(o,{children:[e("p",{children:"Fall"}),e("span",{})]}),r(o,{children:[e("p",{children:"Nico"}),e("span",{})]}),r(o,{children:[e("p",{children:"Playbas"}),e("span",{})]}),r(o,{children:[e("p",{children:"guilto"}),e("span",{})]}),r(o,{children:[e("p",{children:"ggmochila"}),e("span",{})]}),r(o,{children:[e("p",{children:"nvk"}),e("span",{})]}),r(o,{children:[e("p",{children:"gordao"}),e("span",{})]}),r(o,{children:[e("p",{children:"utz_Jornal"}),e("span",{})]})]})})]})})]})}export{j as default};
