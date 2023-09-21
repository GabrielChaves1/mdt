import Button from '../Button';
import * as S from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { BookOpen, Crown, Settings, StickyNote, Tv2, Users } from 'lucide-react';
import { memo } from 'react';

function Aside() {
  const navigate = useNavigate();
  const location = useLocation();

  const paths = [
    {
      url: "/",
      icon: Tv2,
      text: "Página Inicial"
    },
    {
      url: "/arrest",
      icon: StickyNote,
      text: "Prisões"
    },
    {
      url: "/user",
      icon: Users,
      text: "Consultar Cidadão"
    },
    {
      url: "/courses",
      icon: BookOpen,
      text: "Cursos"
    },
    {
      url: "/roles-hierarchy",
      icon: Crown,
      text: "Hierarquia de Cargos"
    },
    {
      url: "/config",
      icon: Settings,
      text: "Configurações"
    },
  ]

  const handleNavigate = (url: string) => {
    if(location.pathname == url) return;
    navigate(url);
  }

  return (
    <S.Container>
      <S.NavigationArea>
        <S.NavigationAreaTitle>Navegação</S.NavigationAreaTitle>
        <S.NavigationAreaContent>
          {paths.map(({ url, text, icon: Icon }) => (
            <Button 
              key={url}
              variant={location.pathname == url ? 'primary' : 'secondary'} 
              onClick={() => handleNavigate(url)} 
              fill>
              <Icon size={18}/>
              {text}
            </Button>
          ))}
        </S.NavigationAreaContent>
      </S.NavigationArea>
    </S.Container>
  )
}

export default memo(Aside);