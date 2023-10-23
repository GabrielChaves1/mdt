import { darken } from "polished";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  flex: 1;
  height: 60rem;
  background: ${({theme}) => darken(.015, theme.bg.primary)};
  border: solid .1rem ${({theme}) => theme.border.primary};
  border-left: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 9.8rem;
    background: linear-gradient(180deg, ${({theme}) => theme.bg.primary} 1.55%, rgba(255,255,255, 0) 120.86%);
    z-index: 7;
    pointer-events: none;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 9.8rem;
    background: linear-gradient(0deg, ${({theme}) => theme.bg.primary} 1.55%, rgba(255,255,255, 0) 120.86%);
    z-index: 7;
    pointer-events: none;
  }
`

export const MidLine = styled.div`
  width: .4rem;
  height: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: ${({theme}) => theme.border.primary};
`

export const List = styled.div`
  display: grid;
  justify-content: center;
  height: 100%;
  width: 100%;
  gap: 5rem;
  padding: 9.2rem 0;
  z-index: 5;
  overflow: auto;
  
  &::-webkit-scrollbar {
    display: none;
  }
`

export const Item = styled.div<{direction: 'left' | 'right', color?: string}>`
  width: 24rem;
  height: max-content;
  border-radius: .6rem;
  position: relative;
  background: ${({theme}) => theme.bg.primary};
  border: solid .1rem ${({theme}) => theme.border.primary};
  box-shadow: 0 .4rem .8rem 0 rgba(0, 0, 0, 0.025);
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${props => props.direction === 'right' ? css`
    left: 18.8rem;
  ` : css`
    right: 18.8rem;
  `}

  &::before {
    content: '';
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: ${({theme}) => theme.bg.primary};
    border: solid .4rem ${({theme, color}) => color ?? theme.colors.primary};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 3;

    ${props => props.direction === 'right' ? css`
      left: -8rem;
    ` : css`
      right: -8rem;
    `}
  }

  &::after {
    content: '';
    display: block;
    width: 6.9rem;
    height: .2rem;
    background: ${({theme, color}) => color ?? theme.colors.primary};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    ${props => props.direction === 'right' ? css`
      left: -7rem;
    ` : css`
      right: -7rem;
    `}

    z-index: 1;
  }
`

export const ItemHeader = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
`

export const ItemTitle = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  flex: 1;
  color: ${({theme}) => theme.text.title};

  span {
    font-weight: 500;
    color: ${({theme}) => theme.colors.primary};
  }
`

export const ItemDate = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${({theme}) => theme.text.subtitle};
  align-self: flex-end;
`