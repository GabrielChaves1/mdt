import { ReactNode } from "react"
import * as S from './styles'

interface InputLabelProps {
  children: ReactNode
}

export default function InputLabel({ children }: InputLabelProps) {
  return (
    <S.Label>
      {children}
    </S.Label>
  )
}