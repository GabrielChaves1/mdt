import Container from "@/components/Container";
import styled from "styled-components";

export const Wrapper = styled(Container)`
  display: grid;
  grid-template-areas: 
  'banner  stats'
  'warns   players'
  'warns   chat'
  'warns  chat';
  grid-template-columns: 65.6rem 34.5rem;
  grid-template-rows: 16.5rem 8.5rem auto 24.5rem;
  gap: 2rem;
`

export const Stats = styled.div`
  display: flex;
  grid-area: stats;
  gap: 2rem;
`

export const StatsBox = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .2rem;
  flex: 1;
  height: 100%;
  border-radius: .6rem;
  border: solid .1rem ${props => props.theme.border.primary};
  box-shadow: 0 .4rem .8rem 0 rgba(0, 0, 0, 0.025);

  h1 {
    font-size: 1.8rem;
    font-weight: 500;
    color: ${props => props.theme.colors.primary};
  }

  span {
    font-size: 3rem;
    font-weight: 800;
    color: ${props => props.theme.colors.primary};
  }
`

export const Warns = styled.div`
  grid-area: warns;
  position: relative;
`

export const Graphic = styled.div`
  grid-area: graphic;
`

export const PlayerItem = styled.div`
  width: 100%;
  border: solid .1rem ${props => props.theme.border.primary};
  border-radius: .6rem;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 .4rem .8rem 0 rgba(0, 0, 0, 0.025);

  p {
    font-size: 1.4rem;
    color: ${props => props.theme.text.subtitle};
  }

  span {
    width: .8rem;
    height: .8rem;
    border-radius: 50%;
    background: ${props => props.theme.colors.primary};
  }
`

export const PostsArea = styled.div`
  padding: 1.5rem;
  max-height: 26.55rem;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`