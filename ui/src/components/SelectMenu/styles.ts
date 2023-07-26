import styled from "styled-components";
import * as Select from '@radix-ui/react-select';
import { darken, transparentize } from "polished";

export const Trigger = styled(Select.Trigger)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: .4rem;
  padding: 0 1.5rem;
  font-size: 1.3rem;
  line-height: 1;
  height: 3.5rem;
  gap: .5rem;
  border: solid .1rem ${props => props.theme.border.primary};
  background: none;
  
  font-size: 1.4rem;
  font-weight: 400;
  color: ${props => props.theme.text.subtitle};
  transition: .15s ease-in;

  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover {
    background: ${props => props.theme.bg.primary};
  }
`

export const Icon = styled(Select.Icon)`
  display: grid;
  place-items: center;
`

export const Content = styled(Select.Content)`
  border-radius: .2rem;
  box-shadow: 0 1rem 1.8rem -1rem rgba(22, 23, 24, 0.1), 0 1rem 2rem -1.5rem rgba(22, 23, 24, 0.2);
  border-radius: .6rem;
  background: ${props => props.theme.bg.primary};
  border: solid .1rem ${props => props.theme.border.primary};
  position: relative;
`

export const Item = styled(Select.Item)`
  font-size: 1.3rem;
  line-height: 1;
  color: var(--violet-11);
  border-radius: 3px;
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 2.5rem;
  padding: 0 2.5rem 0 2.5rem;
  position: relative;
  user-select: none;
  color: ${props => props.theme.text.subtitle};
  width: 100%;
  cursor: pointer;

  &:hover {
    background: ${props => transparentize(.85, props.theme.colors.primary)};
  }
`

export const Label = styled(Select.Label)`
  padding: .5rem 1rem;
  font-size: 1.2rem;
  color: ${props => transparentize(0.25, props.theme.text.subtitle)};
`

export const ScrollButton = styled(Select.SelectScrollUpButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  background-color: none;
  color: ${props => props.theme.text.subtitle};
  cursor: default;
`

export const Separator = styled(Select.Separator)`
  height: 1px;
  background-color: ${props => props.theme.border.primary};
  margin: 5px;
`