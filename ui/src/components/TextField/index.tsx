import { ChangeEvent, ElementType, ForwardedRef, InputHTMLAttributes, forwardRef, useState } from "react"
import * as S from './styles'
import { useTheme } from "styled-components"

interface TextfieldProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ElementType
}


export const TextField = forwardRef(({ icon: Icon, ...props }: TextfieldProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { colors } = useTheme();

  return (
    <S.Area>
      <S.Text ref={ref} {...props} />
      {Icon && (
        <Icon size={16} color={colors.icon}/>
      )}
    </S.Area>
  )
})