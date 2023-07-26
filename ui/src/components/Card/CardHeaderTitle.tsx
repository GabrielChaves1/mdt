import { ReactNode } from 'react';
import * as S from './styles';

interface CardHeaderTitleProps {
  children: ReactNode
}

export default function CardHeaderTitle({ children }: CardHeaderTitleProps) {
  return (
    <S.HeaderTitle>
      {children}
    </S.HeaderTitle>
  )
}