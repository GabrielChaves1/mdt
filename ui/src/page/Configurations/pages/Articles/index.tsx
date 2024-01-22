import Action from '@/components/Action';
import * as S from './styles';
import Banner from '@/components/Banner';
import Button from '@/components/Button';
import Table from '@/components/Table';
import { ArrowLeftToLine, Pencil, Plus, Trash } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';
import usePaginate from '@/hooks/usePaginate';
import { ModalRootHandles } from '@/components/Modal/ModalRoot';
import { useRef } from 'react';
import CreateArticleModal from '../../components/CreateArticleModal';
import { useQuery } from '@tanstack/react-query';
import fetchNui from '@/utils/fetchNui';
import IPenalCode from '@/types/PenalCode';
import Pagination from '@/components/Pagination';
import Loading from '@/components/Loading';
import { queryClient } from '@/main';
import { useNuiEvent } from '@/hooks/useNuiEvent';
import formatNumber from '@/utils/formatNumber';

export default function Articles() {
  const { data, isLoading } = useQuery<IPenalCode[]>(['getCodigoPenal'], () => fetchNui("getCodigoPenal"), {
    initialData: [
      {
        id: 1,
        nome_codigo: "Tentativa de Homicídio",
        descricao: "Tentativa de Homicídio",
        tempo: 50,
        multa: 125000
      },
    ],
  })

  const { amountOfPages, currentPage, items, totalOfItems, viewedItems, paginate } = usePaginate(13, 1, data);
  const { colors } = useTheme();
  const createArticleModalRef = useRef<ModalRootHandles>(null);

  useNuiEvent('createArticle', (item: IPenalCode) => {
    queryClient.setQueryData(['getCodigoPenal'], ((prev: any) => ({
      ...prev,
      item
    })))
  })

  async function handleDeleteArticle(item: IPenalCode) {
    const res = await fetchNui("deleteArticle", item.id)
    if(!res) return;

    queryClient.setQueryData(['getCodigoPenal'], ((prev: any) => {
      return prev.filter((article: IPenalCode) => article.id !== item.id);
    }));
  }

  return (
    <S.Wrapper>
      <CreateArticleModal onClose={() => createArticleModalRef.current?.closeModal() } ref={createArticleModalRef} />      

      <S.Return>
        <Link to="/config">
          <Button variant="secondary">
            <ArrowLeftToLine size={'1.6rem'} color={colors.icon} />
            Voltar
          </Button>
        </Link>
      </S.Return>

      <Banner.Root>
        <Banner.Header>
          <Banner.Title>Configurar artigos criminais</Banner.Title>
        </Banner.Header>
        <Banner.Action onClick={() => createArticleModalRef.current?.openModal()}>
          <Plus size={'1.6rem'} color='#FFF'/>
          Criar Novo
        </Banner.Action>
      </Banner.Root>

      <Table.Root headColumns={["Nome do Artigo", "Tempo de prisão", "Valor em multa", "Ações"]}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {items.map((item, i) => (
              <Table.Row key={i}>
                <Table.Item>{item.nome_codigo}</Table.Item>
                <Table.Item>{item.tempo} meses</Table.Item>
                <Table.Item>R$ {formatNumber(item.multa)}</Table.Item>
                <Table.Item>
                  <Action onClick={() => handleDeleteArticle(item)} icon={Trash} size='sm' label='Deletar Artigo' />
                  <Action icon={Pencil} size='sm' label='Editar Artigo' />
                </Table.Item>
              </Table.Row>
            ))}
          </>
        )}
      </Table.Root>

      <Pagination
          amountOfPages={amountOfPages}
          currentPage={currentPage}
          itemsBeingViewed={viewedItems}
          totalOfItems={totalOfItems}
          onPaginate={(page: number) => paginate(page)} />
    </S.Wrapper>
  )
}