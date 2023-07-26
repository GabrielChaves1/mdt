import * as S from './styles';
import { ReactNode } from "react";
import * as Select from '@radix-ui/react-select'

interface SelectMenuContentProps extends Select.SelectContentProps {
  children: ReactNode
}

export default function SelectMenuContent({children}: SelectMenuContentProps) {
  return (
    <S.Content>
      {children}
    </S.Content>
  )
}