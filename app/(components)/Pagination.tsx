import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  maxPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  setCurrentPage,
  maxPage,
}) => {
  const handlePagePlus = () => {
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageMinus = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const getPageRange = (pageNumber: number) => {
    return pageNumber >= 1 && pageNumber <= maxPage ? pageNumber : null;
  };

  return (
    <div className="flex gap-2 justify-center pb-10 pt-4">
      <button
        onClick={handlePageMinus}
        className="text-primary"
        disabled={currentPage === 1}
      >
        <IoIosArrowBack />
      </button>
      {getPageRange(currentPage - 2) && (
        <button
          className={` bg-primary opacity-50 text-white px-4 py-2 rounded-full`}
          onClick={() => handlePage(currentPage - 2)}
        >
          {currentPage - 2}
        </button>
      )}
      {getPageRange(currentPage - 1) && (
        <button
          className={` bg-primary opacity-50 text-white px-4 py-2 rounded-full`}
          onClick={() => handlePage(currentPage - 1)}
        >
          {currentPage - 1}
        </button>
      )}
      <h1 className={` bg-primary  text-white px-4 py-2 rounded-full`}>
        {currentPage}
      </h1>
      {getPageRange(currentPage + 1) && (
        <button
          className={` bg-primary opacity-50 text-white px-4 py-2 rounded-full`}
          onClick={() => handlePage(currentPage + 1)}
        >
          {currentPage + 1}
        </button>
      )}
      {getPageRange(currentPage + 2) && (
        <button
          className={` bg-primary opacity-50 text-white px-4 py-2 rounded-full`}
          onClick={() => handlePage(currentPage + 2)}
        >
          {currentPage + 2}
        </button>
      )}
      <button
        onClick={handlePagePlus}
        className="text-primary"
        disabled={currentPage === maxPage}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Pagination;
