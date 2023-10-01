import{c as C,s as l,C as E,r as d,j as a,M as p,b as e,T as $,S as A,h as z,L as M,B as L,f as v,a as j,i as k,A as R,E as H,u as I,g as b,k as x,F as T,U as O}from"./index-732e86b5.js";const q=C("FileEdit",[["path",{d:"M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5",key:"1bg6eb"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z",key:"1rgxu8"}]]),F=l(E)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,U=l.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`,V=l.div`
  display: flex;
  flex-direction: column;
`,B=l.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,D=l.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  justify-content: center;

  p {
    font-size: 1.4rem;
    color: ${({theme:n})=>n.text.title};
    font-weight: 400;
  }

  span {
    font-size: 1.2rem;
    color: ${({theme:n})=>n.text.subtitle};
    font-weight: 400;
  }
`,G=l.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1rem;
`,N=d.forwardRef(({onClose:n},m)=>{const[r,u]=d.useState({}),[o,f]=d.useState([]),[h,i]=d.useState([]);async function t(s){var c=s==null?void 0:s.group;u(c);const g=await v("getPermissionsGroup",c==null?void 0:c.group);g.length<=0||(g.forEach(w=>{w.active&&h.push(w.index)}),i(h),f(g))}function P(){var s={};h.forEach(c=>{s[c]=!0}),v("insertOrUpdatePermissionsGroup",{perms:s,cargo:r==null?void 0:r.group,org:r==null?void 0:r.org}),i([]),n()}function S(s,c){const g=o.findIndex(y=>y.index===c);if(o[g].active=s,f(o),s){i([...h,c]);return}const w=o.filter(y=>y.active).map(y=>y.index);i(w)}return a(p.Root,{onOpen:t,ref:m,children:[e(p.Header,{title:`Editar Permissões | ${r==null?void 0:r.display}`,subtitle:"Aqui você poderá editar as permissões do cargo selecionado"}),e(p.Content,{children:a(U,{children:[e($,{placeholder:"Pesquisar...",icon:A}),e(V,{children:o?o==null?void 0:o.map(s=>a(B,{children:[a(D,{children:[e("p",{children:s==null?void 0:s.display}),e("span",{children:s==null?void 0:s.description})]}),e(z,{checked:s.active,onCheckedChange:c=>S(c,s.index)})]})):e(M,{})}),e(G,{children:e(L,{onClick:P,children:"Salvar Alterações"})})]})})]})}),Q=N,W=l.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 50rem;
  overflow: auto;
`,Z=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid .1rem ${({theme:n})=>n.border.primary};
  padding: 1rem 1.3rem;
  border-radius: .6rem;
`,J=l.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;l.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  padding: .3rem;
  border: solid .1rem ${({theme:n})=>n.border.primary};
  object-fit: cover;
`;const K=l.div`
  display: flex;
  flex-direction: column;

  p {
    color: ${({theme:n})=>n.text.title};
    font-weight: 400;
    font-size: 1.4rem;
    line-height: none;
  }

  span {
    font-size: 1.2rem;
    font-weight: 400;
    color: ${({theme:n})=>n.colors.primary};
    line-height: none;
    text-shadow:  0rem .1rem .7rem ${({theme:n})=>j(.7,n.colors.primary)};
  }
`,X=d.forwardRef((n,m)=>{const[r,u]=d.useState({}),[o,f]=d.useState([]);async function h(i){var t=i==null?void 0:i.group;u(t);const P=await v("getOfficersGroup",t==null?void 0:t.group);P.length<=0||f(P)}return a(p.Root,{onOpen:h,ref:m,children:[e(p.Header,{title:`Policiais com o cargo - ${r.display}`,subtitle:"Aqui você poderá visualizar todos oficiais que possuem o cargo selecionado"}),e(p.Content,{children:e(W,{children:o?o.length==0?e("h2",{children:"Nenhum oficial encontrado para este cargo"}):o==null?void 0:o.map(i=>a(Z,{children:[a(J,{children:[e(k,{}),a(K,{children:[e("p",{children:i.nome}),e("span",{children:r.display})]})]}),e(R,{icon:H,label:"Ver Perfil"})]})):e(M,{})})})]})}),Y=X,_=""+new URL("crown-dedffc27.webp",import.meta.url).href;function ie(){const{data:n,isLoading:m}=I(["getHierarchy"],()=>v("getHierarchy"),{initialData:[{group:"PMESPRecruta",display:"Recruta",position:1,org:"PMESP"}]}),r=n==null?void 0:n.sort((i,t)=>i.position-t.position),u=d.useRef(null),o=d.useRef(null),f=i=>{var t;(t=u.current)==null||t.openModal({group:i})},h=i=>{var t;(t=o.current)==null||t.openModal({group:i})};return a(F,{children:[e(Y,{ref:o}),e(Q,{onClose:()=>{var i;return(i=u.current)==null?void 0:i.closeModal()},ref:u}),e(b.Root,{icon:_,children:e(b.Header,{children:e(b.Title,{children:"Hierarquia de Cargos"})})}),e(x.Root,{headColumns:["ID","Cargo","Ações"],children:m?e(M,{}):e(T,{children:r==null?void 0:r.map((i,t)=>a(x.Row,{children:[a(x.Item,{children:["#",i==null?void 0:i.position]}),e(x.Item,{children:i==null?void 0:i.display}),a(x.Item,{children:[e(R,{icon:q,size:"sm",label:"Editar Permissões",onClick:()=>f(i)}),e(R,{icon:O,size:"sm",label:"Visualizar Oficiais",onClick:()=>h(i)})]})]},t))})})]})}export{ie as default};
