import * as Select from '@radix-ui/react-select';
import { ReactNode } from "react";

interface SelectMenuRootProps {
  children: ReactNode
}

export default function SelectMenuRoot({ children }: SelectMenuRootProps) {
  return (
    <Select.Root>
      {children}
    </Select.Root>
  )
}