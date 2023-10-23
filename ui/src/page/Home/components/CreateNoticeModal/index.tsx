import Modal from "@/components/Modal";
import { ModalHostProps, ModalRootHandles } from "@/components/Modal/ModalRoot";
import { TextField } from "@/components/TextField";
import { Textarea } from "@/components/Textarea/styles";
import { forwardRef } from "react";
import * as S from "./styles";
import Button from "@/components/Button";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"
import ErrorMessage from "@/components/ErrorMessage";
import fetchNui from "@/utils/fetchNui";

const schema = yup.object({
  title: yup.string().required("O título é obrigatório!").max(60, "Máximo de 60 caracteres").nonNullable(),
  description: yup.string().required("A descrição é obrigatória!").max(255, "Máximo de 255 caracteres").nonNullable()
})

type FormData = {
  title: string
  description: string
}

const CreateNoticeModal = forwardRef<ModalRootHandles, ModalHostProps>(({ onClose }, ref) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  function onOpen() {
    reset();
  }

  async function onSubmit(data: FormData) {
    const res = await fetchNui("createNotice", data, true);
    if(res){
      onClose();
    }
  }

  return (
    <Modal.Root onOpen={onOpen} ref={ref}>
      <Modal.Header title="Criar Aviso" subtitle="Complete o campo abaixo antes de publicar o aviso" />
      <Modal.Content>
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.Column>
            {errors.title && (
              <ErrorMessage message={errors.title?.message!} />
            )}
            <TextField
              {...register("title", { required: true, maxLength: 60 })}
              autoFocus
              placeholder="Título do aviso" />
              
            {errors.description && (
              <ErrorMessage message={errors.description?.message!} />
            )}
            <Textarea
              {...register("description", { required: true })}
              placeholder="Descrição do aviso" />
          </S.Column>
          <S.Row>
            <Button>Publicar</Button>
          </S.Row>
        </form>
      </Modal.Content>
    </Modal.Root>
  )
})

export default CreateNoticeModal;