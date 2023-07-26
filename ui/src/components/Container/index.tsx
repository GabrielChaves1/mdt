import { animations } from '@/styles/animations'
import * as S from './styles'
import { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
}

export default function Container({ children, ...props }: ContainerProps) {
  return (
    <S.Container {...props} {...animations.fade}>
      {children}
    </S.Container>   
  )
}