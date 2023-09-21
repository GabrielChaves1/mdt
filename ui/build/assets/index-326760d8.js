import{c as x,s as o,C as y,r as c,j as i,a as e,B as b,b as w,d as u,i as P}from"./index-2e6b3bed.js";import{T as m}from"./index-97cb2b98.js";import{M as a,A as g,E as v}from"./index-ec06df8f.js";import{T as C}from"./index-82102e7f.js";import{S as p}from"./index-f5239b35.js";import"./index-1cb2d457.js";const M=x("FileEdit",[["path",{d:"M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5",key:"1bg6eb"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z",key:"1rgxu8"}]]),R=x("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),$=o(y)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,E=o.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`,S=o.div`
  display: flex;
  flex-direction: column;
`,h=o.div`
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
`,z=c.forwardRef((r,t)=>{const[l,d]=c.useState("");function n(s){d(s.role)}return i(a.Root,{onOpen:n,ref:t,children:[e(a.Header,{title:`Editar Permissões | ${l}`,subtitle:"Aqui você poderá editar as permissões do cargo selecionado"}),e(a.Content,{children:i(E,{children:[e(C,{placeholder:"Pesquisar...",icon:R}),i(S,{children:[i(h,{children:[i(f,{children:[e("p",{children:"Prender"}),e("span",{children:"Os oficiais com essa permissão poderão prender cidadãos"})]}),e(p,{})]}),i(h,{children:[i(f,{children:[e("p",{children:"Multar"}),e("span",{children:"Os oficiais com essa permissão poderão multar cidadãos"})]}),e(p,{})]}),i(h,{children:[i(f,{children:[e("p",{children:"Criar Operações"}),e("span",{children:"Os oficiais com essa permissão poderão criar operações"})]}),e(p,{})]}),i(h,{children:[i(f,{children:[e("p",{children:"Exonerar Membros"}),e("span",{children:"Os oficiais com essa permissão poderão exonerar oficiais"})]}),e(p,{})]}),i(h,{children:[i(f,{children:[e("p",{children:"Promover Membros"}),e("span",{children:"Os oficiais com essa permissão poderão promover oficiais"})]}),e(p,{})]})]}),e(j,{children:e(b,{children:"Salvar Alterações"})})]})})]})}),k=z,A=o.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 50rem;
  overflow: auto;
`,O=o.div`
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
`,q=o.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  padding: .3rem;
  border: solid .1rem ${({theme:r})=>r.border.primary};
  object-fit: cover;
`,H=o.div`
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
    text-shadow:  0rem .1rem .7rem ${({theme:r})=>w(.7,r.colors.primary)};
  }
`,I=c.forwardRef((r,t)=>{const[l,d]=c.useState("");function n(s){d(s.role)}return i(a.Root,{onOpen:n,ref:t,children:[e(a.Header,{title:`Policiais com o cargo - ${l}`,subtitle:"Aqui você poderá visualizar todos oficiais que possuem o cargo selecionado"}),e(a.Content,{children:e(A,{children:i(O,{children:[i(T,{children:[e(q,{src:"https://cdn.ome.lt/XmNgZkW2CggS6RGXiEz55spbmQs=/970x360/smart/uploads/conteudo/fotos/gta-franklin-selfie-topo.jpg"}),i(H,{children:[e("p",{children:"Gabriel Droyen"}),e("span",{children:l})]})]}),e(g,{icon:v,label:"Ver Perfil"})]})})})]})}),G=I;function W(){const r=c.useRef(null),t=c.useRef(null),l=n=>{var s;(s=r.current)==null||s.openModal({role:n})},d=n=>{var s;(s=t.current)==null||s.openModal({role:n})};return i($,{children:[e(G,{ref:t}),e(k,{ref:r}),e(u.Root,{children:e(u.Header,{children:e(u.Title,{children:"Hierarquia de Cargos"})})}),e(m.Root,{headColumns:["ID","Cargo","Ações"],children:i(m.Row,{children:[e(m.Item,{children:"#1"}),e(m.Item,{children:"Comandante Geral"}),i(m.Item,{children:[e(g,{icon:M,size:"sm",label:"Editar Permissões",onClick:()=>l("Comandante Geral")}),e(g,{icon:P,size:"sm",label:"Visualizar Oficiais",onClick:()=>d("Comandante Geral")})]})]})})]})}export{W as default};
