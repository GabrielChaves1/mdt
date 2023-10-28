import Card from '@/components/Card';
import * as S from './styles';
import Banner from '@/components/Banner';
import { Eye, Plus } from 'lucide-react';
import Chat from '@/components/Chat';
import { useRef } from 'react';
import { ModalRootHandles } from '@/components/Modal/ModalRoot';

import OnlinePolicersModal from './components/OnlinePolicersModal';
import Action from '@/components/Action';
import CreateNoticeModal from './components/CreateNoticeModal';
import INotice from '@/types/Notice';
import { useQuery } from '@tanstack/react-query';
import fetchNui from '@/utils/fetchNui';
import Notice from './components/Notice';
import Loading from '@/components/Loading';
import { useNuiEvent } from '@/hooks/useNuiEvent';

interface DataResponse {
  officer: {
    id: number
    name: string
  }

  canStartPatrol: boolean
  totalOfPrisions: number
  totalOfFines: number
  totalOfWorkingOfficers: number

  notices: INotice[]

  permissions: [ "CAN_CREATE_NOTICE" ]
}

export default function Home() {
  const { data, isLoading, refetch } = useQuery<DataResponse>(['getInitialData'], () => fetchNui("getInitialData"), {
    initialData: {
      officer: {
        id: 1,
        name: "Droyen Patrulheiro"
      },
    
      canStartPatrol: true,
      totalOfPrisions: 1243,
      totalOfFines: 52,
      totalOfWorkingOfficers: 34,
    
      notices: [
        {
          id: 1,
          titulo: "Não colocar itens no baú",
          descricao: "Não coloquem itens no baú temporariamente",
          data: Date.now(),
          id_autor: 1,
          autor: "Droyen Patrulheiro"
        },
      ],
    
      permissions: ["CAN_CREATE_NOTICE"]
    }
  })

  useNuiEvent('reloadHome', refetch)

  const viewPolicersModalRef = useRef<ModalRootHandles>(null);
  const createNoticeModalRef = useRef<ModalRootHandles>(null);

  const handleOpenOnlinePolicersList = () => {
    viewPolicersModalRef.current?.openModal();
  }

  const handleOpenNoticeCreator = () => {
    createNoticeModalRef.current?.openModal();
  }

  if(isLoading || !data) {
    return (
      <S.Wrapper>
        <Loading />
      </S.Wrapper>
    )
  }

  return (
    <S.Wrapper>
      <OnlinePolicersModal ref={viewPolicersModalRef} />
      <CreateNoticeModal onClose={() => createNoticeModalRef.current?.closeModal() } ref={createNoticeModalRef} />

      <div style={{gridArea: "banner"}}>
        <Banner.Root style={{ height: '100%' }}>
          <Banner.Header>
            <Banner.Title>Bem-vindo <b>{data?.officer?.name}</b>!</Banner.Title>
            {data?.canStartPatrol && (
              <Banner.Action>Iniciar Patrulha</Banner.Action>
            )}
          </Banner.Header>
        </Banner.Root>
      </div>

      <S.Stats>
        <S.StatsBox>
          <h1>Prisões</h1>
          <span>{data?.totalOfPrisions.toLocaleString('pt-br')}</span>
        </S.StatsBox>
        <S.StatsBox>
          <h1>Multas</h1>
          <span>{data?.totalOfFines.toLocaleString('pt-br')}</span>
        </S.StatsBox>
      </S.Stats>

      <div style={{gridArea: "warns"}}>
        <Card.Root>
          <Card.Header>
            <Card.Column>
              <Card.Title>Avisos</Card.Title>
              <Card.Subtitle>Resumo de avisos da guarnição</Card.Subtitle>
            </Card.Column>
            <Action onClick={handleOpenNoticeCreator} label='Criar aviso' icon={Plus} />
          </Card.Header>
          <Card.Separator />
          <Card.Content>
            <S.PostsArea>
              {data?.notices?.map((notice) => (
                <Notice key={notice.id} {...notice} />
              ))}
            </S.PostsArea>
          </Card.Content>
        </Card.Root>
      </div>

      <div style={{gridArea: "players"}}>
        <Card.Root>
          <Card.Header>
            <Card.Column>
              <Card.Title>Policiais On-line</Card.Title>
              <Card.Subtitle>Policiais ativos no momento ({data?.totalOfWorkingOfficers})</Card.Subtitle>
            </Card.Column>
            <Action onClick={handleOpenOnlinePolicersList} label='Ver Policiais' icon={Eye} />
          </Card.Header>
        </Card.Root>
      </div>

      <div style={{gridArea: "chat"}}>
        <Chat />
      </div>
    </S.Wrapper>
  )
}