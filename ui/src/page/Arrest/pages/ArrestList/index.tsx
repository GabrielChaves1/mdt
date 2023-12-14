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
import formatDate from "@/utils/formatDate";

export default function ArrestList() {
  const { data, isLoading } = useQuery<IPrision[]>(['getPrisions'], () => fetchNui("getPrisions"), {
    initialData: [
      {
        id: 1,
        user_id: 1,
        nome: "Th Pirituba",
        tempo: 100,
        valor_multa: 2,
        data: Date.now(),
        descricao: "Testando motivo",
        mugshot: "https://cdn.ome.lt/XmNgZkW2CggS6RGXiEz55spbmQs=/970x360/smart/uploads/conteudo/fotos/gta-franklin-selfie-topo.jpg",
        codigos_penais: [1],
        oficiais: [ { id:1, label: "Nico 16 toneladas" } ]
      } as IPrision,

      {
        id: 2,
        user_id: 1,
        nome: "Droyen Osasco",
        tempo: 100,
        valor_multa: 1000,
        data: Date.now(),
        descricao: "Testando motivo novamente",
        mugshot: "https://cdn.ome.lt/XmNgZkW2CggS6RGXiEz55spbmQs=/970x360/smart/uploads/conteudo/fotos/gta-franklin-selfie-topo.jpg",
        codigos_penais: [3, 5],
        oficiais: [ { id:1, label: "Decrypt Pica Mucha" } ]
      } as IPrision,
    ],
  })

  const { amountOfPages, currentPage, items, totalOfItems, viewedItems, paginate } = usePaginate<IPrision>(13, 1, data);

  const viewDetailModalRef = useRef<ModalRootHandles>(null);

  const handleViewDetails = (prision: IPrision) => {
    viewDetailModalRef.current?.openModal({ prision: prision });
  }

  return (
    <Animator>
      <S.Wrapper>
        <ViewDetailModal ref={viewDetailModalRef} />
        <Banner.Root>
          <Banner.Header>
            <Banner.Title>Últimas prisões</Banner.Title>
          </Banner.Header>
          
          <S.LinkedButton>
            <Link to="/arrest/new">
              <Banner.Action>Nova Prisão</Banner.Action>
            </Link>

            <Link to="/arrest/inPrision">
              <Banner.Action>Presos</Banner.Action>
            </Link>
          </S.LinkedButton>
          
        </Banner.Root>

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
                    <Action icon={Eye} size='sm' onClick={() => { handleViewDetails(item) }} label='Ver detalhes' />
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
    </Animator>
  )
}