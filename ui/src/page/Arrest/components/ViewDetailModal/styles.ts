import { transparentize } from "polished";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const UserBox = styled.div`
  display: flex;
  padding: 2rem;
  border-top: solid .1rem ${({theme}) => theme.border.primary};
  border-bottom: solid .1rem ${({theme}) => theme.border.primary};
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
`

export const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 13rem;
  height: 13rem;
  border: solid .1rem ${({theme}) => theme.border.primary};
  border-radius: 50%;
  padding: 1rem;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: solid .1rem ${({theme}) => theme.border.primary};
  object-fit: cover;
`

export const PrisionData = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`

export const Username = styled.h4`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({theme}) => theme.text.title};
`

export const ArrestedBy = styled.div`
  display: flex;
  flex-direction: column;
  gap: .6rem;
  align-items: flex-start;

  p {
    margin-top: .5rem;
    font-size: 1.2rem;
    font-weight: 400;
    color: ${({theme}) => theme.text.title};
  }
`

export const Policers = styled.div`
  display: flex;
  gap: .6rem;
  max-width: 35rem;
  flex-wrap: wrap;
  margin-bottom: .75rem;
`

export const Policer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .6rem;
  font-size: 1.2rem;
  font-weight: 400;
  padding: .5rem 1rem;
  color: ${({theme}) => theme.text.title};
  background: ${({theme}) => transparentize(.80, theme.colors.primary)};
  border: solid .1rem ${({theme}) => theme.border.primary};
  border-radius: 3rem;
  transition: all .1s ease-in-out;

  &:hover {
    background: ${({theme}) => transparentize(.6, theme.colors.primary)};
  }

  &:active {
    background: ${({theme}) => transparentize(.5, theme.colors.primary)};
  }
`

export const Reason = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${({theme}) => theme.text.subtitle};
  max-width: 39rem;

  b {
    font-weight: 400;
    color: ${({theme}) => theme.text.title};
  }
`

export const CrimesListBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const CrimesHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > p {
    font-size: 1.4rem;
    font-weight: 400;
    color: ${({theme}) => theme.text.title};
  }
`

export const CrimesCounterBox = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-right: 1.7rem;
  width: 100%;
  border: solid .1rem ${({theme}) => theme.border.primary};
  border-radius: 0 0 .6rem .6rem;
  padding: 1.2rem 2rem;
  background: ${({theme}) => transparentize(.98,theme.colors.ripple)};

  p {
    font-size: 1.2rem;
    font-weight: 300;
    color: ${({theme}) => theme.text.title};
  }
`

export const CrimeCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .7rem;

  p {
    font-size: 1.4rem;
    font-weight: 400;
    color: ${({theme}) => theme.text.title};
  }
`

export const CrimesList = styled.div`
  display: flex;
  flex-direction: column;
`

export const Crime = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 2rem;
  border: solid .1rem ${({theme}) => theme.border.primary};
  border-bottom: none;

  &:first-child {
    border-radius: .6rem .6rem 0 0;
  }

  p {
    font-size: 1.4rem;
    font-weight: 400;
    color: ${({theme}) => theme.text.title};
  }

  &:last-child {
    border-radius: 0rem;
  }
`

export const CrimeBadges = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const CrimeBadge = styled.div`
  padding: .4rem .8rem;
  display: flex;
  align-items: center;
  gap: .7rem;

  font-size: 1.4rem;
  font-weight: 400;
  color: ${({theme}) => theme.text.title};
  border: solid .1rem ${({theme}) => theme.border.primary};
  border-radius: .6rem;
`

export const Scroll = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 26.5rem;
  overflow: auto;
`