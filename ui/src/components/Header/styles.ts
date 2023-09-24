import { darken, transparentize } from "polished";
import styled from "styled-components";

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  width: 100%;
  margin: 1.5rem 0;
`

export const UserDataBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    font-size: 1.4rem;
    font-weight: 400;
    color: ${({theme}) => theme.text.title};
  }

  span {
    font-size: 1.2rem;
    font-weight: 400;
    color: ${({theme}) => theme.colors.primary};
    line-height: none;
    text-shadow:  0rem .1rem .7rem ${({theme}) => transparentize(.7, theme.colors.primary)};
  }
`

export const ProgressBar = styled.div`
  width: 19.6rem;
  height: .3rem;
  position: relative;
  margin-top: .6rem;
  border-radius: .6rem;
  background: ${({theme}) => darken(.03, theme.bg.primary)};
`

export const Fill = styled.div`
  height: 100%;
  width: 50%;
  max-width: 100%;
  background: ${({theme}) => theme.colors.primary};
  border-radius: inherit;
  z-index: 2;

  &::before {
    content: attr(data-exp) "/" attr(data-required) " exp";
    font-size: 1rem;
    font-weight: 400;
    color: #FFF;
    position: absolute;
    top: -2.4rem;
    right: 0;
    border: solid .1rem ${({theme}) => theme.border.primary};
    padding: .05rem .35rem;
    border-radius: 1rem;
    padding: .2rem .6rem;
    box-shadow: 0 .1rem .3rem rgba(0,0,0, .1);
    color: ${({theme}) => theme.text.title};
  }
`