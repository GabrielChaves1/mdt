import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as S from './styles';
import { useTheme } from 'styled-components';

interface PaginationProps {
  currentPage: number,
  amountOfPages: number,
  itemsBeingViewed: number,
  totalOfItems: number,
  onPaginate: (page: number) => void
}

export default function Pagination({ totalOfItems, currentPage, itemsBeingViewed, amountOfPages, onPaginate }: PaginationProps) {
  const { colors } = useTheme();

  return (
    <S.Wrapper>
      <S.Text>Mostrando {itemsBeingViewed} de {totalOfItems} registros</S.Text>
      <S.PaginationContainer>
        <S.NavigateButton disabled={currentPage <= 1} onClick={() => onPaginate(currentPage - 1)}>
          <ChevronLeft size={'1.6rem'} color={colors.icon} />
        </S.NavigateButton>
        <S.Pages>
          {[...new Array(amountOfPages)]?.map((_, i) => (
            <S.Page key={i} onClick={() => {
              onPaginate(i + 1)
            }} enabled={currentPage === (i + 1)}>{i + 1}</S.Page>
          ))}
        </S.Pages>
        <S.NavigateButton disabled={currentPage >= amountOfPages} onClick={() => onPaginate(currentPage + 1)}>
          <ChevronRight size={'1.6rem'} color={colors.icon} />
        </S.NavigateButton>
      </S.PaginationContainer>
    </S.Wrapper>
  )
}