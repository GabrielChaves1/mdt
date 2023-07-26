import { ReactNode } from 'react';
import * as S from './styles';

interface CardRootProps {
  children: ReactNode
}

export default function CardRoot({ children }: CardRootProps) {
  return (
    <S.Root>
      {children}
    </S.Root>
  )
}