import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';
import Ripple from '../Ripple';
import { useTheme } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' 
export type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  position?: 'flex-start' | 'center' | 'flex-end'
  fill?: boolean
}

export default function Button({
  fill = false, 
  position = 'flex-start', 
  variant = 'primary', 
  size,
  children,
  ...props
}: ButtonProps){
  const { colors } = useTheme();
  
  return (
    <S.Container size={size} position={position} filled={fill} variant={variant} {...props}>
      {children}
      <Ripple color={colors.ripple}/>
    </S.Container>
  )
}