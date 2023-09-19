import * as S from "./styles";
import { ReactNode } from "react";

interface TableRowItemProps {
  children: ReactNode
}

export default function TableRowItem({ children }: TableRowItemProps) {
  return (
    <S.RowItem>
      {children}
    </S.RowItem>
  )
}