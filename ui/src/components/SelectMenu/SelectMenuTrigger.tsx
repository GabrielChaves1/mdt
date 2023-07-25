import { ReactNode } from 'react';
import * as S from './styles';

export default function SelectMenuTrigger({ children }: { children: ReactNode }) {
  return (
    <S.Trigger>
      {children}
    </S.Trigger>
  )
}