import Banner from '@/components/Banner';
import * as S from './styles';
import Card from '@/components/Card';
import Input from '@/components/Input';
import { TextField } from '@/components/TextField';
import Button from '@/components/Button';

export default function User() {
  return (
    <S.Wrapper>
      <Banner.Root>
        <Banner.Header>
          <Banner.Title>Buscar cidadão</Banner.Title>
        </Banner.Header>
      </Banner.Root>

      <S.SearchBarContainer>
        <Card.Root>
          <Card.Column>
            <S.SearchArea>
              <Input.Root>
                <Input.Header>
                  <Input.Label>Passaporte</Input.Label>
                </Input.Header>
                <Input.Content direction='row'>
                  <TextField placeholder='#' />
                  <Button 
                    position='center' 
                    variant='primary'>Procurar</Button>
                </Input.Content>
              </Input.Root>
            </S.SearchArea>
          </Card.Column>
        </Card.Root>
      </S.SearchBarContainer>
    </S.Wrapper>
  )
}