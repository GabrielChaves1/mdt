import { useState } from "react"

export default function usePaginate<T>(itemsPerPage: number, initialPage = 1, items: T[]) {
  const [currentPage, setCurrentPage] = useState(initialPage)
  const paginate = (page: number) => setCurrentPage(page)
  
  const amountOfPages = Math.ceil(items.length / itemsPerPage);
  const totalOfItems = items.length;
  const slicedItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const viewedItems = (itemsPerPage * currentPage) - (itemsPerPage - slicedItems.length);

  return { paginate, currentPage, amountOfPages, viewedItems, totalOfItems, items: slicedItems }
}
