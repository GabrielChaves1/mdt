import Card from '@/components/Card';
import * as S from './styles';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from 'styled-components';
import { transparentize } from 'polished';
import Banner from '@/components/Banner';
import { Plus } from 'lucide-react';

const data = [
  {
    name: 'Dia 20',
    prisoes: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Dia 21',
    prisoes: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Dia 22',
    prisoes: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Dia 23',
    prisoes: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Dia 24',
    prisoes: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Dia 25',
    prisoes: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Dia 26',
    prisoes: 3490,
    pv: 4300,
    amt: 2100,
  },
];


export default function Home() {
  const { text, colors } = useTheme();

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

          </Card.Content>
        </Card.Root>
      </S.Warns>

      <S.Graphic>
        <Card.Root>
          <Card.Header>
            <Card.Column>
              <Card.Title>Gráfico de Apreensões</Card.Title>
              <Card.Subtitle>Indicador de apreensões diárias</Card.Subtitle>
            </Card.Column>
          </Card.Header>
          <Card.Content>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={500}
                height={600}
                data={data}
                margin={{
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid stroke={transparentize(0.7, text.subtitle)} strokeDasharray="3 3" />
                <XAxis stroke={text.subtitle} dataKey="name" />
                <YAxis stroke={text.subtitle} />
                <Tooltip />
                <Area animateNewValues type="natural" dataKey="prisoes" stroke={colors.primary} fill={colors.primary} />
              </AreaChart>
            </ResponsiveContainer>
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
          </Card.Header>
          <Card.Separator />
          <Card.Content>
            <S.PlayerList>
                <S.PlayerItem>
                  <p>Droyen dev</p>
                  <span></span>
                </S.PlayerItem>
                <S.PlayerItem>
                  <p>Fall</p>
                  <span></span>
                </S.PlayerItem>
                <S.PlayerItem>
                  <p>Nico</p>
                  <span></span>
                </S.PlayerItem>
                <S.PlayerItem>
                  <p>Playbas</p>
                  <span></span>
                </S.PlayerItem>
                <S.PlayerItem>
                  <p>guilto</p>
                  <span></span>
                </S.PlayerItem>
                <S.PlayerItem>
                  <p>ggmochila</p>
                  <span></span>
                </S.PlayerItem>
                <S.PlayerItem>
                  <p>nvk</p>
                  <span></span>
                </S.PlayerItem>
                <S.PlayerItem>
                  <p>gordao</p>
                  <span></span>
                </S.PlayerItem>
                <S.PlayerItem>
                  <p>utz_Jornal</p>
                  <span></span>
                </S.PlayerItem>
            </S.PlayerList>
          </Card.Content>
        </Card.Root>
      </S.PlayerListWrapper>
    </S.Wrapper>
  )
}