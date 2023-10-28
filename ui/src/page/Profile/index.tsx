import Button from '@/components/Button';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import { ArrowDown, ArrowLeftToLine, ArrowUp, ChevronRight, FolderEdit } from 'lucide-react';
import { useTheme } from 'styled-components';
import Action from '@/components/Action';
import Badge from '@/components/Badge';
import Timeline from '@/components/Timeline';
import { useQuery } from '@tanstack/react-query';
import IProfile from '@/types/Profile';
import fetchNui from '@/utils/fetchNui';
import Loading from '@/components/Loading';

export default function Profile() {
  const { colors } = useTheme();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery<IProfile>(['getProfileOfficer'], () => fetchNui("getProfileOfficer"), {
    initialData: {
      user_id: 1,
      officer: "Th Pirituba",
      img: "https://media.discordapp.net/attachments/1053758526809460746/1159208060980559892/nico.gif",
      cargo: "string",
      nextCargo: "string",
      xp: 0,
      xpToUp: 100,
      cursos: [],
      timeline: []
    }
  })

  return (
    <S.Wrapper>
      <Button 
        onClick={() => navigate(-1)} 
        variant="secondary">
        <ArrowLeftToLine size={'1.6rem'} color={colors.icon} />
        Voltar
      </Button>
      <S.Banner>
        <S.UserImage src={data?.img} />
      </S.Banner>
      <S.Content>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {
              <S.Data>
                <S.TitleWrapper>
                  <S.Username>{data?.officer}</S.Username>
                  <S.Rank>{data?.cargo}</S.Rank>
                </S.TitleWrapper>
                <S.Actions>
                  <Action label='Promover' icon={ArrowUp}></Action>
                  <Action label='Rebaixar' icon={ArrowDown}></Action>
                  <Action label='Advertir' icon={FolderEdit}></Action>
                </S.Actions>
                <S.LevelWrapper>
                  <S.CurrentLevel>
                    {data?.cargo}
                    <span>
                      <ChevronRight size={'1rem'} color={colors.icon} />
                      {data?.nextCargo}
                    </span>
                  </S.CurrentLevel>
                  <S.Exp>{data?.xp}/<span>{data?.xpToUp}exp</span></S.Exp>
                  <S.ProgressBar />
                </S.LevelWrapper>
                <S.CoursesWrapper>
                  <h2>Cursos</h2>
                  <S.CoursesList>
                    {
                      data?.cursos.map((curso, i) => (
                        <Badge color='blue'>{curso?.nome}</Badge>
                      ))
                    }
                  </S.CoursesList>
                </S.CoursesWrapper>
              </S.Data>
            }
          </>
        )}

        <Timeline timeline={data?.timeline} />
      </S.Content>
    </S.Wrapper>
  )
}