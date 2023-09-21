import { transparentize } from "polished";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  display: flex;
  width: 100%;
  background: ${({theme}) => theme.colors.primary};
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-radius: .6rem .6rem 0 0;
`

export const Title = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: #FFF;
`

export const TimeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .6rem;

  font-size: 1.2rem;
  font-weight: 400;
  color: #FFF;
`

export const Main = styled.div`
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-left: solid .1rem ${({theme}) => theme.border.primary};
  border-right: solid .1rem ${({theme}) => theme.border.primary};
`

export const Subtitle = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({theme}) => theme.text.title};
`

export const Date = styled.time`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({theme}) => theme.text.subtitle};
`

export const Button = styled.button`
  width: 100%;
  height: 3.5rem;
  background: none;
  outline: none;
  border: solid .1rem ${({theme}) => theme.border.primary};
  border-radius: 0 0 .6rem .6rem;
  color: ${({theme}) => theme.text.title};
  font-size: 1.4rem;
  font-weight: 400;
  transition: .15s ease-in-out;

  &:hover {
    background: ${({theme}) => transparentize(.98, theme.colors.ripple)};
  }

  &:active {
    background: ${({theme}) => transparentize(.94, theme.colors.ripple)};
  }
`