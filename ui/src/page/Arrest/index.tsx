import * as S from './styles';
import { Outlet } from 'react-router-dom';

export default function Arrest() {
  return (
    <S.Wrapper>
      <Outlet />
    </S.Wrapper>
  )
}