import { ReactNode } from 'react';
import * as S from './styles';

interface CardColumnProps {
  children: ReactNode
}

export default function CardColumn({ children }: CardColumnProps) {
  return (
    <S.Column>
      {children}
    </S.Column>
  )
}