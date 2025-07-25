import Modal from "@/components/Modal";
import { ModalHostProps, ModalRootHandles } from "@/components/Modal/ModalRoot";
import { forwardRef, useState } from "react";
import * as S from "./styles";
import { MapPin } from "lucide-react";
import Action from "@/components/Action";
import fetchNui from "@/utils/fetchNui";
import Loading from "@/components/Loading";

interface Officer {
  user_id: number,
  nome: string,
  cargo: string,
  org: string
}

const OnlinePolicersModal = forwardRef<ModalRootHandles>((_, ref) => {
  const [ list, setList ] = useState<Officer[]>();
  
  async function onOpen() {
    const res = await fetchNui("getOnlineOfficers");
    if(res.length <= 0) return;

    setList(res);
  }

  function handleMarkOnMap(officer: Officer) {
    fetchNui("markOfficerOnMap", officer.user_id);
  }

  return (
    <Modal.Root height={'50rem'} onOpen={onOpen} ref={ref}>
      <Modal.Header title="Policiais On-line" subtitle={list && `Atualmente há ${list.length} oficiais em serviço`} />
      <Modal.Content>
        {list ? (
          <S.List>
            {list.map((officer) => (
              <S.Item>
                <S.Row>
                  <S.PolicerName>{officer?.nome}</S.PolicerName>
                  <S.PolicerRole>{officer?.cargo} | {officer?.org}</S.PolicerRole>
                </S.Row>
                <Action onClick={() => handleMarkOnMap(officer)} icon={MapPin} label="Marcar no Mapa" />
              </S.Item>
            ))}
          </S.List>
        ) : (
          <Loading />
        )}
      </Modal.Content>
    </Modal.Root>
  )
})

export default OnlinePolicersModal;