import { transparentize } from "polished";
import styled from "styled-components";

export const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  max-height: 50rem;
  overflow: auto;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  cursor: pointer;
`

export const Item = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem 1.3rem;
  justify-content: space-between;
  align-items: center;
  border-radius: .6rem;
  border: .1rem solid ${({theme}) => theme.border.primary};
`

export const PolicerName = styled.p`
  color: ${({theme}) => theme.text.title};
  font-size: 1.4rem;
  font-weight: 400;
`

export const PolicerRole = styled.span`
  padding: .5rem 1rem;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({theme}) => theme.text.title};
  border-radius: 3rem;
  background: ${({theme}) => transparentize(.80, theme.colors.primary)};
`

export const Localization = styled.button`
  width: 3.3rem;
  height: 3.3rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: solid .1rem ${({theme}) => theme.border.primary};
  background: none;
  position: relative;
  overflow: hidden;
`