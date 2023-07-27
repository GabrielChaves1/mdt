import Container from "@/components/Container";
import styled from "styled-components";

export const Wrapper = styled(Container)`
  display: grid;
  grid-template-areas: 
  'banner stats'
  'warns players'
  'graphic players';
  grid-template-columns: 65.6rem 34.5rem;
  grid-template-rows: 16.5rem auto 24.5rem;
  gap: 2rem;
`

export const Stats = styled.div`
  display: flex;
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
`

export const Graphic = styled.div`
  grid-area: graphic;
`

export const PlayerListWrapper = styled.div`
  grid-area: players;
  position: relative;
`

export const PlayerList = styled.div`
  gap: .9rem;
  padding: 2rem 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
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
