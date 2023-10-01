import{s as i,C as s,l as c,j as t,b as e,g as n,h as d,m as l,n as m}from"./index-a953b61c.js";const f=i(s)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,h=i.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,p=i.div`
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
`,g=""+new URL("config-c32d36da.webp",import.meta.url).href;function x(){const{theme:r,updateTheme:o}=c();return t(f,{children:[e(n.Root,{icon:g,children:e(n.Header,{children:e(n.Title,{children:"Configurações Locais"})})}),e(h,{children:t(p,{children:[e("p",{children:"Tema Escuro"}),e(d,{onCheckedChange:a=>{o(a?l:m)},checked:r.title==="dark"})]})})]})}export{x as default};
