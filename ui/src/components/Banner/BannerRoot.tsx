import { ReactNode } from "react"
import * as S from './styles'

interface BannerRootProps {
  children: ReactNode
}

export default function BannerRoot({ children }: BannerRootProps) {
  return (
    <S.Root>
     {children} 
    </S.Root>
  )
}