import { ReactNode } from "react"
import * as S from './styles'

interface BannerHeaderProps {
  children: ReactNode
}

export default function BannerHeader({ children }: BannerHeaderProps) {
  return (
    <S.Header>
     {children} 
    </S.Header>
  )
}