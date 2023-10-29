import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border: solid .1rem ${props => props.theme.border.primary};
  border-radius: .6rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const Title = styled.p`
  color: ${props => props.theme.text.title};
  font-size: 1.4rem;
  font-weight: 400;
`

export const Author = styled.span`
  color: ${props => props.theme.text.subtitle};
  font-size: 1.2rem;
  font-weight: 400;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: .8rem;
`

export const Description = styled.p`
  font-size: 1.2rem;
  margin-top: 1rem;
  color: ${({theme}) => theme.text.title};
  width: 43rem;
`