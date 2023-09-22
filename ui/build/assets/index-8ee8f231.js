import{h as r,C as l,l as e,k as i,m as t,B as a}from"./index-42cf2d40.js";import{C as c}from"./index-c2b54d01.js";import{T as s}from"./index-bdc69d45.js";const h=r(l)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,p=r.div`
  width: 100%;
  height: max-content;
`,u=r.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;
`,m=r.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,f=r.div`
  display: flex;
  flex-direction: column;
`,x=r.p`
  font-size: 1.6rem;
  color: ${n=>n.theme.text.title};
  font-weight: 400;
`,C=r.div`
  display: flex;
  flex-direction: ${n=>n.direction};
  gap: 1rem;
`;function g({children:n,direction:d="column"}){return e(C,{direction:d,children:n})}function y({children:n}){return e(f,{children:n})}function R({children:n}){return e(x,{children:n})}function v({children:n}){return e(m,{children:n})}const o={Root:v,Header:y,Label:R,Content:g};function b(){return i(h,{children:[e(t.Root,{children:e(t.Header,{children:e(t.Title,{children:"Buscar cidadão"})})}),e(p,{children:e(c.Root,{children:e(c.Column,{children:e(u,{children:i(o.Root,{children:[e(o.Header,{children:e(o.Label,{children:"Passaporte"})}),i(o.Content,{direction:"row",children:[e(s,{placeholder:"#"}),e(a,{position:"center",variant:"primary",children:"Procurar"})]})]})})})})}),e(t.Root,{children:e(t.Header,{children:e(t.Title,{children:"Procurados"})})})]})}export{b as default};
