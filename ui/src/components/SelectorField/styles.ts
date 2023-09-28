import { lighten, transparentize } from "polished";
import styled from "styled-components";


export const Text = styled.input`
  flex: 1;
  background: none;
  
  font-size: 1.4rem;
  font-weight: 300;

  color: ${props => props.theme.text.title};
  
  &::placeholder {
    color: ${props => transparentize(.7, props.theme.text.title)};
  }
`

export const Area = styled.div`
  height: 4.21rem;
  border: solid .1rem ${props => props.theme.border.primary};
  border-radius: .6rem;
  background: none;
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

export const SelectedList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: .5rem;
  flex: 1;
  margin-left: 1rem;
  overflow-y: auto;
`

export const SelectedItem = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  height: 2rem;
  color: ${({theme}) => theme.text.title};
  border-radius: 2rem;
  padding: .3rem .8rem;
  background: ${({theme}) => theme.colors.primary};
`