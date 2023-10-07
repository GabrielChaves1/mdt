import { ButtonHTMLAttributes, ReactNode } from 'react'
import Button from "../Button"

interface BannerActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export default function BannerAction({ children, ...props }: BannerActionProps) {
  return (
    <Button variant='primary' {...props}>
      {children}
    </Button>
  )
}