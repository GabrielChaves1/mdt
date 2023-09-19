import * as S from "./styles";
import { ReactNode } from "react";

interface TableRowProps {
  children: ReactNode
}

export default function TableRow({ children }: TableRowProps) {
  return (
    <S.Row>
      {children}
    </S.Row>
  )
}