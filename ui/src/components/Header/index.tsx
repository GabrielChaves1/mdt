import { useNuiEvent } from "@/hooks/useNuiEvent";
import Avatar from "../Avatar";
import * as S from './styles';
import { useQuery } from "@tanstack/react-query";
import fetchNui from "@/utils/fetchNui";
import Loading from "../Loading";
import { useLocation, useNavigate } from "react-router-dom";

interface HeaderOfficer {
  img: string
  officer: string
  cargo: string
  xp: number
  xpToUp: number
}

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { data, isLoading, refetch } = useQuery<HeaderOfficer>(['getOfficerData'], () => fetchNui("getOfficerData"), {
    initialData: {
      img: "https://rggames.com.br/wp-content/uploads/2015/10/trevor-phillips.jpg",
      officer: "Droyen Patrulheiro",
      cargo: "Recruta",
      xp: 10,
      xpToUp: 100
    }
  })

  useNuiEvent('reloadHeaderOfficer', refetch)

  function openProfile() {
    if(!location.pathname.includes('/user/')) navigate('/user/2')
  }

  return (
    <>
      <S.UserBox onClick={openProfile}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Avatar image={data.img} />
            <S.UserDataBox>
              <p>{data.officer}</p>
              <span>{data.cargo}</span>
              <S.ProgressBar>
                <S.Fill percentage={data.xp} required={data.xpToUp} />
              </S.ProgressBar>
            </S.UserDataBox>
          </>
        )}
        
      </S.UserBox>
    </>
  )
}