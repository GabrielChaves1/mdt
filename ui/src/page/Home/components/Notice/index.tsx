import { memo } from 'react'
import * as S from './styles'
import Button from '@/components/Button';
import INotice from '@/types/Notice';

function Notice({ autor, id_autor, descricao, id, titulo, data }: INotice) {
  const date = new Date(data);

  const day = date.getDate();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return (
    <S.Container>
      <S.Header>
        <S.Title>{titulo}</S.Title>
        <S.Author>{day}/{month}/{year} - {autor} #{id_autor}</S.Author>
      </S.Header>
      <Button size='sm'>Ver mais</Button>
    </S.Container>
  )
}

export default memo(Notice);