import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';
import Ripple from '../Ripple';
import { useTheme } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' 

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  position?: 'flex-start' | 'center' | 'flex-end'
  fill?: boolean
}

export default function Button({children, fill = false, position = 'flex-start', variant = 'primary', ...props}: ButtonProps) {
  const { colors } = useTheme();
  
  return (
    <S.Container aria-label='Botão' position={position} fill={fill} variant={variant} {...props}>
      {children}
      <Ripple color={colors.ripple}/>
    </S.Container>
  )
}