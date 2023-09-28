import { ModalRootHandles } from "@/components/Modal/ModalRoot";
import ViewDetailModal from "../../components/ViewDetailModal";
import { useEffect, useRef } from "react";
import Banner from "@/components/Banner";
import Table from "@/components/Table";
import usePaginate from "@/hooks/usePaginate";
import * as S from './styles';
import Action from "@/components/Action";
import { Eye } from "lucide-react";
import Pagination from "@/components/Pagination";
import { useQuery } from "@tanstack/react-query";
import fetchNui from "@/utils/fetchNui";
import Loading from "@/components/Loading";
import IPrision from "@/types/Prision";
import { Link } from "react-router-dom";
import Animator from "@/components/Animator";

export default function ArrestList() {
  const { data, isLoading } = useQuery<IPrision[]>(['getPrisions'], () => fetchNui("getPrisions"), {
    initialData: [
      {
        user_id: 1,
        nome: "Th Pirituba",
        tempo: 100,
        valor_multa: 0,
        data: Date.now()
      },

      {
        user_id: 1,
        nome: "Th Pirituba",
        tempo: 100,
        valor_multa: 1000,
        data: Date.now()
      },
    ],
  })

  const { amountOfPages, currentPage, items, totalOfItems, viewedItems, paginate } = usePaginate<IPrision>(13, 1, data);

  const viewDetailModalRef = useRef<ModalRootHandles>(null);

  const handleViewDetails = () => {
    viewDetailModalRef.current?.openModal();
  }

  const formatDate = (data: number) => {
    const date = new Date(data);

    const day = date.getDate();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`
  }

  return (
    <Animator>
      <S.Container>
        <ViewDetailModal ref={viewDetailModalRef} />

        <Banner.Root>
          <Banner.Header>
            <Banner.Title>Últimas prisões</Banner.Title>
          </Banner.Header>
          <Link to="/arrest/new">
            <Banner.Action>Nova Prisão</Banner.Action>
          </Link>
        </Banner.Root>

        <S.TableArea>
          <Table.Root headColumns={["Prisioneiro", "Tempo", "Multa", "Data", "Ações"]}>
            {isLoading ? (
              <Loading />
            ) : (
              <>
                {items.map((item, i) => (
                  <Table.Row key={i}>
                    <Table.Item>{item?.nome}</Table.Item>
                    <Table.Item>{item?.tempo} meses</Table.Item>
                    <Table.Item>R$ {item?.valor_multa.toLocaleString('pt-br')}</Table.Item>
                    <Table.Item>{formatDate(item?.data)}</Table.Item>
                    <Table.Item>
                      <Action icon={Eye} size='sm' onClick={handleViewDetails} label='Ver detalhes' />
                    </Table.Item>
                  </Table.Row>
                ))}
              </>
            )}
          </Table.Root>
        </S.TableArea>
        {amountOfPages > 1 && (
          <Pagination
            amountOfPages={amountOfPages}
            currentPage={currentPage}
            itemsBeingViewed={viewedItems}
            totalOfItems={totalOfItems}
            onPaginate={(page: number) => paginate(page)} />
        )}
      </S.Container>
    </Animator>
  )
}