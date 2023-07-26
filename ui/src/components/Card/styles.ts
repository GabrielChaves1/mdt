import { transparentize } from "polished";
import styled from "styled-components";

export const Root = styled.section`
  width: 100%;
  height: 100%;

  border: solid .1rem ${props => props.theme.border.primary};
  border-radius: .6rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 .4rem .8rem 0 rgba(0, 0, 0, 0.025);
`

export const Header = styled.header`
  padding: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;
  color: ${props => props.theme.text.title};
`

export const HeaderSubtitle = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${props => props.theme.text.subtitle};
`

export const HeaderAction = styled.button`
  outline: none;
  background: none;
  position: relative;
  overflow: hidden;

  border: solid .1rem ${props => props.theme.border.primary};
  padding: 1.1rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: ${props => props.theme.colors.icon};
  transition: .2s ease-in-out;

  &:hover {
    background: ${props => transparentize(.98, props.theme.colors.ripple)};
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const Separator = styled.div`
  width: 100%;
  height: .1rem;
  background: ${props => props.theme.border.primary};
`

export const Content = styled.div`
  width: 100%;
  flex: 1;
  position: relative;
`