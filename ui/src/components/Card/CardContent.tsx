import { ReactNode } from 'react';
import * as S from './styles';

interface CardContentProps {
  children: ReactNode
}

export default function CardContent({ children }: CardContentProps) {
  return (
    <S.Content>
      {children}
    </S.Content>
  )
}