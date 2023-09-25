import { darken, lighten, transparentize } from "polished";
import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
`

export const LeftContent = styled.div`
  flex: 1;
  height: 100%;
  border: solid .1rem ${({theme}) => theme.border.primary};
  border-radius: .6rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: linear-gradient(120deg, ${({theme}) => transparentize(.5, theme.bg.primary)}, ${({theme}) => transparentize(.97, theme.colors.primary)});
`

export const RightContent = styled.div`
  width: 57rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const ImageSelectorBox = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  width: 100%;
  height: 10rem;
`

export const ImageSelector = styled.button`
  flex: 1;
  height: 100%;
  border: solid .1rem ${({theme}) => theme.border.primary};
  background: none;
  outline: none;
  border-radius: .6rem;
  transition: all .15s ease-in-out;

  &:hover {
    background: ${({theme}) => transparentize(.98, theme.colors.ripple)};
    transform: scale(1.05);
  }

  &:active {
    background: ${({theme}) => transparentize(.94, theme.colors.ripple)};
  }
`

export const ExtenuatoryArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 2rem 2.5rem 2.5rem;
  border: solid .1rem ${({theme}) => theme.border.primary};
  border-radius: .6rem;
  width: 100%;
  position: relative;
  background: linear-gradient(120deg, ${({theme}) => transparentize(.5, theme.bg.primary)}, ${({theme}) => transparentize(.97, theme.colors.primary)});
`

export const ExtenuatoryTitle = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({theme}) => theme.text.title};
`

export const ExtenuatoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 15.5rem;
  overflow: auto;
  padding-right: .5rem;
  width: 100%;
  position: relative;
`

export const Extenuatory = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  border: solid .1rem ${({theme}) => theme.border.primary};
  border-radius: .6rem;

  p {
    font-size: 1.4rem;
    font-weight: 400;
    color: ${({theme}) => theme.text.title};
  }
`

export const CrimeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  padding: 2.5rem;
`

export const Crime = styled.div`
  padding: 1.2rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`