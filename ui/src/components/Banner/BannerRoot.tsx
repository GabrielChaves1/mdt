import { HTMLAttributes, ReactNode } from "react"
import * as S from './styles'

interface BannerRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  icon?: string
}

export default function BannerRoot({ children, icon, ...props }: BannerRootProps) {
  return (
    <S.Root {...props}>
      {children}
      {icon && (
      <S.Image src={icon} alt="banner illustration" />
      )} 
    </S.Root>
  )
}