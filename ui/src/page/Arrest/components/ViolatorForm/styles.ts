import styled from "styled-components";

export const ViolatorWrapper = styled.div`
  grid-area: violator;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;
`

export const SelectImageArea = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const SelectImage = styled.button`
  flex: 1;
  height: 9.6rem;
  display: grid;
  place-items: center;
  border: solid .1rem ${props => props.theme.border.primary};
  border-radius: .6rem;
  background: none;

  svg path {
    fill: ${props => props.theme.colors.icon};
  }
`