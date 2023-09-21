import { transparentize } from "polished";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 2.5rem;
  height: 100%;
  overflow-y: auto;
  position: relative;
`

export const InputArea = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.4rem 2.5rem;
`

export const InputBox = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 1.2rem;
  border: solid .1rem ${({theme}) => theme.border.primary};
  border-radius: .6rem;
  width: 100%;
`

export const Input = styled.input`
  background: none;
  border: none;
  outline: none;
  flex: 1;
  color: ${({theme}) => theme.text.title};
  font-size: 1.4rem;
  font-weight: 300;
  
  &::placeholder {
    color: ${({theme}) => transparentize(.6, theme.text.title)}
  }
`

export const SendMessage = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  outline: none;
`