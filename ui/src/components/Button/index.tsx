import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fill?: boolean
}

export default function Button({children, fill = false, ...props}: ButtonProps) {
  return (
    <S.Container fill={fill} {...props}>
      {children}
    </S.Container>
  )
}