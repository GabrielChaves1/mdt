import{c as g,s as o,C as y,r as c,j as i,M as t,b as e,T as b,S as m,B as w,a as v,h as P,A as x,E as M,f as u,i as h,U as C}from"./index-93699eff.js";const R=g("FileEdit",[["path",{d:"M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5",key:"1bg6eb"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z",key:"1rgxu8"}]]),$=g("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),E=o(y)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,A=o.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`,S=o.div`
  display: flex;
  flex-direction: column;
`,p=o.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,f=o.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  justify-content: center;

  p {
    font-size: 1.4rem;
    color: ${({theme:r})=>r.text.title};
    font-weight: 400;
  }

  span {
    font-size: 1.2rem;
    color: ${({theme:r})=>r.text.subtitle};
    font-weight: 400;
  }
`,j=o.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1rem;
`,z=c.forwardRef((r,a)=>{const[l,d]=c.useState("");function n(s){d(s.role)}return i(t.Root,{onOpen:n,ref:a,children:[e(t.Header,{title:`Editar Permissões | ${l}`,subtitle:"Aqui você poderá editar as permissões do cargo selecionado"}),e(t.Content,{children:i(A,{children:[e(b,{placeholder:"Pesquisar...",icon:$}),i(S,{children:[i(p,{children:[i(f,{children:[e("p",{children:"Prender"}),e("span",{children:"Os oficiais com essa permissão poderão prender cidadãos"})]}),e(m,{})]}),i(p,{children:[i(f,{children:[e("p",{children:"Multar"}),e("span",{children:"Os oficiais com essa permissão poderão multar cidadãos"})]}),e(m,{})]}),i(p,{children:[i(f,{children:[e("p",{children:"Criar Operações"}),e("span",{children:"Os oficiais com essa permissão poderão criar operações"})]}),e(m,{})]}),i(p,{children:[i(f,{children:[e("p",{children:"Exonerar Membros"}),e("span",{children:"Os oficiais com essa permissão poderão exonerar oficiais"})]}),e(m,{})]}),i(p,{children:[i(f,{children:[e("p",{children:"Promover Membros"}),e("span",{children:"Os oficiais com essa permissão poderão promover oficiais"})]}),e(m,{})]})]}),e(j,{children:e(w,{children:"Salvar Alterações"})})]})})]})}),O=z,k=o.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 50rem;
  overflow: auto;
`,q=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid .1rem ${({theme:r})=>r.border.primary};
  padding: 1rem 1.3rem;
  border-radius: .6rem;
`,T=o.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;o.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  padding: .3rem;
  border: solid .1rem ${({theme:r})=>r.border.primary};
  object-fit: cover;
`;const H=o.div`
  display: flex;
  flex-direction: column;

  p {
    color: ${({theme:r})=>r.text.title};
    font-weight: 400;
    font-size: 1.4rem;
    line-height: none;
  }

  span {
    font-size: 1.2rem;
    font-weight: 400;
    color: ${({theme:r})=>r.colors.primary};
    line-height: none;
    text-shadow:  0rem .1rem .7rem ${({theme:r})=>v(.7,r.colors.primary)};
  }
`,I=c.forwardRef((r,a)=>{const[l,d]=c.useState("");function n(s){d(s.role)}return i(t.Root,{onOpen:n,ref:a,children:[e(t.Header,{title:`Policiais com o cargo - ${l}`,subtitle:"Aqui você poderá visualizar todos oficiais que possuem o cargo selecionado"}),e(t.Content,{children:e(k,{children:i(q,{children:[i(T,{children:[e(P,{}),i(H,{children:[e("p",{children:"Gabriel Droyen"}),e("span",{children:l})]})]}),e(x,{icon:M,label:"Ver Perfil"})]})})})]})}),L=I;function V(){const r=c.useRef(null),a=c.useRef(null),l=n=>{var s;(s=r.current)==null||s.openModal({role:n})},d=n=>{var s;(s=a.current)==null||s.openModal({role:n})};return i(E,{children:[e(L,{ref:a}),e(O,{ref:r}),e(u.Root,{children:e(u.Header,{children:e(u.Title,{children:"Hierarquia de Cargos"})})}),e(h.Root,{headColumns:["ID","Cargo","Ações"],children:i(h.Row,{children:[e(h.Item,{children:"#1"}),e(h.Item,{children:"Comandante Geral"}),i(h.Item,{children:[e(x,{icon:R,size:"sm",label:"Editar Permissões",onClick:()=>l("Comandante Geral")}),e(x,{icon:C,size:"sm",label:"Visualizar Oficiais",onClick:()=>d("Comandante Geral")})]})]})})]})}export{V as default};
