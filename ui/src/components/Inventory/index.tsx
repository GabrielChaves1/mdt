import { forwardRef, useEffect, useState } from "react";
import { ModalRootHandles } from "../Modal/ModalRoot";
import Modal from "../Modal";
import * as S from './styles';
import Button from "../Button";
import { X } from "lucide-react";
import { useTheme } from "styled-components";
import fetchNui from "@/utils/fetchNui";

interface InventoryProps {
  onUpdateItems: (items: ItemProps[]) => void
  onClose: () => void
}

interface ItemProps {
  nameItem: string,
  nameFormat: string,
  image: string,
  amount: number
}

const Inventory = forwardRef<ModalRootHandles, InventoryProps>(({ onUpdateItems, onClose }, ref) => {
  const { colors } = useTheme();

  const [userId, setUserId] = useState<number>();
  const [selectedItems, setSelectedItems] = useState<ItemProps[]>([]);
  const [items, setItems] = useState<ItemProps[]>([
    {
      nameItem: "kitmedico",
      nameFormat: "Kit Médico",
      image: "https://media.discordapp.net/attachments/1010313911419019305/1162191455939473428/image.png?ex=653b0a23&is=65289523&hm=4fadabff5501ec18a24f9fdf16adca7bced4ca40eb68c7ce3adb3f6cb44700c4&=",
      amount: 1
    },
  ]);

  useEffect(() => onUpdateItems(selectedItems), [selectedItems])
  
  function handleSelectItem(item: ItemProps) {
    if(selectedItems.includes(item)) {
      setSelectedItems(prev => prev.filter(el => el.nameItem !== item.nameItem))
      return;
    }

    setSelectedItems(prev => ([...prev, item]))
  }

  async function onOpen(data: { user_id: number }) {
    setUserId(data?.user_id)
    
    const itens = await fetchNui<any[]>("getInventoryPlayer", data?.user_id)
    setItems(itens)
  }

  const handleArrestItens = () => {
    fetchNui<any[]>("removeItensInventoryPlayer", { selectedItems: selectedItems, user_id: userId })

    onClose();
  }
  
  return (
    <Modal.Root onOpen={onOpen} height={'70rem'} ref={ref}>
      <Modal.Header title="Deter Itens" subtitle="Selecione os itens do inventário do player que deverão ser detidos"/>
      <S.Wrapper>
        <S.Inventory>
          <S.InventoryTitle>Inventário | {userId}</S.InventoryTitle>
          <S.Grid>
            {items.map((item, i) => (
              <S.Item selected={selectedItems.includes(item)} key={i} onClick={() => handleSelectItem(item)}>
                {selectedItems.includes(item) && (
                  <S.Locked><X size={'4rem'} color={colors.icon}/></S.Locked>
                )}
                <S.Title>{item.nameFormat}</S.Title>
                <S.Image src={item.image} />
                <S.Amount>{item.amount}x</S.Amount>
              </S.Item>
            ))}
          </S.Grid>
        </S.Inventory>
      </S.Wrapper>
      <S.Actions>
        <Button onClick={handleArrestItens}>Apreender</Button>
        <Button onClick={onClose}>Fechar</Button>
      </S.Actions>
    </Modal.Root>
  )
})

export default Inventory;