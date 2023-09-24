import{s as n,C as o,k as d,j as t,b as e,f as i,S as l,l as c,m}from"./index-93699eff.js";const f=n(o)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,h=n.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,p=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 3rem;
  border: solid .1rem ${({theme:r})=>r.border.primary};
  border-radius: .6rem;

  p {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({theme:r})=>r.text.title};
  }
`;function u(){const{theme:r,updateTheme:a}=d();return t(f,{children:[e(i.Root,{children:e(i.Header,{children:e(i.Title,{children:"Configurações"})})}),e(h,{children:t(p,{children:[e("p",{children:"Tema Escuro"}),e(l,{onCheckedChange:s=>{a(s?c:m)},checked:r.title==="dark"})]})})]})}export{u as default};
