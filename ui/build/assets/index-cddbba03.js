import{c as S,s as a,C as $,r as d,j as r,M as p,b as e,T as E,S as A,h as k,L as b,B as z,f as P,a as L,i as j,A as w,E as H,u as I,g as x,k as g,F as T,U as q}from"./index-a953b61c.js";const F=S("FileEdit",[["path",{d:"M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5",key:"1bg6eb"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z",key:"1rgxu8"}]]),U=a($)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,O=a.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`,V=a.div`
  display: flex;
  flex-direction: column;
`,B=a.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,D=a.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  justify-content: center;

  p {
    font-size: 1.4rem;
    color: ${({theme:i})=>i.text.title};
    font-weight: 400;
  }

  span {
    font-size: 1.2rem;
    color: ${({theme:i})=>i.text.subtitle};
    font-weight: 400;
  }
`,G=a.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1rem;
`,N=d.forwardRef(({onClose:i},f)=>{const[s,h]=d.useState({}),[c,m]=d.useState([]),[u,n]=d.useState([]);async function t(o){var l=o==null?void 0:o.group;h(l);const y=await P("getPermissionsGroup",l==null?void 0:l.group);y.length<=0||m(y)}function v(){P("insertOrUpdatePermissionsGroup",{perms:u,cargo:s==null?void 0:s.group,org:s==null?void 0:s.org}),i()}function R(o,l){if(o){n([...u,l]);return}const y=u.findIndex(C=>C===l),M=u.splice(y,1);n(M)}return r(p.Root,{onOpen:t,ref:f,children:[e(p.Header,{title:`Editar Permissões | ${s==null?void 0:s.display}`,subtitle:"Aqui você poderá editar as permissões do cargo selecionado"}),e(p.Content,{children:r(O,{children:[e(E,{placeholder:"Pesquisar...",icon:A}),e(V,{children:c?c==null?void 0:c.map(o=>r(B,{children:[r(D,{children:[e("p",{children:o==null?void 0:o.display}),e("span",{children:o==null?void 0:o.description})]}),e(k,{checked:o.active,onCheckedChange:l=>R(l,o.index)})]})):e(b,{})}),e(G,{children:e(z,{onClick:v,children:"Salvar Alterações"})})]})})]})}),Q=N,W=a.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 50rem;
  overflow: auto;
`,Z=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid .1rem ${({theme:i})=>i.border.primary};
  padding: 1rem 1.3rem;
  border-radius: .6rem;
`,_=a.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;a.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  padding: .3rem;
  border: solid .1rem ${({theme:i})=>i.border.primary};
  object-fit: cover;
`;const J=a.div`
  display: flex;
  flex-direction: column;

  p {
    color: ${({theme:i})=>i.text.title};
    font-weight: 400;
    font-size: 1.4rem;
    line-height: none;
  }

  span {
    font-size: 1.2rem;
    font-weight: 400;
    color: ${({theme:i})=>i.colors.primary};
    line-height: none;
    text-shadow:  0rem .1rem .7rem ${({theme:i})=>L(.7,i.colors.primary)};
  }
`,K=d.forwardRef((i,f)=>{const[s,h]=d.useState("");function c(m){h(m.role)}return r(p.Root,{onOpen:c,ref:f,children:[e(p.Header,{title:`Policiais com o cargo - ${s}`,subtitle:"Aqui você poderá visualizar todos oficiais que possuem o cargo selecionado"}),e(p.Content,{children:e(W,{children:r(Z,{children:[r(_,{children:[e(j,{}),r(J,{children:[e("p",{children:"Gabriel Droyen"}),e("span",{children:s})]})]}),e(w,{icon:H,label:"Ver Perfil"})]})})})]})}),X=K,Y=""+new URL("crown-dedffc27.webp",import.meta.url).href;function ie(){const{data:i,isLoading:f}=I(["getHierarchy"],()=>P("getHierarchy"),{initialData:[{group:"PMESPRecruta",display:"Recruta",position:1,org:"PMESP"}]}),s=i==null?void 0:i.sort((n,t)=>n.position-t.position),h=d.useRef(null),c=d.useRef(null),m=n=>{var t;(t=h.current)==null||t.openModal({group:n})},u=n=>{var t;(t=c.current)==null||t.openModal({group:n})};return r(U,{children:[e(X,{ref:c}),e(Q,{onClose:()=>{var n;return(n=h.current)==null?void 0:n.closeModal()},ref:h}),e(x.Root,{icon:Y,children:e(x.Header,{children:e(x.Title,{children:"Hierarquia de Cargos"})})}),e(g.Root,{headColumns:["ID","Cargo","Ações"],children:f?e(b,{}):e(T,{children:s==null?void 0:s.map((n,t)=>r(g.Row,{children:[r(g.Item,{children:["#",n==null?void 0:n.position]}),e(g.Item,{children:n==null?void 0:n.display}),r(g.Item,{children:[e(w,{icon:F,size:"sm",label:"Editar Permissões",onClick:()=>m(n)}),e(w,{icon:q,size:"sm",label:"Visualizar Oficiais",onClick:()=>u(n)})]})]},t))})})]})}export{ie as default};
