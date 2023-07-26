import styled, { css } from "styled-components";

export const Container = styled.aside`
  width: 31.1rem;
  height: 100%;
  border-right: solid .1rem ${props => props.theme.border.primary};
  padding: 2.5rem 1.7rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const NavigationArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

export const Logo = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  outline: none;
  border-radius: .6rem;
  margin-bottom: 2rem;

  ${props => props.theme.title === "light" && css`
    filter: brightness(0);
  `}
`

export const NavigationAreaTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 500;
  text-transform: uppercase;
  color: ${props => props.theme.text.subtitle};
  transition: all .2s ease-in-out;
  align-self: flex-start;
`

export const NavigationAreaContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 0 .6rem;
`

export const Button = styled.button<{selected?: boolean}>`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  font-size: 1.6rem;
  font-weight: 400;
  padding: 1.2rem 1.6rem;
  border-radius: .6rem;
  
  border: none;
  outline: none;
  transition: all .2s ease-in-out;
  
  ${props => props.selected ? css`
    color: #FFF;
    background: ${props => props.theme.colors.primary};
  ` : css`
    background: none;
    color: ${props => props.theme.text.subtitle};
  
    &:hover {
      background: ${({theme}) => theme.title === "light" ? 'rgba(0, 0, 0, .05)' : 'rgba(255,255,255,.05)'};
    }
  `}
`