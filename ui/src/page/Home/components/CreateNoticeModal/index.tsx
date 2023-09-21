import Modal from "@/components/Modal";
import { ModalRootHandles } from "@/components/Modal/ModalRoot";
import { TextField } from "@/components/TextField";
import { Textarea } from "@/components/Textarea/styles";
import { forwardRef, useState } from "react";
import * as S from "./styles";
import Button from "@/components/Button";

const CreateNoticeModal = forwardRef<ModalRootHandles>((_, ref) => {
  const [date, setDate] = useState<number>();

  function onOpen() {
    setDate(Date.now())
  }

  return (
    <Modal.Root onOpen={onOpen} ref={ref}>
      <Modal.Header title="Criar Aviso" subtitle="Complete o campo abaixo antes de publicar o aviso" />
      <Modal.Content>
        <S.Column>
          <TextField max={60} autoFocus placeholder="Título do aviso" />
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