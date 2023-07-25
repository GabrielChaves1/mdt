import { shade } from "polished";
import styled, { css } from "styled-components";

export const Container = styled.button<{fill: boolean}>`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  font-size: 1.6rem;
  color: #FFF;
  font-weight: 400;
  padding: 1.2rem 1.6rem;
  background: ${props => props.theme.bg.button.primary};
  border-radius: .6rem;
  
  border: none;
  outline: none;
  transition: all .2s ease-in-out;

  ${props => props.fill && css`
    flex: 1;
  `}

  &:hover {
    background: ${props => shade(0.1, props.theme.bg.button.primary)}
  }
`