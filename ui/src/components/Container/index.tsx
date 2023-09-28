import * as S from './styles'
import { ReactNode } from "react"
import { animations } from '@/styles/animations'

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