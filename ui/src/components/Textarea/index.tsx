import { ForwardedRef, TextareaHTMLAttributes, forwardRef } from "react"
import * as S from './styles'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> 


export const Textarea = forwardRef((props: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
  return (
    <S.Textarea ref={ref} {...props} />
  )
})