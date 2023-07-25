import Button from '../Button';
import * as S from './styles';

export default function Aside() {
  return (
    <S.Container>
      <S.NavigationArea>
        <S.NavigationAreaTitle>Navegação</S.NavigationAreaTitle>
        <S.NavigationAreaContent>
          <S.Button selected={true}>Home</S.Button>
          <S.Button>Home</S.Button>
        </S.NavigationAreaContent>
      </S.NavigationArea>
    </S.Container>
  )
}