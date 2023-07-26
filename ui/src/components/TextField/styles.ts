import { transparentize } from "polished";
import styled from "styled-components";

export const Text = styled.input`
  width: 100%;
  padding: 1.2rem 1rem;
  border: solid .1rem ${props => props.theme.border.primary};
  border-radius: .6rem;
  background: none;
  
  font-size: 1.4rem;
  font-weight: 300;
  color: ${props => props.theme.text.title};

  &::placeholder {
    color: ${props => transparentize(.7, props.theme.text.title)};
  }
`