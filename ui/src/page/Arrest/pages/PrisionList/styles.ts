import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  height: 100%;
  justify-content: center;
`

export const ListPresos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  height: 70%;
`

export const Return = styled.div`
  width: 100%;
`

export const Actions = styled.div`
  display: flex;
  margin-top: 1.5rem;
`

export const Preso = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30rem;
  flex: 1 1 32%;
  background: #0000001f;
  border-radius: 0.4rem;

  img {
    height: 11rem;
    width: 11rem;
    object-fit: cover;
    border-radius: 50%;
  }

  .nome {
    margin: 1rem;
    font-size: 2rem;
    color: #fff;
    font-weight: 500;
  }

  .tempo-restante {
    font-size: 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(255 255 255 / 30%);
    font-weight: 100;

    span {
      margin-left: .5rem;
      margin-right: .2rem;
      font-weight: 500;
      color: #fff;
    }
  }
`