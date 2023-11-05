import { darken, transparentize } from "polished";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  height: 60rem;
  position: relative;
`

export const Inventory = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  position: relative;
  gap: 1.5rem;
`

export const InventoryTitle = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${({theme}) => theme.text.title};
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1rem;
  flex: 1;
  height: 100%;
  padding: 1rem;
  background: ${({theme}) => darken(.015, theme.bg.primary)};
  border: .1rem solid ${({theme}) => theme.border.primary};
  border-radius: .6rem;
  overflow: hidden auto;
`

export const Item = styled.button<{selected: boolean}>`
  width: 10rem;
  height: 10rem;
  border: .1rem solid ${({theme}) => theme.border.primary};
  border-radius: inherit;
  position: relative;
  background: none;
  transition: .15s ease-in-out;
  
  ${props => props.selected ? css`
    background: ${({theme}) => darken(.05, theme.bg.primary)};

    img, p {
      opacity: .2;
    }
  ` : css`
    &:hover {
      background: ${({theme}) => darken(.03, theme.bg.primary)};
    }
  `}
`

export const Locked = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;
  display: grid;
  place-items: center;
  z-index: 5;
`

export const Image = styled.img`
  width: 6rem;
  position: absolute;
  transform: translate(-50%,-50%);
  left: 50%;
  top: 40%;
  object-fit: cover;
` 

export const Title = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: .5rem;
  width: 8rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
  color: ${({theme}) => theme.text.title};
`

export const Actions = styled.div`
  align-self: flex-end;
`