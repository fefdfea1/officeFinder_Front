import React, { useEffect, useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { pageClickEvent } from "../../Business/PageNation/pageClickEvent";

type PaginationProps = {
  itemsPerPage: number;
  totalItems: number;
  setPageState: React.Dispatch<React.SetStateAction<number>>;
};

export const Pagination: React.FC<PaginationProps> = ({ itemsPerPage, totalItems, setPageState }) => {
  useEffect(() => {
    window.addEventListener("click", event => pageClickEvent(event, setPageState));

    return () => window.removeEventListener("click", event => pageClickEvent(event, setPageState));
  }, []);

  //itemsPerPage : 페이지 당 보여줄 아이템의 갯수 , totalItems : 총 아이템 수

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  if (!totalPages) {
    return null;
  }

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const getPageGroup = () => {
    const pageGroup = Math.ceil(currentPage / 5);
    return pageGroup;
  };

  const firstPageIndex = (getPageGroup() - 1) * 5 + 1;
  const lastPageIndex = Math.min(getPageGroup() * 5, totalPages);

  const isFirstGroup = getPageGroup() === 1;
  const isLastGroup = getPageGroup() === Math.ceil(totalPages / 5);

  return (
    <div className="flex justify-center Pagination">
      <button
        className={`btn btn-sm btn-ghost btn-circle ${isFirstGroup ? "hidden" : ""}`}
        onClick={() => handlePageChange(firstPageIndex - 1)}
      >
        <MdNavigateBefore className="text-xl" />
      </button>
      {[...Array(lastPageIndex - firstPageIndex + 1)].map((_, index) => {
        const pageNumber = firstPageIndex + index;
        return (
          <button
            key={pageNumber}
            className={`btn btn-sm btn-ghost btn-circle hover:btn-secondary ${
              pageNumber === currentPage ? "active" : ""
            } PaginationNum`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}
      <button
        className={`btn btn-sm btn-ghost btn-circle  ${isLastGroup ? "hidden" : ""}`}
        onClick={() => handlePageChange(lastPageIndex + 1)}
      >
        <MdNavigateNext className="text-xl" />
      </button>
    </div>
  );
};
