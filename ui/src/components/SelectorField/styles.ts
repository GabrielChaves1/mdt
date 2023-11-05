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

export const SelectedList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: .5rem 1rem;
  gap: .6rem;
  flex: 1;
  height: 100%;
  overflow: auto;
  justify-content: flex-start;
  cursor: pointer;

  p {
    font-size: 1.4rem;
    font-weight: 300;
    color: ${({theme}) =>  transparentize(.6, theme.text.title)};
  }
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
  width: 5.5rem;
  text-align: center;
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
  display: flex;
  align-items: center;
  gap: .5rem;

  button {
    background: none;
    border: none;
    outline: none;
  }
`

export const QueryListContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% + 14rem);
  pointer-events: none;
`

export const QueryList = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 13rem;
  background: ${({theme}) => theme.bg.primary};
  border: solid .1rem ${({theme}) => theme.border.primary};
  box-shadow: 0 0 .8rem rgba(0, 0, 0, 0.1);
  border-radius: .6rem;
  overflow: auto;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  pointer-events: all;
`

export const QueryItem = styled.button`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  background: none;
  border: solid .1rem ${({theme}) => theme.border.primary};
  border-left: none;
  border-radius: none;
  color: ${({theme}) => theme.text.title};
  font-size: 1.4rem;

  &:not(&:disabled):hover {
    background: ${({theme}) => lighten(.02, theme.bg.primary)};
  }

  &:disabled {
    opacity: .25;
    cursor: not-allowed;
  }
`