import { lighten, transparentize } from "polished";
import styled from "styled-components";

export const Area = styled.div`
  height: 4.21rem;
  border: solid .1rem ${props => props.theme.border.primary};
  border-radius: .6rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    flex: 1;
    height: 100%;
    font-size: 1.4rem;
    font-weight: 300;
    color: ${props => props.theme.text.title};
    border: none;

    &::placeholder {
      color: ${props => transparentize(.7, props.theme.text.title)};
    }
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 4rem;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
  border: none;
  background: none;
  transition: all .15s ease-in-out;
  border-left: solid .1rem ${({theme}) => theme.border.primary};

  &:disabled {
    background: ${({theme}) => lighten(.025, theme.bg.primary)};
  }

  &:hover {
    background: ${({theme}) => lighten(.015, theme.bg.primary)};
  }

  &:active {
    background: ${({theme}) => lighten(.025, theme.bg.primary)};
  }
`

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: .5rem 1rem;
  gap: .6rem;
  flex: 1;
  height: 100%;
  overflow: auto;
  justify-content: flex-start;
`

export const CreateItem = styled.div`
  padding: .3rem .7rem;
  border-radius: 3rem;
  border: solid .1rem ${({theme}) => theme.border.primary};
  font-size: 1.2rem;
  font-weight: 400;
  color: #FFF;
`

export const Input = styled.input`
  background: none;
  border: none;
  outline: none;
  font-size: 1.2rem;
  width: 11.7rem;
  padding: 0 .5rem;
  font-weight: 400;
  color: ${({theme}) => theme.text.title};
`

export const Item = styled.span`
  padding: .3rem .7rem;
  width: max-content;
  border-radius: 3rem;
  background: ${({theme}) => theme.colors.primary};
  font-size: 1.2rem;
  font-weight: 400;
  color: #FFF;
`