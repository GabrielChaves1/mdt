import{c as y,s as o,C as z,b as m,r as b,Z as C,j as r,a as i,d as a}from"./index-2e6b3bed.js";import{T as n}from"./index-97cb2b98.js";import{M as h,A as J,E as j}from"./index-ec06df8f.js";import{C as f,u as P,P as R}from"./usePaginate-89a80142.js";import"./index-1cb2d457.js";const g=y("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]),s=y("Forward",[["polyline",{points:"15 17 20 12 15 7",key:"1w3sku"}],["path",{d:"M4 18v-2a4 4 0 0 1 4-4h12",key:"jmiej9"}]]),D=o(z)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,B=o.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1;
`;o.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;const M=o.div`
  display: flex;
  padding: 2rem;
  border-top: solid .1rem ${({theme:e})=>e.border.primary};
  border-bottom: solid .1rem ${({theme:e})=>e.border.primary};
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
`,I=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 13rem;
  height: 13rem;
  border: solid .1rem ${({theme:e})=>e.border.primary};
  border-radius: 50%;
  padding: 1rem;
`,T=o.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: solid .1rem ${({theme:e})=>e.border.primary};
  object-fit: cover;
`,A=o.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`,V=o.h4`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({theme:e})=>e.text.title};
`,E=o.div`
  display: flex;
  flex-direction: column;
  gap: .6rem;
  align-items: flex-start;

  p {
    margin-top: .5rem;
    font-size: 1.2rem;
    font-weight: 400;
    color: ${({theme:e})=>e.text.title};
  }
`,H=o.div`
  display: flex;
  gap: .6rem;
  max-width: 35rem;
  flex-wrap: wrap;
  margin-bottom: .75rem;
`,l=o.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .6rem;
  font-size: 1.2rem;
  font-weight: 400;
  padding: .5rem 1rem;
  color: ${({theme:e})=>e.text.title};
  background: ${({theme:e})=>m(.8,e.colors.primary)};
  border: solid .1rem ${({theme:e})=>e.border.primary};
  border-radius: 3rem;
  transition: all .1s ease-in-out;

  &:hover {
    background: ${({theme:e})=>m(.6,e.colors.primary)};
  }

  &:active {
    background: ${({theme:e})=>m(.5,e.colors.primary)};
  }
`,L=o.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${({theme:e})=>e.text.subtitle};
  max-width: 39rem;

  b {
    font-weight: 400;
    color: ${({theme:e})=>e.text.title};
  }
`,S=o.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Z=o.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > p {
    font-size: 1.4rem;
    font-weight: 400;
    color: ${({theme:e})=>e.text.title};
  }
`,F=o.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-right: 1.7rem;
  width: 100%;
  border: solid .1rem ${({theme:e})=>e.border.primary};
  border-radius: 0 0 .6rem .6rem;
  padding: 1.2rem 2rem;
  background: ${({theme:e})=>m(.98,e.colors.ripple)};

  p {
    font-size: 1.2rem;
    font-weight: 300;
    color: ${({theme:e})=>e.text.title};
  }
`,x=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .7rem;

  p {
    font-size: 1.4rem;
    font-weight: 400;
    color: ${({theme:e})=>e.text.title};
  }
`,N=o.div`
  display: flex;
  flex-direction: column;
`,O=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 2rem;
  border: solid .1rem ${({theme:e})=>e.border.primary};
  border-bottom: none;

  &:first-child {
    border-radius: .6rem .6rem 0 0;
  }

  p {
    font-size: 1.4rem;
    font-weight: 400;
    color: ${({theme:e})=>e.text.title};
  }

  &:last-child {
    border-radius: 0rem;
  }
`,U=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`,u=o.div`
  padding: .4rem .8rem;
  display: flex;
  align-items: center;
  gap: .7rem;

  font-size: 1.4rem;
  font-weight: 400;
  color: ${({theme:e})=>e.text.title};
  border: solid .1rem ${({theme:e})=>e.border.primary};
  border-radius: .6rem;
`,W=o.div`
  display: flex;
  flex-direction: column;
  max-height: 26.5rem;
  overflow: auto;
`,X=b.forwardRef((e,c)=>{const{colors:d}=C();return r(h.Root,{ref:c,children:[i(h.Header,{title:"Documentos da Prisão",subtitle:"Você está visualizando os dados contidos na prisão"}),i(h.Content,{children:r(M,{children:[i(I,{children:i(T,{src:"https://cdn.ome.lt/XmNgZkW2CggS6RGXiEz55spbmQs=/970x360/smart/uploads/conteudo/fotos/gta-franklin-selfie-topo.jpg"})}),r(A,{children:[i(V,{children:"John Doe #5123"}),r(E,{children:[i("p",{children:"Preso por:"}),r(H,{children:[r(l,{children:["Droyen",i(s,{size:"1.4rem"})]}),r(l,{children:["Droyen",i(s,{size:"1.4rem"})]}),r(l,{children:["Droyen",i(s,{size:"1.4rem"})]}),r(l,{children:["Droyen",i(s,{size:"1.4rem"})]})]})]}),r(L,{children:[i("b",{children:"Motivo da prisão:"})," Tentativa de fuga e ofensas aos oficiais da guarnição\u2028Roubo a caixa eletrônico e tentativa de homicidio, estava portando 2x ak-47, 1x lockpick, 250x munições de ak-47 e 1 pistola mk2"]})]})]})}),r(S,{children:[i(Z,{children:i("p",{children:"Crimes Cometidos"})}),r(N,{children:[i(W,{children:r(O,{children:[i("p",{children:"Tentativa de Homicidio"}),r(U,{children:[r(u,{children:[i(f,{size:"1.4rem",color:d.icon}),"15 meses"]}),r(u,{children:[i(g,{size:"1.4rem",color:d.icon}),"R$ 250.000"]})]})]})}),r(F,{children:[i("p",{children:"Soma Total:"}),r(x,{children:[i(f,{size:"1.4rem",color:d.icon}),i("p",{children:"50 meses (-50%)"})]}),r(x,{children:[i(g,{size:"1.6rem",color:d.icon}),i("p",{children:"R$ 150.000,00"})]})]})]})]})]})}),G=X;function ee(){const{amountOfPages:e,currentPage:c,items:d,totalOfItems:w,viewedItems:v,paginate:$}=P(12,1,[{id:1,name:"John doe",time:15,fine:15e3},{id:2,name:"John doe",time:15,fine:15e3},{id:3,name:"John doe",time:15,fine:15e3},{id:4,name:"John doe",time:15,fine:15e3},{id:5,name:"John doe",time:15,fine:15e3},{id:6,name:"John doe",time:15,fine:15e3},{id:7,name:"John doe",time:15,fine:15e3},{id:8,name:"John doe",time:15,fine:15e3},{id:9,name:"John doe",time:15,fine:15e3},{id:10,name:"John doe",time:15,fine:15e3},{id:11,name:"John doe",time:15,fine:15e3},{id:12,name:"John doe",time:15,fine:15e3},{id:13,name:"John doe",time:15,fine:15e3},{id:14,name:"John doe",time:15,fine:15e3},{id:15,name:"John doe",time:15,fine:15e3},{id:16,name:"John doe",time:15,fine:15e3},{id:17,name:"John doe",time:15,fine:15e3}]),p=b.useRef(null),k=()=>{var t;(t=p.current)==null||t.openModal()};return r(D,{children:[i(G,{ref:p}),r(a.Root,{children:[i(a.Header,{children:i(a.Title,{children:"Últimas prisões"})}),i(a.Action,{children:"Nova Prisão"})]}),r(B,{children:[i(n.Root,{headColumns:["Prisioneiro","Tempo","Multa","Data","Ações"],children:d.map(t=>r(n.Row,{children:[i(n.Item,{children:t.name}),r(n.Item,{children:[t.time," meses"]}),r(n.Item,{children:["R$ ",t.fine.toLocaleString("pt-br")]}),i(n.Item,{children:"20/09/2023"}),i(n.Item,{children:i(J,{icon:j,size:"sm",onClick:k,label:"Ver detalhes"})})]},t.id))}),i(R,{amountOfPages:e,currentPage:c,itemsBeingViewed:v,totalOfItems:w,onPaginate:t=>$(t)})]})]})}export{ee as default};
