import { ElementType, MouseEventHandler, memo, useCallback, useEffect, useRef, useState } from 'react'
import * as S from './styles'
import { useTheme } from 'styled-components'
import { Calendar, PartyPopper, Trophy } from 'lucide-react'
import { motion, useAnimation, useInView } from 'framer-motion'
import ITimeline from '@/types/Timeline'
import formatDate from '@/utils/formatDate'
import getIconLucide from '@/utils/getIconLucide'

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

export default function Timeline({ timeline }: { timeline: ITimeline[] }) {
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
        {
          timeline.map((item, i) => (
            <TimelineItem icon={getIconLucide(item?.icon)} direction={i % 2 == 0 ? 'right' : 'left'} color={item?.color} createdAt={formatDate(item?.date)} title={item?.title} />
          ))
        }
      </S.List>
    </S.Wrapper>
  )
}