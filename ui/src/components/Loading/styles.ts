import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  transform: translate(-50%,-50%);
  top: 50%;
  left: 50%;
  font-size: 1.6rem;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: ${({theme}) => theme.text.title};
`