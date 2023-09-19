import Container from "@/components/Container";
import styled from "styled-components";

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const ConfigList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ConfigItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 3rem;
  border: solid .1rem ${({theme}) => theme.border.primary};
  border-radius: .6rem;

  p {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({theme}) => theme.text.title};
  }
`