import { ReactNode } from 'react';
import * as S from './styles';

interface CardHeaderProps {
  children: ReactNode
}

export default function CardHeader({ children }: CardHeaderProps) {
  return (
    <S.Header>
      {children}
    </S.Header>
  )
}