import { ChangeEvent, ElementType, ForwardedRef, InputHTMLAttributes, forwardRef, useState } from "react"
import * as S from './styles'
import { useTheme } from "styled-components"

interface TextfieldProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ElementType
  max?: number
}


export const TextField = forwardRef(({ icon: Icon, max, ...props }: TextfieldProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { colors } = useTheme();
  const [text, setText] = useState<string>("");

  const onInput = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  return (
    <S.Area>
      <S.Text maxLength={max} value={text} onChange={onInput} ref={ref} {...props} />
      {Icon && (
        <Icon size={16} color={colors.icon}/>
      )}

      {max && (
        <S.Max>{text.length}/{max}</S.Max>
      )}
    </S.Area>
  )
})