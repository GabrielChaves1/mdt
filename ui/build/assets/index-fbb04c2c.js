import{c as v,s as t,C as b,r as c,j as s,M as h,b as e,T as R,S as C,h as M,L as P,B as E,f as y,a as $,i as S,A as x,E as A,u as z,g,k as p,F as L,U as j}from"./index-76e7ee04.js";const k=v("FileEdit",[["path",{d:"M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5",key:"1bg6eb"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z",key:"1rgxu8"}]]),H=t(b)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,T=t.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`,I=t.div`
  display: flex;
  flex-direction: column;
`,q=t.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,F=t.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  justify-content: center;

  p {
    font-size: 1.4rem;
    color: ${({theme:o})=>o.text.title};
    font-weight: 400;
  }

  span {
    font-size: 1.2rem;
    color: ${({theme:o})=>o.text.subtitle};
    font-weight: 400;
  }
`,U=t.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1rem;
`,O=c.forwardRef((o,f)=>{const[r,d]=c.useState({}),[a,u]=c.useState([]);async function m(i){var l=i==null?void 0:i.group;d(l);const w=await y("getPermissionsGroup",l==null?void 0:l.group);w.length<=0||u(w)}function n(){var i=[];a.forEach(l=>{l.active&&i.push(l.index)}),y("insertOrUpdatePermissionsGroup",{perms:i,cargo:r==null?void 0:r.group,org:r==null?void 0:r.org})}return s(h.Root,{onOpen:m,ref:f,children:[e(h.Header,{title:`Editar Permissões | ${r==null?void 0:r.display}`,subtitle:"Aqui você poderá editar as permissões do cargo selecionado"}),e(h.Content,{children:s(T,{children:[e(R,{placeholder:"Pesquisar...",icon:C}),e(I,{children:a?a==null?void 0:a.map(i=>s(q,{children:[s(F,{children:[e("p",{children:i==null?void 0:i.display}),e("span",{children:i==null?void 0:i.description})]}),e(M,{value:i.active?1:0,onCheckedChange:l=>{i.active=!l}})]})):e(P,{})}),e(U,{children:e(E,{onClick:()=>n(),children:"Salvar Alterações"})})]})})]})}),V=O,B=t.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 50rem;
  overflow: auto;
`,D=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid .1rem ${({theme:o})=>o.border.primary};
  padding: 1rem 1.3rem;
  border-radius: .6rem;
`,G=t.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;t.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  padding: .3rem;
  border: solid .1rem ${({theme:o})=>o.border.primary};
  object-fit: cover;
`;const _=t.div`
  display: flex;
  flex-direction: column;

  p {
    color: ${({theme:o})=>o.text.title};
    font-weight: 400;
    font-size: 1.4rem;
    line-height: none;
  }

  span {
    font-size: 1.2rem;
    font-weight: 400;
    color: ${({theme:o})=>o.colors.primary};
    line-height: none;
    text-shadow:  0rem .1rem .7rem ${({theme:o})=>$(.7,o.colors.primary)};
  }
`,N=c.forwardRef((o,f)=>{const[r,d]=c.useState("");function a(u){d(u.role)}return s(h.Root,{onOpen:a,ref:f,children:[e(h.Header,{title:`Policiais com o cargo - ${r}`,subtitle:"Aqui você poderá visualizar todos oficiais que possuem o cargo selecionado"}),e(h.Content,{children:e(B,{children:s(D,{children:[s(G,{children:[e(S,{}),s(_,{children:[e("p",{children:"Gabriel Droyen"}),e("span",{children:r})]})]}),e(x,{icon:A,label:"Ver Perfil"})]})})})]})}),Q=N,W=""+new URL("crown-dedffc27.webp",import.meta.url).href;function J(){const{data:o,isLoading:f}=z(["getHierarchy"],()=>y("getHierarchy"),{initialData:[{group:"PMESPRecruta",display:"Recruta",position:1,org:"PMESP"}]}),r=o==null?void 0:o.sort((n,i)=>n.position-i.position),d=c.useRef(null),a=c.useRef(null),u=n=>{var i;(i=d.current)==null||i.openModal({group:n})},m=n=>{var i;(i=a.current)==null||i.openModal({group:n})};return s(H,{children:[e(Q,{ref:a}),e(V,{ref:d}),e(g.Root,{icon:W,children:e(g.Header,{children:e(g.Title,{children:"Hierarquia de Cargos"})})}),e(p.Root,{headColumns:["ID","Cargo","Ações"],children:f?e(P,{}):e(L,{children:r==null?void 0:r.map((n,i)=>s(p.Row,{children:[s(p.Item,{children:["#",n==null?void 0:n.position]}),e(p.Item,{children:n==null?void 0:n.display}),s(p.Item,{children:[e(x,{icon:k,size:"sm",label:"Editar Permissões",onClick:()=>u(n)}),e(x,{icon:j,size:"sm",label:"Visualizar Oficiais",onClick:()=>m(n)})]})]},i))})})]})}export{J as default};
