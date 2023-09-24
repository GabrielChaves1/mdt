import Banner from "@/components/Banner";
import Button from "@/components/Button";
import { ArrowLeftToLine, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "styled-components";
import * as S from "./styles";
import Input from "@/components/Input";
import { TextField } from "@/components/TextField";
import { Textarea } from "@/components/Textarea";
import Switch from "@/components/Switch";
import Card from "@/components/Card";

export default function NewArrest() {
  const { colors } = useTheme();

  return (
    <>
      <Link to="/arrest">
        <Button variant="secondary">
          <ArrowLeftToLine size={'1.6rem'} color={colors.icon}/>
          Voltar
        </Button>
      </Link>

      <Banner.Root>
        <Banner.Header>
          <Banner.Title>Aplicar prisão</Banner.Title>
        </Banner.Header>
      </Banner.Root>

      <S.Wrapper>
        <S.LeftContent>
          <Input.Root>
            <Input.Label>Infrator</Input.Label>
            <Input.Content>
              <TextField placeholder="Nenhum infrator anexado" />
            </Input.Content>
          </Input.Root>

          <Input.Root>
            <Input.Label>Imagens do Infrator</Input.Label>
            <Input.Content>
              <S.ImageSelectorBox>
                <S.ImageSelector><Plus size={'3rem'} color={colors.icon}/></S.ImageSelector>
                <S.ImageSelector><Plus size={'3rem'} color={colors.icon}/></S.ImageSelector>
                <S.ImageSelector><Plus size={'3rem'} color={colors.icon}/></S.ImageSelector>
              </S.ImageSelectorBox>
            </Input.Content>
          </Input.Root>

          <Input.Root>
            <Input.Label>Oficiais envolvidos</Input.Label>
            <Input.Content>
              <TextField placeholder="Nenhum oficial anexado" />
            </Input.Content>
          </Input.Root>

          <Input.Root>
            <Input.Label>Descrição</Input.Label>
            <Input.Content>
              <Textarea style={{height: '21.4rem'}} placeholder="Digite aqui..." />
            </Input.Content>
          </Input.Root>
        </S.LeftContent>
        <S.RightContent>
          <S.ExtenuatoryArea>
            <S.ExtenuatoryTitle>Atenuantes</S.ExtenuatoryTitle>
            <S.ExtenuatoryList>
              <S.Extenuatory>
                <p>Réu Primário (-50%)</p>
                <Switch />
              </S.Extenuatory>
              <S.Extenuatory>
                <p>Presença de Advogado (-20%)</p>
                <Switch />
              </S.Extenuatory>
              <S.Extenuatory>
                <p>Fiança (-100%)</p>
                <Switch />
              </S.Extenuatory>
            </S.ExtenuatoryList>
          </S.ExtenuatoryArea>
          <Card.Root>
            <Card.Header>
              <Card.Title>Selecionar Crimes</Card.Title>
            </Card.Header>
          </Card.Root>
        </S.RightContent>
      </S.Wrapper>
    </>
  )
}