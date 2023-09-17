import Container from "@/components/Container";
import styled from "styled-components";

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Grid = styled.div`
  display: grid;
  flex: 1;
  grid-template-columns: 44.2rem 55.9rem;
  grid-template-rows: auto auto 32.9rem;
  grid-template-areas:
  'violator policers'
  'violator crimeSelector'
  'prisonDetails crimeSelector';
  gap: 2rem;
`