import Avatar from "../Avatar";
import * as S from './styles';

export default function Header() {
  return (
    <>
      <S.UserBox>
        <Avatar />
        <S.UserDataBox>
          <p>Gabriel Droyen</p>
          <span>Recruta</span>
          <S.ProgressBar>
            <S.Fill data-exp="50" data-required="100" />
          </S.ProgressBar>
        </S.UserDataBox>
      </S.UserBox>
    </>
  )
}