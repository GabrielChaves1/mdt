import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.p`
  font-size: 1.4rem;
  color: ${props => props.theme.text.title};
  font-weight: 400;
`

export const Content = styled.div<{direction: 'row' | 'column'}>`
  display: flex;
  flex-direction: ${props => props.direction};
  gap: 1rem;
`
