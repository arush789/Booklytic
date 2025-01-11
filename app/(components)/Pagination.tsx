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

  return (
    <div className="flex gap-2 justify-center mt-4">
      <button onClick={handlePageMinus} className="text-primary">
        <IoIosArrowBack />
      </button>
      <h1 className="px-4 py-2 bg-primary rounded-full ">{currentPage}</h1>
      <button onClick={handlePagePlus} className="text-primary">
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Pagination;
