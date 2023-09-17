import { memo } from 'react'
import * as S from './styles'
import Button from '@/components/Button';

function Post() {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Não se esqueçam de aplicar multa na prisão!</S.Title>
        <S.Author>Autor: John Doe</S.Author>
      </S.Header>
      <Button size='sm'>Ver mais</Button>
    </S.Container>
  )
}

export default memo(Post);