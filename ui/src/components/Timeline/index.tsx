import { ElementType, MouseEventHandler, memo, useCallback, useEffect, useRef, useState } from 'react'
import * as S from './styles'
import { useTheme } from 'styled-components'
import { Calendar, PartyPopper, Trophy } from 'lucide-react'
import { motion, useAnimation, useInView } from 'framer-motion'

interface TimelineItemProps {
  direction: 'left' | 'right'
  icon: ElementType
  title: string
  createdAt: string
  color?: string
}

const TimelineItem = memo(({ icon: Icon, direction, title, color, createdAt }: TimelineItemProps) => {
  const { colors } = useTheme();
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if(isInView) {
      mainControls.start("visible");
    }
  }, [isInView])

  const parser = title.split('**');
  const text = parser[0];
  const highlightedText = parser[1];

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: .5 },
        visible: { opacity: 1, scale: 1 }
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: .5, delay: .2 }}>
      <S.Item color={color} ref={itemRef} direction={direction}>
        <S.ItemHeader>
          <Icon size="2rem" color={color ?? colors.primary} />
          <S.ItemTitle>{text}<span style={{ color }}>{highlightedText}</span></S.ItemTitle>
        </S.ItemHeader>
        <S.ItemDate>{createdAt}</S.ItemDate>
      </S.Item>
    </motion.div>
  )
})

export default function Timeline() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [movingScroll, setMovingScroll] = useState<boolean>(false);

  const onMouseMove = (event: any) => {
    const scroll = scrollRef.current;
    if (!scroll || !movingScroll) return;
    scroll.scrollBy(0, -event.movementY * 1.15);
  }

  return (
    <S.Wrapper onMouseLeave={() => setMovingScroll(false)}>
      <S.MidLine />
      <S.List ref={scrollRef} onMouseMove={onMouseMove} onMouseDown={() => setMovingScroll(true)} onMouseUp={() => setMovingScroll(false)}>
        <TimelineItem icon={PartyPopper} direction='left' color="orange" createdAt='20/06/2023' title='Promovido a **Cabo**' />
        <TimelineItem icon={Trophy} direction='right' createdAt='01/07/2023' title='Concluiu o curso da **Policia Civil**' />
        <TimelineItem icon={Trophy} direction='left' createdAt='29/06/2023' title='Concluiu o curso de **Pericia**' />
        <TimelineItem icon={Trophy} direction='right' createdAt='01/07/2023' title='Concluiu o curso de **Drop Tático**' />
        <TimelineItem icon={Trophy} direction='left' createdAt='29/06/2023' title='Concluiu o curso de **Investigação**' />
        <TimelineItem icon={Trophy} direction='right' createdAt='27/06/2023' title='Concluiu o curso de **Abordagem**' />
        <TimelineItem icon={PartyPopper} direction='left' color="orange" createdAt='20/06/2023' title='Promovido a **Soldado**' />
        <TimelineItem icon={Calendar} direction='right' createdAt='10/06/2023' title='Entrou na **Corporação**' />
      </S.List>
    </S.Wrapper>
  )
}