import { CheckboxProps } from '@radix-ui/react-checkbox';
import * as S from './styles';
import { Check } from 'lucide-react';
import { useTheme } from 'styled-components';

export default function Checkbox({ ...rest }: CheckboxProps) {
  const { colors } = useTheme();
  
  return (
    <S.Wrapper>
      <S.Root {...rest}>
        <S.Indicator>
          <Check size={'1.4rem'} strokeWidth={3} color={colors.primary} />
        </S.Indicator>
      </S.Root>
    </S.Wrapper>
  )
}