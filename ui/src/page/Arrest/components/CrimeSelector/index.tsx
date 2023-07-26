import Card from "@/components/Card";
import * as S from './styles';

export default function CrimeSelector() {
  return (
    <S.CrimeSelectorWrapper>
      <Card.Root>
        <Card.Header>
          <Card.Column>
            <Card.Title>Selecionar Crimes</Card.Title>
            <Card.Subtitle>Lista de artigos criminais</Card.Subtitle>
          </Card.Column>
        </Card.Header>
        <Card.Separator />
        <Card.Content>
          
        </Card.Content>
      </Card.Root>
    </S.CrimeSelectorWrapper>
  )
}