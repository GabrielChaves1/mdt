import styled from "styled-components";
import Select from '@radix-ui/react-select';
import { darken } from "polished";

export const Trigger = styled(Select.Trigger)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: .4rem;
  padding: 0 1.5rem;
  font-size: 1.3rem;
  line-height: 1;
  height: 3.5rem;
  gap: .5rem;
  border: solid .1rem ${props => props.theme.border.primary};
  color: ${props => props.theme.text.primary};
  /* box-shadow: 0 2px 10px var(--black-a7); */

  &:hover {
    background: ${props => darken(0.02, props.theme.bg.primary)};
  }
`

