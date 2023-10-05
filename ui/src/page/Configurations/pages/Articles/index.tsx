import Action from '@/components/Action';
import * as S from './styles';
import Banner from '@/components/Banner';
import Button from '@/components/Button';
import Table from '@/components/Table';
import { ArrowLeftToLine, Pencil, Plus, Trash } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';

export default function Articles() {
  const { colors } = useTheme();  

  return (
    <S.Wrapper>
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
        <Banner.Action>
          <Plus size={'1.6rem'} color='#FFF'/>
          Criar Novo
        </Banner.Action>
      </Banner.Root>

      <Table.Root headColumns={["Nome do Artigo", "Tempo de prisão", "Valor em multa", "Ações"]}>
        <Table.Row>
          <Table.Item>Tentativa de Homicídio</Table.Item>
          <Table.Item>50 meses</Table.Item>
          <Table.Item>R$ 125.000,00</Table.Item>
          <Table.Item>
            <Action icon={Trash} size='sm' label='Deletar Artigo' />
            <Action icon={Pencil} size='sm' label='Editar Artigo' />
          </Table.Item>
        </Table.Row>
      </Table.Root>
    </S.Wrapper>
  )
}