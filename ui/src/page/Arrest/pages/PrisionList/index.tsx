import { ModalRootHandles } from "@/components/Modal/ModalRoot";
import ViewDetailModal from "../../components/ViewDetailModal";
import { useEffect, useRef } from "react";
import Banner from "@/components/Banner";
import Table from "@/components/Table";
import usePaginate from "@/hooks/usePaginate";
import * as S from './styles';
import Action from "@/components/Action";
import { ArrowLeftToLine, Clock4Icon, ExternalLink, Eye, Key } from "lucide-react";
import Pagination from "@/components/Pagination";
import { useQuery } from "@tanstack/react-query";
import fetchNui from "@/utils/fetchNui";
import Loading from "@/components/Loading";
import IPrision from "@/types/Prision";
import { Link, useNavigate } from "react-router-dom";
import Animator from "@/components/Animator";
import formatDate from "@/utils/formatDate";
import { useTheme } from "styled-components";
import Button from "@/components/Button";
import { queryClient } from "@/main";

interface IPrisoner {
  user_id: number,
  nome: string,
  id_historico_penal: number
  foto: string,
  tempo: number,
}

export default function PrisionList() {
  const { colors } = useTheme();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery<IPrisoner[]>(['getPrisioners'], () => fetchNui("getPrisioners"), {
    initialData: [
      {
        user_id: 1,
        nome: "Th Pirituba",
        tempo: 100,
        foto: "https://cdn.ome.lt/XmNgZkW2CggS6RGXiEz55spbmQs=/970x360/smart/uploads/conteudo/fotos/gta-franklin-selfie-topo.jpg",
        id_historico_penal: 1
      } as IPrisoner,

      {
        user_id: 1,
        nome: "Droyen Bolado",
        tempo: 24,
        foto: "https://cdn.ome.lt/XmNgZkW2CggS6RGXiEz55spbmQs=/970x360/smart/uploads/conteudo/fotos/gta-franklin-selfie-topo.jpg",
        id_historico_penal: 2
      } as IPrisoner,
      {
        user_id: 1,
        nome: "Th Pirituba",
        tempo: 100,
        foto: "https://cdn.ome.lt/XmNgZkW2CggS6RGXiEz55spbmQs=/970x360/smart/uploads/conteudo/fotos/gta-franklin-selfie-topo.jpg",
        id_historico_penal: 1
      } as IPrisoner,

      {
        user_id: 1,
        nome: "Droyen Bolado",
        tempo: 24,
        foto: "https://cdn.ome.lt/XmNgZkW2CggS6RGXiEz55spbmQs=/970x360/smart/uploads/conteudo/fotos/gta-franklin-selfie-topo.jpg",
        id_historico_penal: 2
      } as IPrisoner,
      {
        user_id: 1,
        nome: "Th Pirituba",
        tempo: 100,
        foto: "https://cdn.ome.lt/XmNgZkW2CggS6RGXiEz55spbmQs=/970x360/smart/uploads/conteudo/fotos/gta-franklin-selfie-topo.jpg",
        id_historico_penal: 1
      } as IPrisoner,

      {
        user_id: 1,
        nome: "Droyen Bolado",
        tempo: 24,
        foto: "https://cdn.ome.lt/XmNgZkW2CggS6RGXiEz55spbmQs=/970x360/smart/uploads/conteudo/fotos/gta-franklin-selfie-topo.jpg",
        id_historico_penal: 2
      } as IPrisoner,
      {
        user_id: 1,
        nome: "Th Pirituba",
        tempo: 100,
        foto: "https://cdn.ome.lt/XmNgZkW2CggS6RGXiEz55spbmQs=/970x360/smart/uploads/conteudo/fotos/gta-franklin-selfie-topo.jpg",
        id_historico_penal: 1
      } as IPrisoner,

      {
        user_id: 1,
        nome: "Droyen Bolado",
        tempo: 24,
        foto: "https://cdn.ome.lt/XmNgZkW2CggS6RGXiEz55spbmQs=/970x360/smart/uploads/conteudo/fotos/gta-franklin-selfie-topo.jpg",
        id_historico_penal: 2
      } as IPrisoner,
    ],
  })

  const { amountOfPages, currentPage, items, totalOfItems, viewedItems, paginate } = usePaginate<IPrisoner>(6, 1, data);

  const viewDetailModalRef = useRef<ModalRootHandles>(null);

  const handleSetFreeDetails = async (prisioner: IPrisoner) => {
    await fetchNui<any[]>("setFreePrisioner", prisioner.user_id)

    queryClient.setQueryData<IPrisoner[]>(['getPrisioners'], (prev) => {
      if(!prev) return prev;
      return { ...prev }
    });
  }

  const handleViewDetailsPrision = async (prisioner: IPrisoner) => {
    const prision = await fetchNui<any[]>("getHistoryOffencePlayer", prisioner.id_historico_penal)
    if(!prision)
      return;

    viewDetailModalRef.current?.openModal({ prision: prision });
  }

  return (
    <Animator>
      <S.Wrapper>
        <S.Return>
          <Button onClick={() => navigate(-1)} variant="secondary">
            <ArrowLeftToLine size={'1.6rem'} color={colors.icon} />
            Voltar
          </Button>
        </S.Return>

        <ViewDetailModal ref={viewDetailModalRef} />
        <Banner.Root>
          <Banner.Header>
            <Banner.Title>Detentos</Banner.Title>
          </Banner.Header>
        </Banner.Root>

        {isLoading ? (
          <Loading />
        ) : (
          <>
            <S.ListPresos>
              {items.map((item, i) => (
                <S.Preso>
                  <img src={item?.foto}/>
                  <p className="nome">{ item?.nome }</p>
                  <p className="tempo-restante"><Clock4Icon style={{marginTop: '.13rem'}} size={'1.6rem'} color={colors.icon} /><span>{ item?.tempo }</span> min</p>

                  <S.Actions>
                    <Action style={{margin: '0 .35rem'}} icon={Key} size='lg' onClick={() => { handleSetFreeDetails(item) }} label='Soltar Detento' />
                    <Action style={{margin: '0 .35rem'}} icon={ExternalLink} size='lg' onClick={() => { handleViewDetailsPrision(item) }} label='Registro da prisão' />
                  </S.Actions>
                  
                </S.Preso>
              ))}
            </S.ListPresos>
          </>
        )}
        
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