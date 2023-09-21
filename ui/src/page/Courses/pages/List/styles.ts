import styled from "styled-components";

export const Content = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 24rem);
  grid-template-rows: repeat(3, 17.2rem);
  gap: 2rem;
  flex: 1;
  align-content: flex-start;
`

export const EmptySlot = styled.div`
  border-radius: .6rem;
  border: solid .1rem ${({theme}) => theme.border.primary};
`