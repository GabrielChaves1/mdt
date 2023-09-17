import Card from '@/components/Card';
import * as S from './styles';
import Banner from '@/components/Banner';
import Post from './components/Post';
import { Eye, Plus, Settings } from 'lucide-react';

export default function Home() {
  return (
    <S.Wrapper>
      <Banner.Root>
        <Banner.Header>
          <Banner.Title>Bem-vindo <b>John Doe</b>!</Banner.Title>
          <Banner.Action>Entrar em serviço</Banner.Action>
        </Banner.Header>
      </Banner.Root>

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

      <S.Warns>
        <Card.Root>
          <Card.Header>
            <Card.Column>
              <Card.Title>Avisos</Card.Title>
              <Card.Subtitle>Resumo de avisos da guarnição</Card.Subtitle>
            </Card.Column>
            <Card.Action label='Criar aviso' icon={Plus} />
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
      </S.Warns>

      <S.Graphic>
        <Card.Root>
          <Card.Header>
            <Card.Column>
              <Card.Title>Mural de Procurados</Card.Title>
            </Card.Column>
            <Card.Action label='Selecionar Widget' icon={Settings} />
          </Card.Header>
          <Card.Separator />
          <Card.Content>
            
          </Card.Content>
        </Card.Root>
      </S.Graphic>

      <S.PlayerListWrapper>
        <Card.Root>
          <Card.Header>
            <Card.Column>
              <Card.Title>Policiais On-line</Card.Title>
              <Card.Subtitle>Policiais ativos no momento (11)</Card.Subtitle>
            </Card.Column>
            <Card.Action label='Ver Policiais' icon={Eye} />
          </Card.Header>
        </Card.Root>
      </S.PlayerListWrapper>
    </S.Wrapper>
  )
}