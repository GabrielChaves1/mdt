import { transparentize } from "polished";
import styled, { css } from "styled-components";
import * as Switch from '@radix-ui/react-switch'

export const SwitcherRoot = styled(Switch.Root)`
  cursor: pointer;
  padding: .3rem .4rem;
  border: solid .1rem ${({theme}) => theme.border.primary};
  border-radius: 5rem;
  box-shadow: 0 .4rem .8rem 0 rgba(0, 0, 0, 0.08);
  width: 5.2rem;
  height: 2.3rem;
  background: none;
  position: relative;
  display: flex;
  align-items: center;
  transition: .15s ease-in-out;

  &[data-state="checked"] {
    background: ${({theme}) => theme.colors.primary};
    box-shadow: 0 0rem .8rem 0 ${({theme}) => transparentize(.80, theme.colors.primary)};
  }
`

export const SwitcherThumb = styled(Switch.Thumb)`
  display: block;
  width: 1.8rem;
  height: 1.7rem;
  transition: transform 150ms;
  border-radius: .7rem;
  transform: translateX(0rem);
  background: ${({theme}) => transparentize(.3, theme.colors.icon)};
  will-change: transform;

  &[data-state="checked"] {
    transform: translateX(2.5rem);
    background: #FFF;
  }
`

export const Wrapper = styled.button<{ enabled: boolean }>`
  cursor: pointer;
  padding: .3rem .4rem;
  border: solid .1rem ${({theme}) => theme.border.primary};
  border-radius: 5rem;
  box-shadow: 0 .4rem .8rem 0 rgba(0, 0, 0, 0.08);
  width: 5.2rem;
  height: 2.3rem;
  background: none;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    left: .4rem;
    width: 1.8rem;
    height: 1.7rem;
    border-radius: .7rem;
    background: ${({theme}) => transparentize(.3, theme.colors.icon)};
    transition: .2s ease-in-out;
  }

  ${props => props.enabled && css`
    &::before {

      right: .4rem;
      background: ${({theme}) => theme.colors.primary};
    }
  `}
`
