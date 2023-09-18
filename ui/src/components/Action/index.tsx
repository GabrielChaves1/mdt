import { ButtonHTMLAttributes, ElementType } from 'react';
import * as S from './styles';
import Ripple from '../Ripple';
import { useTheme } from 'styled-components';
import Tooltip from '../Tooltip';

interface ActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  icon: ElementType
}

export default function Action({ children, icon: Icon, label, ...props }: ActionProps) {
  const { colors } = useTheme();

  return (
    <>
      <Tooltip.Provider>
        <Tooltip.Root delayDuration={100}>
          <Tooltip.Trigger>
            <S.HeaderAction {...props}>
              <Icon size={16} color={colors.icon}/>
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