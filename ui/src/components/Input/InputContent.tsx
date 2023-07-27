import { ReactNode } from "react"
import * as S from './styles'

interface InputContentProps {
  children: ReactNode,
  direction?: 'row' | 'column'
}

export default function InputContent({ children, direction = 'column' }: InputContentProps) {
  return (
    <S.Content direction={direction}>
      {children}
    </S.Content>
  )
}