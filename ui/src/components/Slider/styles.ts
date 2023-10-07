import styled from "styled-components";
import * as Slider from '@radix-ui/react-slider';
import { darken, transparentize } from "polished";

export const Root = styled(Slider.Root)`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
  width: 100%;
  height: .3rem;
  border: 2rem;
`

export const Track = styled(Slider.Track)`
  position: relative;
  flex-grow: 1;
  border-radius: 15rem;
  height: 100%;
  background: ${({theme}) => darken(.04, theme.bg.primary)};
`

export const Range = styled(Slider.Range)`
  position: absolute;
  background-color: ${({theme}) => theme.colors.primary};
  height: 100%;
  border-radius: 15rem;
`

export const Thumb = styled(Slider.Thumb)`
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${({theme}) => theme.colors.primary};
  box-shadow: 0 .2rem 1rem ${({theme}) => transparentize(.8, theme.colors.primary)};
  border-radius: 50%;
`