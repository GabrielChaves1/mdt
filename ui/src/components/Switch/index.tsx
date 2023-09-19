import { SwitchProps } from '@radix-ui/react-switch';
import * as S from './styles';

export default function Switch(props: SwitchProps) {
  return (
    <S.SwitcherRoot {...props} className="SwitchRoot" id="airplane-mode">
      <S.SwitcherThumb className="SwitchThumb" />
    </S.SwitcherRoot>
  )
}