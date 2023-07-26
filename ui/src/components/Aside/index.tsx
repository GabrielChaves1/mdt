import { HomeIcon, TokensIcon } from '@radix-ui/react-icons';
import Button from '../Button';
import * as S from './styles';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Aside() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <S.Container>
      <S.NavigationArea>
        <S.NavigationAreaTitle>Navegação</S.NavigationAreaTitle>
        <S.NavigationAreaContent>
          <Button 
            variant={location.pathname == "/" ? 'primary' : 'secondary'} 
            onClick={() => navigate('/')} 
            fill>
            <HomeIcon />
            Página Inicial
          </Button>
          <Button 
            variant={location.pathname == "/arrest" ? 'primary' : 'secondary'} 
            onClick={() => navigate('/arrest')} 
            fill>
            <TokensIcon />
            Registro de prisão
          </Button>
        </S.NavigationAreaContent>
      </S.NavigationArea>
    </S.Container>
  )
}