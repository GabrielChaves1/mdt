import * as S from './styles';
import { Outlet } from 'react-router-dom';

export default function Courses() {
  return (
    <S.Wrapper>
      <Outlet />
    </S.Wrapper>
  )
}