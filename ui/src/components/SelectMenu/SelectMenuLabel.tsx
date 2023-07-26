import { ReactNode } from "react";
import * as S from './styles';
import * as Select from '@radix-ui/react-select';

interface SelectMenuLabelProps extends Select.SelectLabelProps {
  children: ReactNode,
}

export default function SelectMenuLabel({ children, ...props }: SelectMenuLabelProps) {
  return (
    <S.Label {...props}>
      {children}
    </S.Label>
  )
}