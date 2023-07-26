import Card from "@/components/Card";
import * as S from './styles';
import Input from "@/components/Input";
import { TextField } from "@/components/TextField";

export default function PolicersForm() {
  return (
    <S.PolicersWrapper>
      <Card.Root>
        <Card.Content>
          <S.Container>
            <Input.Root>
              <Input.Header>
                <Input.Label>Policiais Envolvidos</Input.Label>
              </Input.Header>
              <Input.Content>
                <TextField placeholder="Selecionar..." />
              </Input.Content>
            </Input.Root>
          </S.Container>
        </Card.Content>
      </Card.Root>
    </S.PolicersWrapper>
  )
}