import { useNuiEvent } from "@/hooks/useNuiEvent";
import Avatar from "../Avatar";
import * as S from './styles';
import { useQuery } from "@tanstack/react-query";
import fetchNui from "@/utils/fetchNui";
import Loading from "../Loading";

interface HeaderOfficer {
  img: string
  officer: string
  cargo: string
  xp: number
  xpToUp: number
}

export default function Header() {
  const { data, isLoading, refetch } = useQuery<HeaderOfficer>(['getOfficerData'], () => fetchNui("getOfficerData"), {
    initialData: {
      img: "https://rggames.com.br/wp-content/uploads/2015/10/trevor-phillips.jpg",
      officer: "Droyen Patrulheiro",
      cargo: "Recruta",
      xp: 50,
      xpToUp: 100
    }
  })

  useNuiEvent('reloadHeaderOfficer', refetch)

  return (
    <>
      <S.UserBox>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Avatar image={data?.img} />
            <S.UserDataBox>
              <p>{data?.officer}</p>
              <span>{data?.cargo}</span>
              <S.ProgressBar>
                <S.Fill data-exp={data?.xp} data-required={data?.xpToUp} />
              </S.ProgressBar>
            </S.UserDataBox>
          </>
        )}
        
      </S.UserBox>
    </>
  )
}