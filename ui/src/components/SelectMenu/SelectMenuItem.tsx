import { ReactNode } from "react";
import * as S from './styles';
import * as Select from '@radix-ui/react-select';

interface SelectMenuItemProps extends Select.SelectItemProps {
  children: ReactNode,
}

export default function SelectMenuItem({ children, value, ...props }: SelectMenuItemProps) {
  return (
    <S.Item value={value} {...props}>
      {children}
    </S.Item>
  )
}