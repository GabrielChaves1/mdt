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

export default function ArrestList() {
  const { data, isLoading } = useQuery<IPrision[]>(['getPrisions'], () => fetchNui("getPrisions"), {
    initialData: [
      {
        prisoner: {
          id: 1,
          name: "Th Pirituba"
        },
        time: 100,
        fine: 0,
        arrestedIn: Date.now()
      },
      {
        prisoner: {
          id: 1,
          name: "Th Pirituba"
        },
        time: 100,
        fine: 0,
        arrestedIn: Date.now()
      },
      {
        prisoner: {
          id: 1,
          name: "Th Pirituba"
        },
        time: 100,
        fine: 0,
        arrestedIn: Date.now()
      },
      {
        prisoner: {
          id: 1,
          name: "Th Pirituba"
        },
        time: 100,
        fine: 0,
        arrestedIn: Date.now()
      },
      {
        prisoner: {
          id: 1,
          name: "Th Pirituba"
        },
        time: 100,
        fine: 0,
        arrestedIn: Date.now()
      },
      {
        prisoner: {
          id: 1,
          name: "Th Pirituba"
        },
        time: 100,
        fine: 0,
        arrestedIn: Date.now()
      },
      {
        prisoner: {
          id: 1,
          name: "Th Pirituba"
        },
        time: 100,
        fine: 0,
        arrestedIn: Date.now()
      },
      {
        prisoner: {
          id: 1,
          name: "Th Pirituba"
        },
        time: 100,
        fine: 0,
        arrestedIn: Date.now()
      },
      {
        prisoner: {
          id: 1,
          name: "Th Pirituba"
        },
        time: 100,
        fine: 0,
        arrestedIn: Date.now()
      },
      {
        prisoner: {
          id: 1,
          name: "Th Pirituba"
        },
        time: 100,
        fine: 0,
        arrestedIn: Date.now()
      },
      {
        prisoner: {
          id: 1,
          name: "Th Pirituba"
        },
        time: 100,
        fine: 0,
        arrestedIn: Date.now()
      },
      {
        prisoner: {
          id: 1,
          name: "Th Pirituba"
        },
        time: 100,
        fine: 0,
        arrestedIn: Date.now()
      },
      {
        prisoner: {
          id: 1,
          name: "Th Pirituba"
        },
        time: 100,
        fine: 0,
        arrestedIn: Date.now()
      },
      {
        prisoner: {
          id: 1,
          name: "Th Pirituba"
        },
        time: 100,
        fine: 0,
        arrestedIn: Date.now()
      },
      {
        prisoner: {
          id: 1,
          name: "Th Pirituba"
        },
        time: 100,
        fine: 0,
        arrestedIn: Date.now()
      },
      {
        prisoner: {
          id: 1,
          name: "Th Pirituba"
        },
        time: 100,
        fine: 0,
        arrestedIn: Date.now()
      },
      {
        prisoner: {
          id: 1,
          name: "Th Pirituba"
        },
        time: 100,
        fine: 0,
        arrestedIn: Date.now()
      },
    ],
  })

  const { amountOfPages, currentPage, items, totalOfItems, viewedItems, paginate } = usePaginate(12, 1, data || []);

  const viewDetailModalRef = useRef<ModalRootHandles>(null);

  const handleViewDetails = () => {
    viewDetailModalRef.current?.openModal();
  }

  return (
    <>
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
                  <Table.Item>{item.prisoner.name}</Table.Item>
                  <Table.Item>{item.time} meses</Table.Item>
                  <Table.Item>R$ {item.fine.toLocaleString('pt-br')}</Table.Item>
                  <Table.Item>20/09/2023</Table.Item>
                  <Table.Item>
                    <Action icon={Eye} size='sm' onClick={handleViewDetails} label='Ver detalhes' />
                  </Table.Item>
                </Table.Row>
              ))}
            </>
          )}
        </Table.Root>

        {amountOfPages > 1 && (
          <Pagination
            amountOfPages={amountOfPages}
            currentPage={currentPage}
            itemsBeingViewed={viewedItems}
            totalOfItems={totalOfItems}
            onPaginate={(page: number) => paginate(page)} />
        )}
      </S.TableArea>
    </>
  )
}