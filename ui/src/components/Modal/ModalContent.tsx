import { ReactNode } from 'react';
import * as S from './styles';

interface ModalContentProps {
  children: ReactNode
}

export default function ModalContent({ children }: ModalContentProps) {
  return (
    <S.Content>
      {children}
    </S.Content>
  )
}