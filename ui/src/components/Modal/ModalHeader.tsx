import * as S from './styles';

interface ModalHeaderProps {
  title: string
  subtitle?: string
  hasSeparator?: boolean
}

export default function ModalHeader({ title, subtitle, hasSeparator = false }: ModalHeaderProps) {
  return (
    <S.Header>
      <S.TitleArea>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.TitleArea>
      {hasSeparator && (
        <S.Separator />
      )}
    </S.Header>
  )
}