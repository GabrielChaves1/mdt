import usePaginate from '@/hooks/usePaginate';
import * as S from './styles';
import ICourse from '@/types/Course';
import Course from '../../components/Course';
import Pagination from '@/components/Pagination';
import Banner from '@/components/Banner';

export default function CourseList() {
  const itemsPerPage = 12
  const { amountOfPages, currentPage, items, totalOfItems, viewedItems, paginate } = usePaginate<ICourse>(itemsPerPage, 1, [
    {
      id: 1,
      title: "Curso de Armamento",
      date: Date.now(),
      timeToComplete: 30
    },
  ])

  return (
    <S.Content>
      <Banner.Root>
        <Banner.Header>
          <Banner.Title>Cursos Disponíveis</Banner.Title>
        </Banner.Header>
      </Banner.Root>

      <S.Grid>
        {items?.map((course) => (
          <Course key={course.id} {...course} />
        ))}

        {[...new Array(itemsPerPage - items.length)].map(() => <S.EmptySlot />)}
      </S.Grid>
      <Pagination
        amountOfPages={amountOfPages}
        currentPage={currentPage}
        itemsBeingViewed={viewedItems}
        onPaginate={(page: number) => paginate(page)}
        totalOfItems={totalOfItems}
      />
    </S.Content>
  )
}