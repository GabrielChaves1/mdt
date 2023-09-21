import { Clock } from 'lucide-react';
import * as S from './styles';
import ICourse from '@/types/Course';
import { Link } from 'react-router-dom';

export default function Course({ date, id, timeToComplete, title }: ICourse) {
  const formattedDate = new Date(date);

  const day = String(formattedDate.getDate()).padStart(2, '0');
  const month = String(formattedDate.getMonth() + 1).padStart(2, '0');
  const year = String(formattedDate.getFullYear());

  return (
    
    <S.Wrapper>
      <S.Header>
        <S.Title>Investigação</S.Title>
        <S.TimeBox>
          <Clock size={'1.6rem'} color="white" />
          {timeToComplete} min
        </S.TimeBox>
      </S.Header>
      <S.Main>
        <S.Subtitle>{title}</S.Subtitle>
        <S.Date>{day}/{month}/{year}</S.Date>
      </S.Main>
      <Link to={`/courses/${id}`}>
        <S.Button>Ver Detalhes</S.Button>
      </Link>
    </S.Wrapper>
  )
}