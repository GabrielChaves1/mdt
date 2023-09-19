import { transparentize } from "polished";
import styled, { css } from "styled-components";

export const HeaderAction = styled.button<{size: "sm" | "lg"}>`
  outline: none;
  background: none;
  position: relative;
  overflow: hidden;

  border: solid .1rem ${props => props.theme.border.primary};
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: ${props => props.theme.colors.icon};
  transition: .1s ease-in-out;
  box-shadow: 0 .4rem .3rem 0 rgba(0, 0, 0, 0.02);
  
  ${props => props.size === "sm" && css`
    padding: .6rem;
  `}
  
  ${props => props.size === "lg" && css`
    padding: 1.1rem;
  `}

  &:hover {
    background: ${props => transparentize(.98, props.theme.colors.ripple)};
  }

  &:active {
    background: ${props => transparentize(.92, props.theme.colors.ripple)};
  }
`