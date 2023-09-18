import { transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: .4rem;
`

export const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: .2rem;
  padding: 1rem;
  width: max-content;
  border-radius: .7rem .7rem .7rem 0;
  background: ${({theme}) => transparentize(.85, theme.colors.primary)};
`

export const Author = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  color: ${({theme}) => theme.text.subtitle};
  user-select: text;
`

export const Message = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  color: ${({theme}) => theme.text.title};
  user-select: text;
`

export const CreatedAt = styled.time`
  font-size: 1.2rem;
  font-weight: 300;
  color: ${({theme}) => theme.text.subtitle};
  user-select: text;
`