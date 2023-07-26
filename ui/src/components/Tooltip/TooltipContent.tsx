import { ComponentProps } from 'react';
import * as S from './styles';
import * as Tooltip from '@radix-ui/react-tooltip';

export default function TooltipContent({children}: Tooltip.TooltipContentProps) {
  return (
    <S.Content>
      {children}
    </S.Content>
  )
} 