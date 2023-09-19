import * as S from './styles';

interface ModalHeaderProps {
  title: string
  subtitle?: string
}

export default function ModalHeader({ title, subtitle }: ModalHeaderProps) {
  return (
    <S.Header>
      <S.TitleArea>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.TitleArea>
    </S.Header>
  )
}