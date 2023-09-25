import * as Checkbox from '@radix-ui/react-checkbox';
import { transparentize } from 'polished';
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
`

export const Root = styled(Checkbox.Root)`
  width: 2.1rem;
  height: 2.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: .1rem solid ${({theme}) => theme.border.primary};
  border-radius: .3rem;
  background: none;
  transition: .15s ease-in-out;
  box-shadow: 0 .4rem .8rem 0 rgba(0, 0, 0, 0.08);

  &[data-state="checked"] {
    border-color: ${({theme}) => theme.colors.primary};
    background: ${({theme}) => transparentize(.95, theme.colors.primary)};
    box-shadow: 0 .4rem .8rem 0 ${({theme}) => transparentize(.95, theme.colors.primary)};
  }
`

export const Indicator = styled(Checkbox.Indicator)`
  color: ${({theme}) => theme.colors.primary};
  display: flex;
  align-items: center;
`