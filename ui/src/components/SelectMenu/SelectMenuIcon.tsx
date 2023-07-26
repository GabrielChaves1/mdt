import * as S from './styles';
import { ReactNode } from "react";
import * as Select from '@radix-ui/react-select';

interface SelectMenuIconProps extends Select.SelectIconProps {
  children: ReactNode
}

export default function SelectMenuIcon({children}: SelectMenuIconProps) {
  return (
    <S.Icon>
      {children}
    </S.Icon>
  )
}