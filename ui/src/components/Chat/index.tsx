import { SendHorizonal } from "lucide-react";
import Card from "../Card";
import Message from "./components/Message";
import * as S from "./styles";
import { useTheme } from "styled-components";

export default function Chat() {
  const { colors } = useTheme()

  return (
    <Card.Root>
      <Card.Header>
        <Card.Column>
          <Card.Title>Chat Geral</Card.Title>
          <Card.Subtitle>Bate-papo geral da policia</Card.Subtitle>
        </Card.Column>
      </Card.Header>
      <Card.Separator />
      <Card.Content>
        <S.Wrapper>
          <S.Container>
            <Message />
            <Message />
            <Message />
          </S.Container>
          <Card.Separator />
          <S.InputArea>
            <S.InputBox>
              <S.Input placeholder="Mensagem..." />
              <S.SendMessage>
                <SendHorizonal color={colors.primary} />
              </S.SendMessage>
            </S.InputBox>
          </S.InputArea>
        </S.Wrapper>
      </Card.Content>
    </Card.Root>
  )
}