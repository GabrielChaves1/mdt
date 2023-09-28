import { darken, transparentize } from "polished";
import styled from "styled-components";

export const Wrapper = styled.main`
  width: 148rem;
  height: 87.7rem;
  border-radius: 1.4rem;
  border: .8rem solid #161C22;
  background: ${props => props.theme.bg.primary};
  position: relative;
  display: flex;

  &::before, &::after {
    content: '';
    display: block;
    position: absolute;
    background: #161C22;
    left: -1.3rem;
    width: .7rem;
    height: 6.5rem;
    border-top-left-radius: .8rem;
    border-bottom-left-radius: .8rem;
  }

  &::before {
    top: 6rem;
  }

  &::after {
    top: 15rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2rem;
  width: 100%;
  position: relative;
  background: ${({theme}) => theme.bg.primary};
`