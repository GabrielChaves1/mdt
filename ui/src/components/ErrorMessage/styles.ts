import styled from "styled-components";

export const Message = styled.p`
  font-size: 1.2rem;
  color: ${({theme}) => theme.text.title};
  font-weight: 300;
  display: flex;
  align-items: center;
  gap: .7rem;
`