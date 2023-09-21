import { ButtonHTMLAttributes, ElementType } from 'react';
import * as S from './styles';
import { useTheme } from 'styled-components';
import Tooltip from '../Tooltip';

interface ActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  icon: ElementType
  size?: "sm" | "lg"
}

export default function Action({ children, icon: Icon, label, size = "lg", ...props }: ActionProps) {
  const { colors } = useTheme();

  return (
    <>
      <Tooltip.Provider>
        <Tooltip.Root delayDuration={100}>
          <Tooltip.Trigger>
            <S.HeaderAction size={size} {...props}>
              <Icon size={'1.6rem'} color={colors.icon}/>
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