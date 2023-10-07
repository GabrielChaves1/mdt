import { transparentize } from "polished";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  flex: 1;
  justify-content: space-between;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Return = styled.div`
  width: max-content;
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
  /* flex: 1; */
  height: 10rem;
  flex: 1;
  border: solid .1rem ${({theme}) => theme.border.primary};
  background: none;
  outline: none;
  border-radius: .6rem;
  transition: all .15s ease-in-out;
  position: relative;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    border-radius: inherit;
  }

  &:hover {
    transform: scale(1.05);
  }
`

export const ImageSelectorDelete = styled.button`
  position: absolute;
  right: .5rem;
  top: .75rem;
  background: ${({theme}) => theme.bg.primary};
  z-index: 2;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  border: solid .1rem ${({theme}) => theme.border.primary};
  display: grid;
  place-items: center;
  box-shadow: 0 0 1rem .3rem ${({theme}) => theme.bg.primary};
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
`

export const ExtenuatoryTitle = styled.p`
  font-size: 1.4rem;
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
    font-size: 1.3rem;
    font-weight: 400;
    color: ${({theme}) => theme.text.subtitle};
  }
`

export const CrimeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: .6rem;
  padding: 2rem;
  height: 29rem;
  overflow: auto;
`

export const Crime = styled.div`
  padding: 1.2rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid .1rem ${({theme}) => theme.border.primary};
  border-radius: .6rem;
`

export const CrimeNameBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  p {
    font-size: 1.4rem;
    color: ${({theme}) => theme.text.title};
    font-weight: 400;
    max-width: 25rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`

export const CrimeSpecsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const CrimeSpec = styled.div`
  display: flex;
  align-items: center;
  gap: .7rem;
  padding: .4rem .8rem;
  border: solid .1rem ${({theme}) => theme.border.primary};
  border-radius: .6rem;
  font-size: 1.4rem;
  font-weight: 400;
  color: ${({theme}) => theme.text.title};
`

export const ImagePreview = styled.img`
  width: 60rem;
  height: 60rem;
  background: none;
  border: solid .1rem ${({theme}) => theme.border.primary};
  border-radius: .6rem;
  object-fit: contain;
`

export const PreviewTrigger = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
`