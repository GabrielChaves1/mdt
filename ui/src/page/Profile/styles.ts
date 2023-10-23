import Container from "@/components/Container";
import { darken } from "polished";
import styled from "styled-components";

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Banner = styled.header`
  width: 100%;
  height: 15.2rem;
  background: ${({theme}) => theme.colors.primary};
  border-top-left-radius: .6rem;
  border-top-right-radius: .6rem;
  position: relative;
  margin-top: 2rem;
`

export const UserImage = styled.img`
  position: absolute;
  top: 50%;
  left: 8.2rem;
  width: 16.8rem;
  height: 16.8rem;
  border-radius: 50%;
  background: ${({theme}) => theme.bg.primary};
  border: solid .8rem ${({theme}) => theme.bg.primary};
  outline: none;
`

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33.1rem;
  height: 100%;
  padding-top: 9.5rem;
  padding-left: 2.9rem;
  padding-right: 2.9rem;
  border-left: solid .1rem ${({theme}) => theme.border.primary};
  border-right: solid .1rem ${({theme}) => theme.border.primary};
  border-bottom: solid .1rem ${({theme}) => theme.border.primary};
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: max-content;
`

export const Username = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  color: ${({theme}) => theme.text.title};
`

export const Rank = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({theme}) => theme.colors.primary};
`

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`

export const LevelWrapper = styled.div`
  border: solid .1rem ${({theme}) => theme.border.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 2rem;
  padding: 1.4rem 1.2rem;
  padding-bottom: 2rem;
  border-radius: .6rem;
  height: 5.8rem;
  box-shadow: 0 .4rem .8rem 0 rgba(0, 0, 0, 0.025);
  position: relative;
`

export const ProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: .7rem;
  background: ${({theme}) => darken(.025, theme.bg.primary)};
  border-radius: .6rem;

  &::before {
    content: '';
    display: block;
    width: 25%;
    height: 100%;
    background: ${({theme}) => theme.colors.primary};
    border-radius: inherit;
  }
`

export const CurrentLevel = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${({theme}) => theme.text.title};
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 1.1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    color: ${({theme}) => theme.text.subtitle};
  }
`

export const Exp = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${({theme}) => theme.text.title};

  span {
    color: ${({theme}) => theme.text.subtitle};
  }
`

export const CoursesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.2rem 1.5rem;
  width: 100%;
  margin-top: 2.1rem;
  border: solid .1rem ${({theme}) => theme.border.primary};
  border-radius: .6rem;
  box-shadow: 0 .4rem .8rem 0 rgba(0, 0, 0, 0.025);
  gap: .8rem;

  h2 {
    font-size: 1.4rem;
    font-weight: 500;
    color: ${({theme}) => theme.text.title};
  }
`

export const CoursesList = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-wrap: wrap;
  gap: .5rem;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`