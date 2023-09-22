import{s as n,C as s,n as d,j as t,b as e,d as i,o as l,p as c}from"./index-bfdf8dd9.js";import{S as m}from"./index-cf4460db.js";const p=n(s)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,f=n.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,h=n.div`
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
`;function x(){const{theme:r,updateTheme:a}=d();return t(p,{children:[e(i.Root,{children:e(i.Header,{children:e(i.Title,{children:"Configurações"})})}),e(f,{children:t(h,{children:[e("p",{children:"Tema Escuro"}),e(m,{onCheckedChange:o=>{a(o?l:c)},checked:r.title==="dark"})]})})]})}export{x as default};
