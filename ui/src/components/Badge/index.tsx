import { ReactNode } from 'react';
import * as S from './styles';

interface BadgeProps {
  children: ReactNode,
  color: string
}

export default function Badge({ children, color }: BadgeProps) {
  return (
    <S.Wrapper color={color}>
      {children}
    </S.Wrapper>
  )
}