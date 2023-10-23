import Button from '@/components/Button';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import { ArrowDown, ArrowLeftToLine, ArrowUp, ChevronRight, FolderEdit } from 'lucide-react';
import { useTheme } from 'styled-components';
import Action from '@/components/Action';
import Badge from '@/components/Badge';
import Timeline from '@/components/Timeline';

export default function Profile() {
  const { colors } = useTheme();
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <Button 
        onClick={() => navigate(-1)} 
        variant="secondary">
        <ArrowLeftToLine size={'1.6rem'} color={colors.icon} />
        Voltar
      </Button>
      <S.Banner>
        <S.UserImage src="https://media.discordapp.net/attachments/1053758526809460746/1159208060980559892/nico.gif"/>
      </S.Banner>
      <S.Content>
        <S.Data>
          <S.TitleWrapper>
            <S.Username>Droyen Dev</S.Username>
            <S.Rank>Recruta</S.Rank>
          </S.TitleWrapper>
          <S.Actions>
            <Action label='Promover' icon={ArrowUp}></Action>
            <Action label='Rebaixar' icon={ArrowDown}></Action>
            <Action label='Advertir' icon={FolderEdit}></Action>
          </S.Actions>
          <S.LevelWrapper>
            <S.CurrentLevel>
              Recruta
              <span>
                <ChevronRight size={'1rem'} color={colors.icon} />
                Soldado
              </span>
            </S.CurrentLevel>
            <S.Exp>100/<span>250exp</span></S.Exp>
            <S.ProgressBar />
          </S.LevelWrapper>
          <S.CoursesWrapper>
            <h2>Cursos</h2>
            <S.CoursesList>
              <Badge color='blue'>Treinamento de tiro</Badge>
              <Badge color='crimson'>Banco Central</Badge>
              <Badge color='orange'>Abordagem</Badge>
              <Badge color='purple'>Investigação</Badge>
            </S.CoursesList>
          </S.CoursesWrapper>
        </S.Data>
        
        <Timeline />
      </S.Content>
    </S.Wrapper>
  )
}