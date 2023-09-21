import Banner from '@/components/Banner';
import * as S from './styles';
import Table from '@/components/Table';
import { Eye } from 'lucide-react';
import Action from '@/components/Action';
import Pagination from '@/components/Pagination';
import usePaginate from '@/hooks/usePaginate';

export default function Arrest() {
  const { amountOfPages, currentPage, items, totalOfItems, viewedItems, paginate } = usePaginate(12, 1, [
    {
      id: 1,
      name: "John doe",
      time: 15,
      fine: 15000,
    },
    {
      id: 2,
      name: "John doe",
      time: 15,
      fine: 15000,
    },
    {
      id: 3,
      name: "John doe",
      time: 15,
      fine: 15000,
    },
    {
      id: 4,
      name: "John doe",
      time: 15,
      fine: 15000,
    },
    {
      id: 5,
      name: "John doe",
      time: 15,
      fine: 15000,
    },
    {
      id: 6,
      name: "John doe",
      time: 15,
      fine: 15000,
    },
    {
      id: 7,
      name: "John doe",
      time: 15,
      fine: 15000,
    },
    {
      id: 8,
      name: "John doe",
      time: 15,
      fine: 15000,
    },
    {
      id: 9,
      name: "John doe",
      time: 15,
      fine: 15000,
    },
    {
      id: 10,
      name: "John doe",
      time: 15,
      fine: 15000,
    },
    {
      id: 11,
      name: "John doe",
      time: 15,
      fine: 15000,
    },
    {
      id: 12,
      name: "John doe",
      time: 15,
      fine: 15000,
    },
    {
      id: 13,
      name: "John doe",
      time: 15,
      fine: 15000,
    },
    {
      id: 14,
      name: "John doe",
      time: 15,
      fine: 15000,
    },
    {
      id: 15,
      name: "John doe",
      time: 15,
      fine: 15000,
    },
    {
      id: 16,
      name: "John doe",
      time: 15,
      fine: 15000,
    },
    {
      id: 17,
      name: "John doe",
      time: 15,
      fine: 15000,
    },
  ]);

  return (
    <S.Wrapper>
      <Banner.Root>
        <Banner.Header>
          <Banner.Title>Últimas prisões</Banner.Title>
        </Banner.Header>
        <Banner.Action>Nova Prisão</Banner.Action>
      </Banner.Root>

      <S.TableArea>
        <Table.Root headColumns={["ID", "Prisioneiro", "Tempo", "Multa", "Ações"]}>
          {items.map((item) => (
            <Table.Row>
              <Table.Item>#{item.id}</Table.Item>
              <Table.Item>{item.name}</Table.Item>
              <Table.Item>{item.time} meses</Table.Item>
              <Table.Item>R$ {item.fine.toLocaleString('pt-br')}</Table.Item>
              <Table.Item>
                <Action icon={Eye} size='sm' label='Ver detalhes' />
              </Table.Item>
            </Table.Row>
          ))}
        </Table.Root>

        <Pagination 
          amountOfPages={amountOfPages}
          currentPage={currentPage} 
          itemsBeingViewed={viewedItems}
          totalOfItems={totalOfItems}
          onPaginate={(page: number) => paginate(page)}/>
      </S.TableArea>
    </S.Wrapper>
  )
}