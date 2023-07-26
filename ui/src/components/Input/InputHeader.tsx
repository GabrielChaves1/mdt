import { ReactNode } from "react"
import * as S from './styles'

interface InputHeaderProps {
  children: ReactNode
}

export default function InputHeader({ children }: InputHeaderProps) {
  return (
    <S.Header>
      {children}
    </S.Header>
  )
}