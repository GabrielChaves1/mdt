import Container from "@/components/Container";
import styled from "styled-components";

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 44.2rem 55.9rem;
  grid-template-rows: auto 14.6rem 32.9rem;
  grid-template-areas:
  'violator policers'
  'violator crimeSelector'
  'prisonDetails crimeSelector';
  gap: 2rem;
`