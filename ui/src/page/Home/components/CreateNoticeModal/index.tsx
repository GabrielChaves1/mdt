import Modal from "@/components/Modal";
import { ModalHostProps, ModalRootHandles } from "@/components/Modal/ModalRoot";
import { TextField } from "@/components/TextField";
import { Textarea } from "@/components/Textarea/styles";
import { forwardRef } from "react";
import * as S from "./styles";
import Button from "@/components/Button";
import fetchNui from "@/utils/fetchNui";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"
import { ShieldAlert } from "lucide-react";
import { useTheme } from "styled-components";
import { useNuiEvent } from "@/hooks/useNuiEvent";

const schema = yup.object({
  title: yup.string().required("O título é obrigatório!").max(60, "Máximo de 60 caracteres").nonNullable(),
  description: yup.string().required("A descrição é obrigatória!").max(255, "Máximo de 255 caracteres").nonNullable()
})

type FormData = {
  title: string
  description: string
}

const CreateNoticeModal = forwardRef<ModalRootHandles, ModalHostProps>(({ onClose }, ref) => {
  const { colors } = useTheme();

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
              <p>
                <ShieldAlert size={'1.6rem'} color={colors.error} />
                {errors.title?.message}
              </p>
            )}
            <TextField
              {...register("title", { required: true, maxLength: 60 })}
              autoFocus
              placeholder="Título do aviso" />
            {errors.description && (
              <p>
                <ShieldAlert size={'1.6rem'} color={colors.error} />
                {errors.description?.message}
              </p>
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