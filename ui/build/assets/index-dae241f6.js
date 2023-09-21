import{s as t,C as s,u as d,j as n,a as e,d as i,k as l,l as c}from"./index-2e6b3bed.js";import{S as m}from"./index-f5239b35.js";import"./index-1cb2d457.js";const p=t(s)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,f=t.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,h=t.div`
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
`;function C(){const{theme:r,updateTheme:a}=d();return n(p,{children:[e(i.Root,{children:e(i.Header,{children:e(i.Title,{children:"Configurações"})})}),e(f,{children:n(h,{children:[e("p",{children:"Tema Escuro"}),e(m,{onCheckedChange:o=>{a(o?l:c)},checked:r.title==="dark"})]})})]})}export{C as default};
