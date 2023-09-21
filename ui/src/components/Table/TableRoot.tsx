import * as S from "./styles";
import { ReactNode } from "react";

interface TableRootProps {
  children: ReactNode
  headColumns: string[]
}

export default function TableRoot({ headColumns, children }: TableRootProps) {
  return (
    <S.Root>
      <S.Head>
        {headColumns.map((column, index) => (
          <S.HeadOption key={index}>{column}</S.HeadOption>
        ))}
      </S.Head>
      <S.Body>
        {children}
      </S.Body>
    </S.Root>
  )
}