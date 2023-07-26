import { useLayoutEffect, useState } from "react";
import * as S from './styles';

interface RippleProps {
  duration?: number,
  color?: string
}

type RippleItem = { x: number, y: number, size: number }

const useDebouncedRippleCleanUp = (rippleCount: number, duration: number, cleanUpFunction: () => void) => {
  useLayoutEffect(() => {
    let bounce: any = null;
    if (rippleCount > 0) {
      clearTimeout(bounce);

      bounce = setTimeout(() => {
        cleanUpFunction();
        clearTimeout(bounce);
      }, duration * 4);
    }

    return () => clearTimeout(bounce);
  }, [rippleCount, duration, cleanUpFunction]);
};

export default function Ripple({ duration = 850, color = "#fff" }: RippleProps) {
  const [rippleArray, setRippleArray] = useState<RippleItem[]>([] as any);

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([]);
  });

  const addRipple = (event: any) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size = rippleContainer.width > rippleContainer.height
      ? rippleContainer.width
      : rippleContainer.height;

    const x =
      event.pageX - rippleContainer.x - rippleContainer.width / 2;
    const y =
      event.pageY - rippleContainer.y - rippleContainer.width / 2;
    const newRipple = {
      x,
      y,
      size
    };

    setRippleArray([...rippleArray, newRipple]);
  }

  return (
    <S.Container duration={duration} color={color} onMouseDown={addRipple}>
      {
        rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => {
          return (
            <span
              key={"ripple_" + index}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size
              }}
            />
          );
        })}
    </S.Container>
  )
}