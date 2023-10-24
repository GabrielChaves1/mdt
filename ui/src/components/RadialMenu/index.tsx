import { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './styles';
import ArrestIcon from '@/assets/arrest.webp'
import ConfigIcon from '@/assets/config.webp'
import NotepadIcon from '@/assets/notepad.webp'
import BookIcon from '@/assets/book.webp'
import CrownIcon from '@/assets/crown.webp'
import CalendarIcon from '@/assets/calendar.webp'
import { motion } from 'framer-motion';
import RadialMenuItem from '@/types/RadialMenuItem';
import { isEnvBrowser } from '@/utils/misc';
import fetchNui from '@/utils/fetchNui';
import { useNuiEvent } from '@/hooks/useNuiEvent';

export default function RadialMenu() {
  const centerRef = useRef<HTMLDivElement>(null);
  const [angle, setAngle] = useState<number>(0);
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const [items, setItems] = useState<RadialMenuItem[]>([]);
  const [visible, setVisible] = useState<boolean>(false);

	useNuiEvent<RadialMenuItem[]>('openRadial', (data) => {
		setItems(data);
    setVisible(true);
	})

  const itemsAmount = items.length;

  const calculateAngleDegrees = useCallback((x: number, y: number): number => {
    return Math.atan2(y, x) * (180 / Math.PI);
  },[])

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
  }, [visible])

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
    if(!visible) return;

		const keyUpHandler = (e: any) => {
			if (["e", "E", "Escape"].includes(e.key)) {
				if (!isEnvBrowser()) {
          fetchNui("onSelectRadialItem", { ...items[selectedItem] });
          setItems([]);
          setVisible(false);
				} else {
          setItems([]);
          setVisible(false);
        }
			}
		}

		window.addEventListener("keyup", keyUpHandler)

		return () => window.removeEventListener("keyup", keyUpHandler)
	}, [selectedItem, visible])

  useEffect(() => {
    if(!visible) return;
    
    window.addEventListener("keydown", onKeyboardKeyDown)

    return () => {
      window.removeEventListener("keydown", onKeyboardKeyDown)
    }
  }, [selectedItem, visible])

  useEffect(() => {
    if(!visible) return;

    window.addEventListener("mousemove", onMouseMove)
    
    return () => {
      window.removeEventListener("mousemove", onMouseMove)
    }
  }, [visible])

  if(!visible) return <></>;

  return (
    <motion.div
      initial={{opacity: 0, scale: .5}}
      animate={{opacity: 1, scale: 1}}
      exit={{opacity: 0, scale: .5, transition: { duration: .1 }}}>
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
              {selectedItem !== undefined && (
                <>
                  <S.Title>{items[selectedItem]?.name || ""}</S.Title>
                  <S.Description>{items[selectedItem]?.description || ""}</S.Description>
                  <S.Image src={items[selectedItem]?.image}/>
                </>
              )}
          </S.Content>
        </S.Wrapper>
      </S.Container>
    </motion.div>
  )
}