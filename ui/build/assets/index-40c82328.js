import{s as t,b as o,a as r}from"./index-2e6b3bed.js";const n=t.section`
  width: 100%;
  height: 100%;

  border: solid .1rem ${e=>e.theme.border.primary};
  border-radius: .6rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 .4rem .8rem 0 rgba(0, 0, 0, 0.025);
`,i=t.header`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,a=t.h2`
  font-size: 1.8rem;
  font-weight: 400;
  color: ${e=>e.theme.text.title};
`,d=t.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${e=>e.theme.text.subtitle};
`;t.button`
  outline: none;
  background: none;
  position: relative;
  overflow: hidden;

  border: solid .1rem ${e=>e.theme.border.primary};
  padding: 1.1rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: ${e=>e.theme.colors.icon};
  transition: .2s ease-in-out;

  &:hover {
    background: ${e=>o(.98,e.theme.colors.ripple)};
  }
`;const s=t.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`,l=t.div`
  width: 100%;
  height: .1rem;
  background: ${e=>e.theme.border.primary};
`,c=t.div`
  width: 100%;
  flex: 1;
  position: relative;
`;function u({children:e}){return r(i,{children:e})}function m({children:e}){return r(s,{children:e})}function f({children:e}){return r(d,{children:e})}function p({children:e}){return r(a,{children:e})}function h({children:e}){return r(n,{children:e})}function b(){return r(l,{})}function C({children:e}){return r(c,{children:e})}const x={Root:h,Column:m,Header:u,Title:p,Subtitle:f,Separator:b,Content:C};export{x as C};
