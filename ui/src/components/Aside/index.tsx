import Button from '../Button';
import * as S from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { FileText, Settings, StickyNote, Tv2, User } from 'lucide-react';
import { memo } from 'react';


function Aside() {
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
            <Tv2 size={18}/>
            Página Inicial
          </Button>
          
          <Button 
            variant={location.pathname == "/arrest" ? 'primary' : 'secondary'} 
            onClick={() => navigate('/arrest')} 
            fill>
            <StickyNote size={18}/>
            Registro de prisão
          </Button>
          
          <Button 
            variant={location.pathname == "/user" ? 'primary' : 'secondary'} 
            onClick={() => navigate('/user')} 
            fill>
            <User size={18} />
            Buscar Cidadão
          </Button>

          <Button 
            variant={location.pathname == "/roles-hierarchy" ? 'primary' : 'secondary'} 
            onClick={() => navigate('/roles-hierarchy')} 
            fill>
            <FileText size={18} />
            Hierarquia de Cargos
          </Button>
          
          <Button 
            variant={location.pathname == "/config" ? 'primary' : 'secondary'} 
            onClick={() => navigate('/config')} 
            fill>
            <Settings size={18} />
            Configurações
          </Button>
        </S.NavigationAreaContent>
      </S.NavigationArea>
    </S.Container>
  )
}

export default memo(Aside);