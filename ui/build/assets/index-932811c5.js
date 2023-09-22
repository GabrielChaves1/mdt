import{h as t,C as s,A as d,k as n,l as e,m as i,D as l,E as c}from"./index-42cf2d40.js";import{S as m}from"./index-c8122db3.js";import"./index-4b38e630.js";const h=t(s)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,p=t.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,f=t.div`
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
`;function C(){const{theme:r,updateTheme:a}=d();return n(h,{children:[e(i.Root,{children:e(i.Header,{children:e(i.Title,{children:"Configurações"})})}),e(p,{children:n(f,{children:[e("p",{children:"Tema Escuro"}),e(m,{onCheckedChange:o=>{a(o?l:c)},checked:r.title==="dark"})]})})]})}export{C as default};
