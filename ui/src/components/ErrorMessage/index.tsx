import { ShieldAlert } from 'lucide-react';
import * as S from './styles';
import { useTheme } from 'styled-components';

interface ErrorMessageProps {
  message: string
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  const { colors } = useTheme();
  
  return (
    <S.Message>
      <ShieldAlert size={'1.6rem'} color={colors.error} />
      {message}
    </S.Message>
  )
}