import { ReactNode } from "react";
import * as S from './styles';
import * as Select from '@radix-ui/react-select';

interface SelectMenuScrollButtonProps extends Select.SelectLabelProps {
  children: ReactNode,
}

export default function SelectMenuScrollButton({ children, ...props }: SelectMenuScrollButtonProps) {
  return (
    <S.ScrollButton {...props}>
      {children}
    </S.ScrollButton>
  )
}