import * as Tooltip from "@radix-ui/react-tooltip";
import styled, { keyframes } from "styled-components";

export const effect = keyframes`
  from {
    opacity: 0;
    transform: translateY(-.2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const Content = styled(Tooltip.Content)`
  border-radius: .4rem;
  padding: 1rem 1.5rem;
  font-size: 1.5rem;
  color: ${props => props.theme.text.subtitle};
  background-color: ${props => props.theme.bg.primary};
  border: solid .1rem ${props => props.theme.border.primary};
  box-shadow: 0 .4rem .8rem 0 rgba(0, 0, 0, 0.04);
  user-select: none;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  animation-name: ${effect};
  will-change: transform, opacity;
  margin-bottom: 1rem;
`

export const Trigger = styled(Tooltip.Trigger)`
  background: none;
  border: none;
  outline: none;
`