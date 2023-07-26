import { ButtonHTMLAttributes, ElementType, ReactNode } from 'react';
import * as S from './styles';
import Ripple from '../Ripple';
import { useTheme } from 'styled-components';
import Tooltip from '../Tooltip';

interface CardHeaderActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string,
  icon: ElementType
}

export default function CardHeaderAction({ children, icon: Icon, label, ...props }: CardHeaderActionProps) {
  const { colors } = useTheme();

  return (
    <>
      <Tooltip.Provider>
        <Tooltip.Root delayDuration={100}>
          <Tooltip.Trigger>
            <S.HeaderAction {...props}>
              <Icon />
              <Ripple duration={1000} color={colors.ripple} />
            </S.HeaderAction>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content sideOffset={5}>
              {label}
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </>
  )
}