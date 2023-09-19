import Modal from "@/components/Modal";
import { ModalRootHandles } from "@/components/Modal/ModalRoot";
import { TextField } from "@/components/TextField";
import { Textarea } from "@/components/Textarea/styles";
import { forwardRef } from "react";
import * as S from "./styles";
import Button from "@/components/Button";

const CreateNoticeModal = forwardRef<ModalRootHandles>((_, ref) => {
  function onOpen() {
  }

  return (
    <Modal.Root onOpen={onOpen} ref={ref}>
      <Modal.Header title="Criar Aviso" subtitle="Complete o campo abaixo antes de publicar o aviso" />
      <Modal.Content>
        <S.Column>
          <TextField autoFocus placeholder="Título do aviso" />
          <Textarea placeholder="Descrição do aviso" />
        </S.Column>
        <S.Row>
          <Button>Publicar</Button>
        </S.Row>
      </Modal.Content>
    </Modal.Root>
  )
})

export default CreateNoticeModal;