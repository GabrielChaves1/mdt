import usePaginate from '@/hooks/usePaginate';
import * as S from './styles';
import ICourse from '@/types/Course';
import Course from '../../components/Course';
import Pagination from '@/components/Pagination';
import Banner from '@/components/Banner';
import CourseIcon from '@/assets/book.webp';

export default function CourseList() {
  const itemsPerPage = 12
  const { amountOfPages, currentPage, items, totalOfItems, viewedItems, paginate } = usePaginate<ICourse>(itemsPerPage, 1, [
    {
      id: 1,
      title: "Curso de Armamento",
      date: Date.now(),
      timeToComplete: 30
    },
    {
      id: 2,
      title: "Curso Tático",
      date: Date.now(),
      timeToComplete: 30
    },
    {
      id: 3,
      title: "Curso de Desce e Quebra",
      date: Date.now(),
      timeToComplete: 30
    },
    {
      id: 4,
      title: "Curso de Rolamento",
      date: Date.now(),
      timeToComplete: 30
    },
    {
      id: 5,
      title: "Curso de Investigação",
      date: Date.now(),
      timeToComplete: 30
    },
  ])

  return (
    <S.Content>
      <Banner.Root icon={CourseIcon}>
        <Banner.Header>
          <Banner.Title>Cursos Disponíveis</Banner.Title>
        </Banner.Header>
      </Banner.Root>

      <S.Grid>
        {items?.map((course) => (
          <Course key={course.id} {...course} />
        ))}

        {[...new Array(itemsPerPage - items.length)].map((_, i) => <S.EmptySlot key={i}/>)}
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