import{s as o,C as h,Z as m,a as e,d as r,j as n,I as i,T as s,b as a,e as l}from"./index-737cf395.js";import{P as d}from"./plus-3c63a36e.js";const p=o(h)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,u=o.div`
  display: grid;
  flex: 1;
  grid-template-columns: 44.2rem 55.9rem;
  grid-template-rows: auto auto 32.9rem;
  grid-template-areas:
  'violator policers'
  'violator crimeSelector'
  'prisonDetails crimeSelector';
  gap: 2rem;
`,g=o.div`
  grid-area: violator;
`,f=o.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;
`,C=o.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`,c=o.button`
  flex: 1;
  height: 10rem;
  display: grid;
  place-items: center;
  border: solid .1rem ${t=>t.theme.border.primary};
  border-radius: .6rem;
  background: none;

  svg path {
    fill: ${t=>t.theme.colors.icon};
  }
`;function v(){const{colors:t}=m();return e(g,{children:e(r.Root,{children:e(r.Content,{children:n(f,{children:[n(i.Root,{children:[e(i.Header,{children:e(i.Label,{children:"Infrator"})}),e(i.Content,{children:e(s,{placeholder:"Nenhum infrator anexado"})})]}),n(i.Root,{children:[e(i.Header,{children:e(i.Label,{children:"Imagens do infrator"})}),e(i.Content,{children:n(C,{children:[e(c,{children:e(d,{size:34,strokeWidth:1.5,color:a(.6,t.icon)})}),e(c,{children:e(d,{size:34,strokeWidth:1.5,color:a(.6,t.icon)})}),e(c,{children:e(d,{size:34,strokeWidth:1.5,color:a(.6,t.icon)})})]})})]})]})})})})}const x=o.div`
  grid-area: policers;
`,S=o.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;
`;function b(){return e(x,{children:e(r.Root,{children:e(r.Content,{children:e(S,{children:n(i.Root,{children:[e(i.Header,{children:e(i.Label,{children:"Policiais Envolvidos"})}),e(i.Content,{children:e(s,{placeholder:"Selecionar..."})})]})})})})})}const R=o.div`
  grid-area: prisonDetails;
`;function y(){return e(R,{children:n(r.Root,{children:[e(r.Header,{children:n(r.Column,{children:[e(r.Title,{children:"Dados da prisão"}),e(r.Subtitle,{children:"Detalhes sobre a prisão"})]})}),e(r.Separator,{}),e(r.Content,{})]})})}const W=o.div`
  grid-area: crimeSelector;
`;function P(){return e(W,{children:n(r.Root,{children:[e(r.Header,{children:n(r.Column,{children:[e(r.Title,{children:"Selecionar Crimes"}),e(r.Subtitle,{children:"Lista de artigos criminais"})]})}),e(r.Separator,{}),e(r.Content,{})]})})}function I(){return n(p,{children:[n(l.Root,{children:[e(l.Header,{children:e(l.Title,{children:"Registrar prisão"})}),e(l.Action,{children:"Confirmar"})]}),n(u,{children:[e(v,{}),e(b,{}),e(y,{}),e(P,{})]})]})}export{I as default};
