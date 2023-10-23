import Banner from "@/components/Banner";
import Button from "@/components/Button";
import { ArrowLeftToLine } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import * as S from './styles';
import Animator from "@/components/Animator";

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
      </S.Content>
    </Animator>
  )
}