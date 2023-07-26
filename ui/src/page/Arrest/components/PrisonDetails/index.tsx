import Card from "@/components/Card";
import * as S from './styles';

export default function PrisonDetails() {
  return (
    <S.PrisonDetailsWrapper>
      <Card.Root>
        <Card.Header>
          <Card.Column>
            <Card.Title>Dados da prisão</Card.Title>
            <Card.Subtitle>Detalhes sobre a prisão</Card.Subtitle>
          </Card.Column>
        </Card.Header>
        <Card.Separator />
        <Card.Content>
        </Card.Content>
      </Card.Root>
    </S.PrisonDetailsWrapper>
  )
}