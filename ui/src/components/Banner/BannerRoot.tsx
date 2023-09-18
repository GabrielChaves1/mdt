import { HTMLAttributes, ReactNode } from "react"
import * as S from './styles'

interface BannerRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export default function BannerRoot({ children, ...props }: BannerRootProps) {
  return (
    <S.Root {...props}>
     {children} 
    </S.Root>
  )
}