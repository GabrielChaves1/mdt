import { forwardRef } from "react";
import { ModalRootHandles } from "../Modal/ModalRoot";
import Modal from "../Modal";
import * as S from './styles';
import Button from "../Button";

const Inventory = forwardRef<ModalRootHandles>((_, ref) => {
  return (
    <Modal.Root width={'120rem'} height={'70rem'} ref={ref}>
      <Modal.Header title="Deter Itens" subtitle="Selecione os itens do inventário do player que deverão ser detidos"/>
      <S.Wrapper>
        <S.Inventory>
          <S.InventoryTitle>Itens Detidos</S.InventoryTitle>
          <S.Grid>
            {[...Array(50)].map(_ => (
              <S.Item></S.Item>
            ))}
          </S.Grid>
        </S.Inventory>
        <S.Inventory>
          <S.InventoryTitle>Inventario de Droyen#1010</S.InventoryTitle>
          <S.Grid>
            {[...Array(50)].map(_ => (
              <S.Item>
                <S.Title>Kit Médico</S.Title>
                <S.Image src="https://media.discordapp.net/attachments/1010313911419019305/1162191455939473428/image.png?ex=653b0a23&is=65289523&hm=4fadabff5501ec18a24f9fdf16adca7bced4ca40eb68c7ce3adb3f6cb44700c4&="/>
              </S.Item>
            ))}
          </S.Grid>
        </S.Inventory>
      </S.Wrapper>
    </Modal.Root>
  )
})

export default Inventory;