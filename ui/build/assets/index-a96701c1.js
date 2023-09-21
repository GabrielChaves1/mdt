import{s as r,C as c,a as e,j as i,d as t,B as l}from"./index-2e6b3bed.js";import{C as d}from"./index-40c82328.js";import{T as s}from"./index-82102e7f.js";const p=r(c)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,u=r.div`
  width: 100%;
  height: max-content;
`,h=r.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;
`,f=r.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,m=r.div`
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
`;function g({children:n,direction:a="column"}){return e(C,{direction:a,children:n})}function y({children:n}){return e(m,{children:n})}function R({children:n}){return e(x,{children:n})}function v({children:n}){return e(f,{children:n})}const o={Root:v,Header:y,Label:R,Content:g};function b(){return i(p,{children:[e(t.Root,{children:e(t.Header,{children:e(t.Title,{children:"Buscar cidadão"})})}),e(u,{children:e(d.Root,{children:e(d.Column,{children:e(h,{children:i(o.Root,{children:[e(o.Header,{children:e(o.Label,{children:"Passaporte"})}),i(o.Content,{direction:"row",children:[e(s,{placeholder:"#"}),e(l,{position:"center",variant:"primary",children:"Procurar"})]})]})})})})}),e(t.Root,{children:e(t.Header,{children:e(t.Title,{children:"Procurados"})})})]})}export{b as default};
