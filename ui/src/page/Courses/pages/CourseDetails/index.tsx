import Banner from "@/components/Banner";
import Button from "@/components/Button";
import { ArrowLeftToLine } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import * as S from './styles';
import Animator from "@/components/Animator";
import Avatar from "@/components/Avatar";
import Card from "@/components/Card";

export default function CourseDetails() {
  const { colors } = useTheme();
  const navigate = useNavigate();

  return (
    <Animator>
      <S.Content>
        <Button onClick={() => navigate(-1)} variant="secondary">
          <ArrowLeftToLine size={'1.6rem'} color={colors.icon}/>
          Voltar
        </Button>

        <Banner.Root>
          <Banner.Header>
            <Banner.Title>Detalhes do curso</Banner.Title>
          </Banner.Header>
        </Banner.Root>

        <S.Wrapper>
          <S.Post>
            <S.PostHeader>
              <S.AuthorInfos>
                <Avatar />
              </S.AuthorInfos>
            </S.PostHeader>
          </S.Post>
          <Card.Root>
            <Card.Header>
              <Card.Column>
                <Card.Title>Lista de policiais</Card.Title>
                <Card.Subtitle>policiais que irão participar do curso</Card.Subtitle>
              </Card.Column>
            </Card.Header>
            <Card.Separator />
            <Card.Content>
              <h1>Policial</h1>
            </Card.Content>
          </Card.Root>
        </S.Wrapper>
      </S.Content>
    </Animator>
  )
}