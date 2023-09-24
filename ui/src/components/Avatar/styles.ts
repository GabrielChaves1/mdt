import styled from "styled-components";

export const Wrapper = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  padding: .3rem;
  border: solid .1rem ${({theme}) => theme.border.primary};
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-radius: inherit;
  border: solid .1rem ${({theme}) => theme.border.primary};
  object-fit: cover;
`