import { ReactNode } from 'react';
import * as S from './styles';

interface ModalTitleProps {
  children: ReactNode
}

export default function ModalTitle({ children }: ModalTitleProps) {
  return (
    <S.Title>
      {children}
    </S.Title>
  )
}