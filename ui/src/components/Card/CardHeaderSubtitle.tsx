import { ReactNode } from 'react';
import * as S from './styles';

interface CardHeaderSubtitleProps {
  children: ReactNode
}

export default function CardHeaderSubtitle({ children }: CardHeaderSubtitleProps) {
  return (
    <S.HeaderSubtitle>
      {children}
    </S.HeaderSubtitle>
  )
}