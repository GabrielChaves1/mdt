import { darken, transparentize } from "polished";
import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Wrapper = styled.div`
  position: absolute;
  width: 25rem;
  height: 25rem;
  background: ${({theme}) => darken(.03, theme.bg.primary)};
  border-radius: 50%;
`

export const Indicator = styled.div.attrs((props: { angle: number }) => ({
  style: {
    transform: `rotate(${props.angle - 45}deg)`
  }
}))<{angle: number}>`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  left: 0%;
  top: 0%;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 49.5%;
    background: conic-gradient(transparent 270deg, ${({theme}) => theme.colors.primary} 0deg);
  }

  &::before {
    content: '';
    display: block;
    width: 3rem;
    height: 3rem;
    position: absolute;
    left: 2.5rem;
    top: 2.5rem;
    background: ${({theme}) => theme.colors.primary};
  }
`

export const Content = styled.div`
  width: 91%;
  height: 91%;
  transform: translate(-50%,-50%);
  left: 50%;
  top: 50%;
  border-radius: 50%;
  background: ${({theme}) => theme.bg.primary};
  z-index: 2;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const Items = styled.div`
  position: relative;
  width: 58rem;
  height: 58rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`

export const Item = styled.div<{itemId: number, amount: number, selected: boolean}>`
  position: absolute;
  width: 12rem;
  height: 12rem;
  background: ${({theme}) =>  transparentize(.05, theme.bg.primary)};
  left: 1rem;
  transform-origin: 28rem;
  transform: rotate(calc((360deg / ${props => props.amount}) * ${props => props.itemId}));
  transition: .2s cubic-bezier(.75,.34,.43, .88);
  border: solid 1rem ${({theme}) => transparentize(.1, darken(.03, theme.bg.primary))};
  border-radius: 50%;

  ${props => props.selected && css`
    background: ${({theme}) => darken(.02, theme.bg.primary)};
    transform: rotate(calc((360deg / ${props.amount}) * ${props.itemId})) translateX(-.5rem) scale(1.1);
    border-color: ${({theme}) => theme.colors.primary};
    z-index: 10;
  
    img {
      -webkit-filter: grayscale(0%) !important;
      filter: grayscale(0%) !important;
    }
  `}

  img {
    width: 7rem;
    height: 7rem;
    object-fit: contain;
    position: absolute;
    transform: translate(-50%,-50%);
    left: 1.5rem;
    top: 1.5rem;
    transform: rotate(calc((360deg / -${props => props.amount}) * ${props => props.itemId}));
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }
`

export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({theme}) => theme.text.title};
  z-index: 3;
`

export const Description = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  color: ${({theme}) => theme.text.subtitle};
  text-align: center;
  z-index: 3;
`

export const Image = styled.img`
  width: 25rem;
  height: 25rem;
  object-fit: contain;
  position: absolute;
  z-index: 1;
  opacity: .1;
  transition: all .2s ease-in-out;
`