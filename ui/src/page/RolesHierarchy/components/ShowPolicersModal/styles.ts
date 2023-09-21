import { transparentize } from "polished";
import styled from "styled-components";

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 50rem;
  overflow: auto;
`

export const User = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid .1rem ${({theme}) => theme.border.primary};
  padding: 1rem 1.3rem;
  border-radius: .6rem;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Image = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  padding: .3rem;
  border: solid .1rem ${({theme}) => theme.border.primary};
  object-fit: cover;
`

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: ${({theme}) => theme.text.title};
    font-weight: 400;
    font-size: 1.4rem;
    line-height: none;
  }

  span {
    font-size: 1.2rem;
    font-weight: 400;
    color: ${({theme}) => theme.colors.primary};
    line-height: none;
    text-shadow:  0rem .1rem .7rem ${({theme}) => transparentize(.7, theme.colors.primary)};
  }
`