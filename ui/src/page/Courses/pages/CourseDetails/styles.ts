import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Wrapper = styled.div`
  width: 100%;
  flex: 1 1 0;
  display: grid;
  grid-template-columns: 1fr 32.3rem;
  position: relative;
  gap: 2rem;
`

export const Post = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  border: .1rem solid ${({theme}) => theme.border.primary};
  border-radius: .6rem;
`

export const PostHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 2rem;
  border-bottom: .1rem solid ${({theme}) => theme.border.primary};
`

export const AuthorInfos = styled.div`
  display: flex;
  align-items: center;
  gap: 1.05rem;
`