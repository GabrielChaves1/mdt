import usePaginate from '@/hooks/usePaginate';
import * as S from './styles';
import ICourse from '@/types/Course';
import Course from '../../components/Course';
import Pagination from '@/components/Pagination';
import Banner from '@/components/Banner';
import CourseIcon from '@/assets/book.webp';
import Animator from '@/components/Animator';
import { useQuery } from '@tanstack/react-query';
import fetchNui from '@/utils/fetchNui';
import Loading from '@/components/Loading';

const itemsPerPage = 12

export default function CourseList() {
  const { data: courses, isLoading } = useQuery<ICourse[]>(['courses'], () => fetchNui('getCourses'), {
    initialData: [
      {
        org: {
          name: "Policia Civil",
        },
        id: 1,
        title: "teste",
        date: 1610322102,
        timeToComplete: 2
      },
    ]
  })
  const { amountOfPages, currentPage, items, totalOfItems, viewedItems, paginate } = usePaginate<ICourse>(itemsPerPage, 1, courses || [])

  return (
    <Animator>
      <S.Content>
        <Banner.Root icon={CourseIcon}>
          <Banner.Header>
            <Banner.Title>Cursos Disponíveis</Banner.Title>
          </Banner.Header>
        </Banner.Root>

        {isLoading ? <Loading /> :
          (
            <>
              <S.Grid>
                {items?.map((course, i) => (
                  <Course key={i} {...course} />
                ))}

                {[...new Array(itemsPerPage - items.length)].map((_, i) => <S.EmptySlot key={i} />)}
              </S.Grid>
              <Pagination
                amountOfPages={amountOfPages}
                currentPage={currentPage}
                itemsBeingViewed={viewedItems}
                onPaginate={(page: number) => paginate(page)}
                totalOfItems={totalOfItems}
              />
            </>
          )}
      </S.Content>
    </Animator>
  )
}