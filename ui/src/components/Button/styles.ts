import { darken, shade } from "polished";
import styled, { css } from "styled-components";
import { ButtonSize, ButtonVariant } from ".";

export const Container = styled.button<{
  filled: boolean, 
  position: 'flex-start' | 'center' | 'flex-end',
  size?: ButtonSize,
  variant: ButtonVariant
}>`
  display: flex;
  justify-content: ${props => props.position};
  align-items: center;
  gap: 1.2rem;
  font-size: 1.5rem;
  color: #FFF;
  font-weight: 400;
  padding: 1.2rem 1.6rem;
  border-radius: .6rem;
  width: max-content;
  position: relative;
  
  border: solid .1rem transparent;
  outline: none;
  transition: all .2s ease-in-out;
  overflow: hidden;

  ${props => props.filled && css`
    width: 100%;
  `}

  ${props => props.variant === 'primary' && css`
    background: ${props =>  darken(.01, props.theme.colors.primary)};

    &:hover {
      background: ${props => shade(0.1, props.theme.colors.primary)}
    }
  `}

  ${props => props.variant === 'secondary' && css`
    background: none;
    color: ${props => props.theme.text.title};
    border: solid .1rem ${({theme}) => theme.border.primary};
  `}

  ${props => props.size === 'sm' && css`
    font-size: 1.2rem;
    padding: .8rem 1.2rem;
  `}
`