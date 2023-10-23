import { lighten, transparentize } from "polished";
import styled, { css } from "styled-components";

export const Wrapper = styled.div<{color: string}>`
  padding: .5rem 1rem;
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({theme}) => theme.text.title};
  border-radius: 2.7rem;
  border: inset .1rem;

  ${props => props.theme.title == 'dark' && css`
    background: ${transparentize(.92, lighten(.2, props.color))};
    border: solid .1rem ${transparentize(.8, lighten(.3, props.color))};
  `}

  ${props => props.theme.title == 'light' && css`
    background: ${transparentize(.92, props.color)};
    border: solid .1rem ${transparentize(.7, props.color)};
  `}
`