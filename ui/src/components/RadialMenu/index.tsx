import { useEffect, useRef, useState } from 'react';
import * as S from './styles';
import ArrestIcon from '@/assets/arrest.webp'
import ConfigIcon from '@/assets/config.webp'
import NotepadIcon from '@/assets/notepad.webp'
import BookIcon from '@/assets/book.webp'
import SearchIcon from '@/assets/search.webp'
import CrownIcon from '@/assets/crown.webp'
import CalendarIcon from '@/assets/calendar.webp'
import AnnounceIcon from '@/assets/announce.webp'
import { motion } from 'framer-motion';
import { useNuiEvent } from '@/hooks/useNuiEvent';
import { debugData } from '@/utils/debugData';

interface Item {
  image: string
  name: string
  description: string
}

debugData<Item[]>([
  {
		action: 'openRadial',
		data: [
			{
				name: "Algemar Jogador",
				description: "Algemar o jogador mais próximo de você",
				image: ArrestIcon
			},
      {
        name: "Segurar Jogador",
        description: "Segurar o jogador mais próximo",
        image: CalendarIcon
      },
			{
				name: "Abrir Tablet",
				description: "Abrir o tablet policial",
				image: ConfigIcon
			},
			{
				name: "Aplicar Multa",
				description: "Aplique uma multa no veículo mais próximo",
				image: NotepadIcon
			},
			{
				name: "Colocar Barreira",
				description: "Coloque uma barreira na sua frente",
				image: BookIcon
			},
			{
				name: "Colocar Cone",
				description: "Coloque um cone na sua frente",
				image: CrownIcon
			},
			{
				name: "Ver RG",
				description: "Ver RG do cidadão mais próximo",
				image: SearchIcon
			},
			{
				name: "Pegar itens ilegais",
				description: "Pegar itens ilegais do jogador mais próximo",
				image: AnnounceIcon
			},
		]
	}
], 10)

export default function RadialMenu() {
  const centerRef = useRef<HTMLDivElement>(null);
  const [angle, setAngle] = useState<number>(0);
  const [selectedItem, setSelectedItem] = useState<number>();
  const [items, setItems] = useState<Item[]>([]);

  useNuiEvent('openRadial', setItems)

  function calculateAngleDegrees(x: number, y: number): number {
    return Math.atan2(y, x) * (180 / Math.PI);
  }

  console.log(selectedItem);

  const clamp = (num: number, min: number, max: number): number => Math.min(Math.max(num, min), max);

  useEffect(() => {
    function onMouseMove(event: MouseEvent) {
      const center = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
      }
      
      const delta = {
        x: center.x - event.clientX,
        y: center.y - event.clientY,
      }

      const angle = calculateAngleDegrees(delta.x, delta.y);
      
      const circle = Math.sign(angle) > 0 ? angle : 360 - Math.abs(angle);
      setSelectedItem(Math.round(Math.abs(circle / 45)));
      
      if(circle > 337.5) {
        setSelectedItem(0);
      }

      setAngle(clamp(angle, -180, 180));
    }

    window.addEventListener("mousemove", onMouseMove)

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  return (
    <motion.div
      initial={{opacity: 0, scale: 0}}
      animate={{opacity: 1, scale: 1, transition: {duration: .25}}}
      exit={{opacity: 0, scale: 0}}>
      <S.Container>
        <S.Items>
          {items?.map((item, i) => (
            <S.Item key={i} selected={selectedItem === i} itemId={i}>
              <img src={item.image} />
            </S.Item>
          ))}
        </S.Items>
        <S.Wrapper ref={centerRef}>
          <S.Indicator angle={angle} />
          <S.Content>
              {selectedItem !== undefined ? (
                <>
                  <S.Title>{items[selectedItem]?.name || ""}</S.Title>
                  <S.Description>{items[selectedItem]?.description || ""}</S.Description>
                  <S.Image src={items[selectedItem]?.image}/>
                </>
              ) : <></>}
          </S.Content>
        </S.Wrapper>
      </S.Container>
    </motion.div>
  )
}