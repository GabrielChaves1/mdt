import { transparentize } from "polished";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  border: solid .1rem ${({theme}) => theme.border.primary};
  border-radius: .6rem;
`

export const Text = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${({theme}) => theme.text.title};
`

export const PaginationContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

export const NavigateButton = styled.button`
  width: 3.6rem;
  height: 3.6rem;
  border: solid .1rem ${({theme}) => theme.border.primary};
  display: grid;
  place-items: center;
  border-radius: 3rem;
  background: none;
  transition: .1s ease-in-out;

  &:disabled {
    opacity: .5;
    cursor: not-allowed;
  }
  
  &:not(:disabled):hover {
    background: ${({theme}) => transparentize(.98, theme.colors.ripple)};
  }

  &:not(:disabled):active {
    background: ${({theme}) => transparentize(.92, theme.colors.ripple)};
  }
`

export const Pages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
`

export const Page = styled.button<{enabled: boolean}>`
  border: solid .1rem ${({theme}) => theme.border.primary};
  width: 3.6rem;
  height: 3.6rem;
  background: none;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({theme}) => theme.text.title};
  transition: .1s ease-in-out;
  border-radius: .6rem;

  ${props => props.enabled ? css`
    background: ${({theme}) => theme.colors.primary};
    color: #FFF;
  ` : css`
    &:hover {
      background: ${({theme}) => transparentize(.98, theme.colors.ripple)};
    }

    &:active {
      background: ${({theme}) => transparentize(.92, theme.colors.ripple)};
    }
  `}
`