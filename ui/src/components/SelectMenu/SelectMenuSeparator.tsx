
import * as S from './styles';
import * as Select from '@radix-ui/react-select';

export default function SelectMenuSeparator({...props }: Select.SelectSeparatorProps) {
  return (
    <S.Separator {...props} />
  )
}