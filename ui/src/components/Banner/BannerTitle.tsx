import { ReactNode } from "react"
import * as S from './styles'

interface BannerTitleProps {
  children: ReactNode
}

export default function BannerTitle({ children }: BannerTitleProps) {
  return (
    <S.Title>
     {children} 
    </S.Title>
  )
}