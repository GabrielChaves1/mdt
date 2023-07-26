import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';
import Ripple from '../Ripple';
import { useTheme } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' 

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  fill?: boolean
}

export default function Button({children, fill = false, variant = 'primary', ...props}: ButtonProps) {
  const { colors } = useTheme();
  
  return (
    <S.Container fill={fill} variant={variant} {...props}>
      {children}
      <Ripple color={colors.ripple}/>
    </S.Container>
  )
}