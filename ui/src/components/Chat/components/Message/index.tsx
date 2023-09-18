import { memo } from "react"
import * as S from './styles';

function Message() {
  return (
    <S.Container>
      <S.MessageBox>
        <S.Author>John Doe</S.Author>
        <S.Message>Boa tarde pessoal!</S.Message>
      </S.MessageBox>
      <S.CreatedAt>Hoje ás 16:35</S.CreatedAt>
    </S.Container>
  )
}

export default memo(Message);