import { ReactNode } from 'react';
import * as S from './styles';

interface ModalHeaderProps {
  children: ReactNode
}

export default function ModalHeader({ children }: ModalHeaderProps) {
  return (
    <S.Header>
      <S.TitleArea>
        {children}
      </S.TitleArea>
    </S.Header>
  )
}