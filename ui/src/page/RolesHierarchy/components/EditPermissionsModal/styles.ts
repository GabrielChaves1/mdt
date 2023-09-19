import styled from "styled-components";

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`

export const PermissionsList = styled.div`
  display: flex;
  flex-direction: column;
`

export const Permission = styled.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const PermissionTitleArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  justify-content: center;

  p {
    font-size: 1.4rem;
    color: ${({theme}) => theme.text.title};
    font-weight: 400;
  }

  span {
    font-size: 1.2rem;
    color: ${({theme}) => theme.text.subtitle};
    font-weight: 400;
  }
`

export const Actions = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1rem;
`