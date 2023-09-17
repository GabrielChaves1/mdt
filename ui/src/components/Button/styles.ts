import { shade } from "polished";
import styled, { css } from "styled-components";
import { ButtonSize, ButtonVariant } from ".";

export const Container = styled.button<{
  fill: boolean, 
  position: 'flex-start' | 'center' | 'flex-end',
  size?: ButtonSize,
  variant: ButtonVariant
}>`
  display: flex;
  justify-content: ${props => props.position};
  align-items: center;
  gap: 1.6rem;
  font-size: 1.6rem;
  color: #FFF;
  font-weight: 400;
  padding: 1.2rem 1.6rem;
  border-radius: .6rem;
  width: max-content;
  position: relative;
  
  border: none;
  outline: none;
  transition: all .2s ease-in-out;
  overflow: hidden;

  ${props => props.fill && css`
    width: 100%;
  `}

  ${props => props.variant === 'primary' && css`
    background: ${props => props.theme.colors.primary};

    &:hover {
      background: ${props => shade(0.1, props.theme.colors.primary)}
    }
  `}

  ${props => props.variant === 'secondary' && css`
    background: none;
    color: ${props => props.theme.text.title};
  `}

  ${props => props.size === 'sm' && css`
    font-size: 1.2rem;
    padding: .8rem 1.2rem;
  `}
`