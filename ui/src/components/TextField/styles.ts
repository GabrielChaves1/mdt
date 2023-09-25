import { transparentize } from "polished";
import styled from "styled-components";

export const Text = styled.input`
  width: 100%;
  padding: 1.2rem 1rem;
  border: solid .1rem ${props => props.theme.border.primary};
  border-radius: .6rem;
  background: none;
  
  font-size: 1.4rem;
  font-weight: 300;
  color: ${props => props.theme.text.title};

  &::placeholder {
    color: ${props => transparentize(.7, props.theme.text.title)};
  }
`

export const Area = styled.div`
  flex: 1;
  border: solid .1rem ${props => props.theme.border.primary};
  border-radius: .6rem;
  background: none;
  padding-right: 1rem;
  position: relative;
  display: flex;
  gap: 1rem;
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

export const Max = styled.p` 
  height: 100%;
  color: ${({theme}) => theme.text.title};
  font-size: 1.2rem;
  font-weight: 400;
`