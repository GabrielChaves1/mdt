import { ButtonHTMLAttributes, ElementType, ReactNode } from 'react';
import * as S from './styles';
import Ripple from '../Ripple';
import { useTheme } from 'styled-components';

interface CardHeaderActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType
}

export default function CardHeaderAction({ children, icon: Icon, ...props }: CardHeaderActionProps) {
  const { colors } = useTheme();

  return (
    <S.HeaderAction {...props}>
      <Icon />
      <Ripple duration={1000} color={colors.ripple} />
    </S.HeaderAction>
  )
}