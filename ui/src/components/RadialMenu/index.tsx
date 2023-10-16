import { useCallback, useEffect, useRef, useState } from 'react';
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

interface Item {
  image: string
  name: string
  description: string
}

export default function RadialMenu() {
  const centerRef = useRef<HTMLDivElement>(null);
  const [angle, setAngle] = useState<number>(0);
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const [items, setItems] = useState<Item[]>([
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
      name: "Segurar Jogador",
      description: "Segurar o jogador mais próximo",
      image: CrownIcon
    },
    {
      name: "Abrir Tablet",
      description: "Abrir o tablet policial",
      image: NotepadIcon
    },
    {
      name: "Abrir Tablet",
      description: "Abrir o tablet policial",
      image: BookIcon
    },
  ]);
  
  const itemsAmount = items.length;

  function calculateAngleDegrees(x: number, y: number): number {
    return Math.atan2(y, x) * (180 / Math.PI);
  }

  const clamp = useCallback((num: number, min: number, max: number): number => Math.min(Math.max(num, min), max), []);

  const onMouseMove = useCallback((event: MouseEvent) => {
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
    
    if(circle > (360 - ((360 / itemsAmount) / 2))) {
      setSelectedItem(0);
    } else {
      setSelectedItem(Math.round(Math.abs(circle / (360 / itemsAmount))));
    }

    setAngle(clamp(angle, -180, 180));
  }, [])

  const onKeyboardKeyDown = useCallback(({key}: KeyboardEvent) => {
    if(key === "Tab"){
      if(selectedItem < (itemsAmount - 1) && angle < 360){
        setSelectedItem(prev => prev + 1);
        setAngle((360 / itemsAmount) * (selectedItem + 1))
        return;
      }

      setSelectedItem(0);
      setAngle(0);
    }
  },[selectedItem])

  useEffect(() => {
    window.addEventListener("keydown", onKeyboardKeyDown)

    return () => {
      window.removeEventListener("keydown", onKeyboardKeyDown)
    }
  }, [selectedItem])

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove)
    
    return () => {
      window.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}>
      <S.Container>
        <S.Items>
          {items && items?.map((item, i) => (
            <S.Item key={i} amount={itemsAmount} selected={selectedItem === i} itemId={i}>
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