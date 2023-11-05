import Modal from "@/components/Modal";
import { forwardRef, useState } from "react";
import { ModalHostProps, ModalRootHandles } from "@/components/Modal/ModalRoot";
import { TextField } from "@/components/TextField";
import Slider from "@/components/Slider";
import * as S from './styles';
import Button from "@/components/Button";
import { Textarea } from "@/components/Textarea";
import { useForm } from "react-hook-form";
import fetchNui from "@/utils/fetchNui";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMessage from "@/components/ErrorMessage";

type FormData = {
  name: string,
  description: string
}

const schema = yup.object({
  name: yup.string().required("O título é obrigatório!").max(60, "Máximo de 60 caracteres").nonNullable(),
  description: yup.string().required("A descrição é obrigatória!").max(255, "Máximo de 255 caracteres").nonNullable()
})

const CreateArticleModal = forwardRef<ModalRootHandles, ModalHostProps>(({ onClose }, ref) => {
  const { handleSubmit, register, formState: { errors }, reset } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const [prisionTime, setPrisionTime ] = useState<number>(0);
  const [fine, setFine] = useState<number>(0);
  
  const formattedPrisionTime = prisionTime.toLocaleString('pt-br');
  const formattedFine = `R$ ${fine.toLocaleString('pt-br')}`;

  async function onSubmit(data: FormData) {
    fetchNui("onCreateArticle", {
      ...data,
      time: prisionTime,
      fine
    })
    if(onClose) onClose();
  }

  function onOpen() {
    setPrisionTime(0);
    setFine(0);
    reset();
  }

  return (
    <Modal.Root onOpen={onOpen} ref={ref}>
      <Modal.Header title="Criar artigo criminal" />
      <Modal.Content>
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.Column>
            {errors.name && (
              <ErrorMessage message={errors.name?.message!} />
            )}
            <TextField maxLength={60} {...register("name", { required: true })} placeholder="Nome do artigo"/>
          </S.Column>
          <S.Sliders>
            <S.SliderArea>
              <S.SliderValues>
                <p>Tempo de prisão</p>
                <div>
                  <S.SliderInput 
                    defaultValue={0}
                    allowNegativeValue={false}
                    allowDecimals={false}
                    groupSeparator="."
                    max={150}
                    value={prisionTime}
                    maxLength={150}
                    onValueChange={(value, name) => setPrisionTime(Number(value) || 0)} />
                  <span>meses</span>
                </div>
              </S.SliderValues>
              <Slider min={0} max={150} step={1} value={[prisionTime]} onValueChange={(value: number[]) => setPrisionTime(value[0])} />
            </S.SliderArea>
            <S.SliderArea>
              <S.SliderValues>
                <p>Valor em multa</p>
                <S.SliderInput 
                  defaultValue={0}
                  allowNegativeValue={false}
                  decimalsLimit={2}
                  prefix="R$"
                  decimalSeparator=","
                  groupSeparator="."
                  max={500000}
                  value={fine}
                  maxLength={500000}
                  onValueChange={(value, name) => setFine(Number(value) || 0)} />
              </S.SliderValues>
              <Slider min={0} max={500000} step={1000} value={[fine]} onValueChange={(value: number[]) => setFine(value[0])} />
            </S.SliderArea>
          </S.Sliders>
          <S.Column>
            {errors.description && (
              <ErrorMessage message={errors.description?.message!} />
            )}
            <Textarea {...register("description", { required: true })} maxLength={255} placeholder="Descrição do artigo"/>
          </S.Column>
          <S.Actions>
            <Button variant="primary" size="md">Criar artigo</Button>
          </S.Actions>
        </form>
      </Modal.Content>
    </Modal.Root>
  )
})

export default CreateArticleModal;