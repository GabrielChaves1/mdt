import{s as t,e as d,j as a,a as r}from"./index-2e6b3bed.js";const m=t.section`
  width: 100%;
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
`,l=t.div`
  width: 100%;
  height: 4.4rem;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  align-items: center;
  justify-content: center;
  background: ${({theme:e})=>d(.015,e.bg.primary)};
  border: solid .1rem ${({theme:e})=>e.border.primary};
  border-radius: .6rem .6rem 0 0;
`,s=t.p`
  font-size: 1.6rem;
  color: ${({theme:e})=>e.text.title};
  font-weight: 400;
  display: flex;
  width: max-content;
  font-weight: 500;
`,c=t.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: .7rem;
`,p=t.div`
  width: 100%;
  height: 4.5rem;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  align-items: center;
  border: solid .1rem ${({theme:e})=>e.border.primary};
  border-bottom: none;

  &:first-child {
    border-top: none;
  }

  &:last-child {
    border-bottom: solid .1rem ${({theme:e})=>e.border.primary};
    border-radius: 0 0 .6rem .6rem;
  }
`,f=t.p`
  font-size: 1.6rem;
  color: ${({theme:e})=>e.text.subtitle};
  font-weight: 300;
  display: flex;
  width: max-content;
  max-width: 35rem;
  display: flex;
  gap: .5rem;
`;function b({headColumns:e,children:o}){return a(m,{children:[r(l,{children:e.map((i,n)=>r(s,{children:i},n))}),r(c,{children:o})]})}function h({children:e}){return r(p,{children:e})}function x({children:e}){return r(f,{children:e})}const g={Root:b,Row:h,Item:x};export{g as T};
