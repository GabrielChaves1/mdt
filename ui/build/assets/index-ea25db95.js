import{C as m,a as i,P as a,B as l}from"./index-7e4482bf.js";import{s as t,j as e,d,r as p,Z as u,a as o}from"./index-21f0753e.js";const f=t(m)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,g=t.div`
  display: grid;
  grid-template-columns: 44.2rem 55.9rem;
  grid-template-rows: auto auto 32.9rem;
  grid-template-areas:
  'violator policers'
  'violator crimeSelector'
  'prisonDetails crimeSelector';
  gap: 2rem;
`,x=t.div`
  grid-area: violator;
`,C=t.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;
`,b=t.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`,c=t.button`
  flex: 1;
  height: 9.6rem;
  display: grid;
  place-items: center;
  border: solid .1rem ${r=>r.theme.border.primary};
  border-radius: .6rem;
  background: none;

  svg path {
    fill: ${r=>r.theme.colors.icon};
  }
`,v=t.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,R=t.div`
  display: flex;
  flex-direction: column;
`,S=t.p`
  font-size: 1.6rem;
  color: ${r=>r.theme.text.title};
  font-weight: 400;
`,y=t.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`;function H({children:r}){return e(y,{children:r})}function I({children:r}){return e(R,{children:r})}function $({children:r}){return e(S,{children:r})}function W({children:r}){return e(v,{children:r})}const n={Root:W,Header:I,Label:$,Content:H},w=t.input`
  width: 100%;
  padding: 1.2rem 1rem;
  border: solid .1rem ${r=>r.theme.border.primary};
  border-radius: .6rem;
  background: none;
  
  font-size: 1.4rem;
  font-weight: 300;
  color: ${r=>r.theme.text.title};

  &::placeholder {
    color: ${r=>d(.7,r.theme.text.title)};
  }
`,s=p.forwardRef((r,h)=>e(w,{ref:h,...r}));function L(){const{colors:r}=u();return e(x,{children:e(i.Root,{children:e(i.Content,{children:o(C,{children:[o(n.Root,{children:[e(n.Header,{children:e(n.Label,{children:"Infrator"})}),e(n.Content,{children:e(s,{placeholder:"Nenhum infrator anexado"})})]}),o(n.Root,{children:[e(n.Header,{children:e(n.Label,{children:"Imagens do infrator"})}),e(n.Content,{children:o(b,{children:[e(c,{children:e(a,{size:34,strokeWidth:1.5,color:d(.6,r.icon)})}),e(c,{children:e(a,{size:34,strokeWidth:1.5,color:d(.6,r.icon)})}),e(c,{children:e(a,{size:34,strokeWidth:1.5,color:d(.6,r.icon)})})]})})]})]})})})})}const P=t.div`
  grid-area: policers;
`,z=t.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;
`;function D(){return e(P,{children:e(i.Root,{children:e(i.Content,{children:e(z,{children:o(n.Root,{children:[e(n.Header,{children:e(n.Label,{children:"Policiais Envolvidos"})}),e(n.Content,{children:e(s,{placeholder:"Selecionar..."})})]})})})})})}const T=t.div`
  grid-area: prisonDetails;
`;function k(){return e(T,{children:o(i.Root,{children:[e(i.Header,{children:o(i.Column,{children:[e(i.Title,{children:"Dados da prisão"}),e(i.Subtitle,{children:"Detalhes sobre a prisão"})]})}),e(i.Separator,{}),e(i.Content,{})]})})}const j=t.div`
  grid-area: crimeSelector;
`;function A(){return e(j,{children:o(i.Root,{children:[e(i.Header,{children:o(i.Column,{children:[e(i.Title,{children:"Selecionar Crimes"}),e(i.Subtitle,{children:"Lista de artigos criminais"})]})}),e(i.Separator,{}),e(i.Content,{})]})})}function E(){return o(f,{children:[o(l.Root,{children:[e(l.Header,{children:e(l.Title,{children:"Registrar prisão"})}),e(l.Action,{children:"Confirmar"})]}),o(g,{children:[e(L,{}),e(D,{}),e(k,{}),e(A,{})]})]})}export{E as default};
