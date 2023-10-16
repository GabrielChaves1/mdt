import styled from "styled-components";

export const Sliders = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 2.5rem 0;
  gap: 3rem;
`

export const SliderArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`

export const SliderValues = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  p {
    font-weight: 400;
    font-size: 1.4rem;
    color: ${({theme}) => theme.text.title};
  }

  span {
    font-weight: 400;
    font-size: 1.4rem;
    color: ${({theme}) => theme.text.subtitle};
  }
`

export const Actions = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`