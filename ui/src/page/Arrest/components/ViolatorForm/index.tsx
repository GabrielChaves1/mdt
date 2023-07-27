import Card from "@/components/Card";
import * as S from './styles';
import Input from "@/components/Input";
import { TextField } from "@/components/TextField";
import { Plus } from "lucide-react";
import { useTheme } from "styled-components";
import { transparentize } from "polished";

export default function ViolatorForm() {
  const { colors } = useTheme();

  return (
    <S.ViolatorWrapper>
      <Card.Root>
        <Card.Content>
          <S.Container>

            <Input.Root>
              <Input.Header>
                <Input.Label>Infrator</Input.Label>
              </Input.Header>
              <Input.Content>
                <TextField placeholder="Nenhum infrator anexado" />
              </Input.Content>
            </Input.Root>

            <Input.Root>
              <Input.Header>
                <Input.Label>Imagens do infrator</Input.Label>
              </Input.Header>
              <Input.Content>
                <S.SelectImageArea>
                  <S.SelectImage>
                    <Plus size={34} strokeWidth={1.5} color={transparentize(.6, colors.icon)}/>
                  </S.SelectImage>
                  <S.SelectImage>
                    <Plus size={34} strokeWidth={1.5} color={transparentize(.6, colors.icon)}/>
                  </S.SelectImage>
                  <S.SelectImage>
                    <Plus size={34} strokeWidth={1.5} color={transparentize(.6, colors.icon)}/>
                  </S.SelectImage>
                </S.SelectImageArea>
              </Input.Content>
            </Input.Root>

          </S.Container>
        </Card.Content>
      </Card.Root>
    </S.ViolatorWrapper>
  )
}