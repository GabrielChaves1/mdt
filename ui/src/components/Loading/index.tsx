import { Loader } from 'lucide-react';
import * as S from './styles';
import { useTheme } from 'styled-components';

export default function Loading() {
  const { colors } = useTheme();

  return (
    <S.Wrapper>
      <Loader size={'2.5rem'} color={colors.icon}/>
      Carregando Conteúdo...
    </S.Wrapper>
  )
}