import { memo, useState } from 'react'
import * as S from './styles'
import Button from '@/components/Button';
import INotice from '@/types/Notice';
import fetchNui from '@/utils/fetchNui';
import { queryClient } from '@/main';

function Notice({ autor, id_autor, descricao, id, titulo, data }: INotice) {
  const [opened, setOpened] = useState<boolean>(false);
  const date = new Date(data);

  const day = date.getDate();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  async function handleDeleteNotice() {
    const res = await fetchNui('deleteNotice', { id })
    if(!res) return;

    queryClient.setQueryData(['getInitialData'], (prev: any) => ({
      ...prev,
      notices: prev.notices.filter((notice: INotice) => notice.id !== id)
    }));
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>{titulo}</S.Title>
        <S.Author>{day}/{month}/{year} - {autor} #{id_autor}</S.Author>
        {opened && <S.Description>{descricao}</S.Description>}
      </S.Header>
      <S.Actions>
        <Button size='sm' onClick={() => setOpened(!opened)}>{opened ? 'Fechar' : 'Ver mais'}</Button>
        <Button onClick={handleDeleteNotice} size='sm' variant='secondary'>Deletar</Button>
      </S.Actions>
    </S.Container>
  )
}

export default memo(Notice);