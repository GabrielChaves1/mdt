import Modal from "@/components/Modal";
import { ModalRootHandles } from "@/components/Modal/ModalRoot";
import { forwardRef } from "react";
import * as S from "./styles";
import { MapPin } from "lucide-react";
import Action from "@/components/Action";

const OnlinePolicersModal = forwardRef<ModalRootHandles>((_, ref) => {
  function onOpen() {}

  return (
    <Modal.Root onOpen={onOpen} ref={ref}>
      <Modal.Header>
        <Modal.Title>Policiais On-line</Modal.Title>
        <Modal.Subtitle>Atualmente há 5 policiais em serviço</Modal.Subtitle>
      </Modal.Header>
      <Modal.Content>
        <S.List>
          <S.Item>
            <S.Row>
              <S.PolicerName>John Doe</S.PolicerName>
              <S.PolicerRole>Coronel | PMERJ</S.PolicerRole>
            </S.Row>
            <Action icon={MapPin} label="Marcar no Mapa" />
          </S.Item>
        </S.List>
      </Modal.Content>
    </Modal.Root>
  )
})

export default OnlinePolicersModal;