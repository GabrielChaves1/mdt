import * as S from './styles';

interface AvatarProps {
  image?: string
}

export default function Avatar({ image = 'https://rggames.com.br/wp-content/uploads/2015/10/trevor-phillips.jpg' }: AvatarProps) {
  return (
    <S.Wrapper>
      <S.Image src={image} loading='lazy' />
    </S.Wrapper>
  )
}