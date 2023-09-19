import { ReactNode } from "react";
import * as S from "./styles";

interface TableRootProps {
  headColumns: string[]
  children: ReactNode
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