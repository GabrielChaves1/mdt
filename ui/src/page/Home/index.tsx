import Card from '@/components/Card';
import * as S from './styles';
import Banner from '@/components/Banner';
import Post from './components/Post';
import { Eye, Plus, Settings } from 'lucide-react';
import Chat from '@/components/Chat';
import { useRef } from 'react';
import { ModalRootHandles } from '@/components/Modal/ModalRoot';

import OnlinePolicersModal from './components/OnlinePolicersModal';
import Action from '@/components/Action';

export default function Home() {
  const viewPolicersModalRef = useRef<ModalRootHandles>(null);
  
  const handleOpenOnlinePolicersList = () => {
    viewPolicersModalRef.current?.openModal();
  }

  return (
    <S.Wrapper>
      <OnlinePolicersModal ref={viewPolicersModalRef} />

      <div style={{gridArea: "banner"}}>
        <Banner.Root style={{ height: '100%' }}>
          <Banner.Header>
            <Banner.Title>Bem-vindo <b>John Doe</b>!</Banner.Title>
            <Banner.Action>Entrar em serviço</Banner.Action>
          </Banner.Header>
        </Banner.Root>
      </div>

      <S.Stats>
        <S.StatsBox>
          <h1>Prisões</h1>
          <span>2.541</span>
        </S.StatsBox>
        <S.StatsBox>
          <h1>Multas</h1>
          <span>256</span>
        </S.StatsBox>
      </S.Stats>

      <div style={{gridArea: "warns"}}>
        <Card.Root>
          <Card.Header>
            <Card.Column>
              <Card.Title>Avisos</Card.Title>
              <Card.Subtitle>Resumo de avisos da guarnição</Card.Subtitle>
            </Card.Column>
            <Action label='Criar aviso' icon={Plus} />
          </Card.Header>
          <Card.Separator />
          <Card.Content>
            <S.PostsArea>
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
            </S.PostsArea>
          </Card.Content>
        </Card.Root>
      </div>

      <div style={{gridArea: "players"}}>
        <Card.Root>
          <Card.Header>
            <Card.Column>
              <Card.Title>Policiais On-line</Card.Title>
              <Card.Subtitle>Policiais ativos no momento (11)</Card.Subtitle>
            </Card.Column>
            <Action onClick={handleOpenOnlinePolicersList} label='Ver Policiais' icon={Eye} />
          </Card.Header>
        </Card.Root>
      </div>

      <div style={{gridArea: "widget"}}>
        <Card.Root>
          <Card.Header>
            <Card.Column>
              <Card.Title>Mural de Procurados</Card.Title>
            </Card.Column>
            <Action label='Selecionar Widget' icon={Settings} />
          </Card.Header>
          <Card.Separator />
          <Card.Content>
            
          </Card.Content>
        </Card.Root>
      </div>

      <div style={{gridArea: "chat"}}>
        <Chat />
      </div>
    </S.Wrapper>
  )
}