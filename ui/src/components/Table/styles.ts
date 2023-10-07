import { darken, transparentize } from "polished";
import styled from "styled-components";

export const Root = styled.section`
  width: 100%;
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const Head = styled.div`
  width: 100%;
  height: 4.4rem;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  align-items: center;
  justify-content: center;
  background: ${({theme}) =>  darken(.017, theme.bg.primary)};
  border: solid .1rem ${({theme}) => theme.border.primary};
  border-radius: .6rem .6rem 0 0;
`

export const HeadOption = styled.p`
  font-size: 1.5rem;
  color: ${({theme}) => theme.text.title};
  font-weight: 400;
  display: flex;
  width: max-content;
  font-weight: 500;
`

export const Body = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: .7rem;
  justify-content: flex-start;
`

export const Row = styled.div`
  width: 100%;
  height: 4.2rem;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  align-items: center;
  border: solid .1rem ${({theme}) => theme.border.primary};
  border-bottom: none;
  background: ${({theme}) =>  transparentize(.6, theme.bg.primary)};

  &:first-child {
    border-top: none;
  }

  &:last-child {
    border-bottom: solid .1rem ${({theme}) => theme.border.primary};
    border-radius: 0 0 .6rem .6rem;
  }
`

export const RowItem = styled.p`
  font-size: 1.4rem;
  color: ${({theme}) => theme.text.subtitle};
  font-weight: 300;
  display: flex;
  width: max-content;
  max-width: 35rem;
  display: flex;
  gap: .5rem;
`