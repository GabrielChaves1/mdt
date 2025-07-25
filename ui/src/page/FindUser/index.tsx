import Banner from '@/components/Banner';
import * as S from './styles';
import Card from '@/components/Card';
import Input from '@/components/Input';
import { TextField } from '@/components/TextField';
import Button from '@/components/Button';
import SearchIcon from '@/assets/search.webp';

export default function FindUser() {
  return (
    <S.Wrapper>
      <Banner.Root icon={SearchIcon}>
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

      <Banner.Root>
        <Banner.Header>
          <Banner.Title>Procurados</Banner.Title>
        </Banner.Header>
      </Banner.Root>
    </S.Wrapper>
  )
}