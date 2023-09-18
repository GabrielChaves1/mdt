import { ReactNode } from 'react';
import * as S from './styles';

interface ModalSubtitleProps {
  children: ReactNode
}

export default function ModalSubtitle({ children }: ModalSubtitleProps) {
  return (
    <S.Subtitle>
      {children}
    </S.Subtitle>
  )
}