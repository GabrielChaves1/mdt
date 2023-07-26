import { ReactNode } from 'react'
import * as S from './styles'
import Button from "../Button"

interface BannerActionProps {
  children: ReactNode
}

export default function BannerAction({ children }: BannerActionProps) {
  return (
    <Button variant='primary'>
      {children}
    </Button>
  )
}