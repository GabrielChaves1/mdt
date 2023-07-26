import { ReactNode } from "react"
import * as S from './styles'

interface InputContentProps {
  children: ReactNode
}

export default function InputContent({ children }: InputContentProps) {
  return (
    <S.Content>
      {children}
    </S.Content>
  )
}