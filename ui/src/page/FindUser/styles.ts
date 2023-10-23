import Card from "@/components/Card";
import Container from "@/components/Container";
import styled from "styled-components";

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const SearchBarContainer = styled.div`
  width: 100%;
  height: max-content;
`

export const SearchArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;
`