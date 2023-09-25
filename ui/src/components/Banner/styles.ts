import { transparentize } from "polished";
import styled from "styled-components";

export const Root = styled.div`
  width: 100%;
  background: ${props => transparentize(.89, props.theme.colors.primary)};
  border-radius: .6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
  position: relative;
  overflow: hidden;
  border: solid .1rem ${({theme}) => theme.border.primary};
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`

export const Title = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  color: ${props => props.theme.text.title};
`

export const Image = styled.img`
  height: 10rem;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  object-fit: fill;
  opacity: .7;
`