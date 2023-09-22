import{s as r,a,r as n,Z as p,j as i,b as s}from"./index-bfdf8dd9.js";const g=r.input`
  width: 100%;
  padding: 1.2rem 1rem;
  border: solid .1rem ${e=>e.theme.border.primary};
  border-radius: .6rem;
  background: none;
  
  font-size: 1.4rem;
  font-weight: 300;
  color: ${e=>e.theme.text.title};

  &::placeholder {
    color: ${e=>a(.7,e.theme.text.title)};
  }
`,x=r.div`
  width: 100%;
  border: solid .1rem ${e=>e.theme.border.primary};
  border-radius: .6rem;
  background: none;
  padding-right: 1rem;
  position: relative;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;

  input {
    flex: 1;
    height: 100%;
    font-size: 1.4rem;
    font-weight: 300;
    color: ${e=>e.theme.text.title};
    border: none;

    &::placeholder {
      color: ${e=>a(.7,e.theme.text.title)};
    }
  }
`,u=r.p` 
  height: 100%;
  color: ${({theme:e})=>e.text.title};
  font-size: 1.2rem;
  font-weight: 400;
`,$=n.forwardRef(({icon:e,max:t,...l},d)=>{const{colors:c}=p(),[o,h]=n.useState("");return i(x,{children:[s(g,{maxLength:t,value:o,onChange:m=>{h(m.target.value)},ref:d,...l}),e&&s(e,{size:16,color:c.icon}),t&&i(u,{children:[o.length,"/",t]})]})});export{$ as T};
