import { motion } from "framer-motion";
import { darken, transparentize } from "polished";
import styled from "styled-components";

export const Root = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 5;
  background: ${({theme}) =>  transparentize(.4,theme.bg.primary)};
  left: 0;
  top: 0;
  
  display: grid;
  place-items: center;
`

export const Wrapper = styled(motion.div)`
  width: 64.2rem;
  padding: 2rem;
  background: ${({theme}) => darken(0.015, theme.bg.primary)};
  border-radius: .6rem;
  border: solid .1rem ${({theme}) => theme.border.primary};
  box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

export const Content = styled.div`
  position: relative;
  width: 100%;
  flex: 1;
`

export const TitleArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: .4rem;
`

export const CloseButton = styled.button`
  position: absolute;
  right: 2rem;
  top: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  z-index: 2;
`

export const Title = styled.h3`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({theme}) => theme.text.title};
`

export const Subtitle = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({theme}) => theme.text.subtitle};
`