import { ComponentProps } from 'react';
import * as S from './styles';

export default function TooltipTrigger({children}: ComponentProps<'div'>) {
  return (
    <S.Trigger>
      {children}
    </S.Trigger>
  )
} 