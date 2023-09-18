import { transparentize } from "polished";
import styled from "styled-components";

export const HeaderAction = styled.button`
  outline: none;
  background: none;
  position: relative;
  overflow: hidden;

  border: solid .1rem ${props => props.theme.border.primary};
  padding: 1.1rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: ${props => props.theme.colors.icon};
  transition: .2s ease-in-out;

  &:hover {
    background: ${props => transparentize(.98, props.theme.colors.ripple)};
  }
`