import Button from '../Button';
import * as S from './styles';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Crown, Settings, StickyNote, Tv2, Users } from 'lucide-react';
import { memo } from 'react';
import Header from '../Header';
import LogoImage from '@/assets/logo.webp';

function Aside() {
  const location = useLocation();

  const paths = [
    {
      url: "/home",
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

  return (
    <S.Container>
      <S.Logo src={LogoImage} />
      <Header />
      <S.NavigationArea>
        <S.NavigationAreaTitle>Navegação</S.NavigationAreaTitle>
        <S.NavigationAreaContent>
          {paths.map(({ url, text, icon: Icon }) => (
            <Link key={url} to={url}>
              <Button
                variant={location.pathname.includes(url) ? 'primary' : 'secondary'} 
                fill>
                <Icon size={'1.8rem'}/>
                {text}
              </Button>
            </Link>
          ))}
        </S.NavigationAreaContent>
      </S.NavigationArea>
    </S.Container>
  )
}

export default memo(Aside);