import styled from "styled-components";

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  p {
    font-size: 1.2rem;
    color: white;
    font-weight: 300;
    display: flex;
    align-items: center;
    gap: .7rem;
  }
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`