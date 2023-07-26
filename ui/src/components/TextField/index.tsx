import { ForwardedRef, InputHTMLAttributes, ReactNode, forwardRef } from "react"
import * as S from './styles'

type TextfieldProps = InputHTMLAttributes<HTMLInputElement> 


export const TextField = forwardRef((props: TextfieldProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <S.Text ref={ref} {...props}/>
  )
})