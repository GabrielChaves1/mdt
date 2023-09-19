import { ElementType, ForwardedRef, InputHTMLAttributes, forwardRef } from "react"
import * as S from './styles'
import { useTheme } from "styled-components"

interface TextfieldProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ElementType
}


export const TextField = forwardRef(({ icon: Icon, ...props }: TextfieldProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { colors } = useTheme();
  
  if(Icon) {
    return (
      <S.Area>
        <S.Text ref={ref} {...props} />
        <Icon size={16} color={colors.icon}/>
      </S.Area>
    )
  }
  
  return (
    <S.Text ref={ref} {...props} />
  )
})