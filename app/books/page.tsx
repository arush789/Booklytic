"use client";
import { Afacad_Flux } from "next/font/google";
import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import BookModal from "../(components)/BookModal";
import BooksCard from "../(components)/BooksCard";
import Pagination from "../(components)/Pagination";
import { getBooks, getGenre, getRowsCount } from "../api/api";
import { Books } from "../types";
import Loading from "../(components)/Loading";

const afacad_Flux = Afacad_Flux({ subsets: ["latin"] });

const BooksPage = () => {
  const [books, setBooks] = useState<Books[]>([]);
  const [selectedBook, setSelectedBook] = useState<Books | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 9;
  const [maxPage, setMaxPage] = useState<number>(0);
  const [menu, setMenu] = useState<boolean>(false);
  const [genre, setGenre] = useState<{ genre: string }[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  const searchInputRef = useRef<string>("");
  const [searchTrigger, setSearchTrigger] = useState<boolean>(true);
  const [hoverStyles, setHoverStyles] = useState<{
    [key: number]: React.CSSProperties;
  }>({});
  const [loading, setLoading] = useState<boolean>(false);

  const menuToggle = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      const books = await getBooks(
        postsPerPage,
        currentPage,
        selectedFilter,
        searchInputRef.current
      );
      if (books.status === 200) {
        if ("data" in books) {
          setBooks(books.data as Books[]);
        }
      }
      setLoading(false);
    };

    const fecthRowsCount = async () => {
      const count = await getRowsCount(
        "books",
        selectedFilter,
        searchInputRef.current
      );
      if (count.status === 200) {
        setMaxPage(Math.ceil(count.data[0].count / postsPerPage));
      }
    };

    const fetchGenre = async () => {
      const genre = await getGenre();
      if (genre.status === 200) {
        setGenre(genre.data);
      }
    };

    fetchGenre();
    fetchBooks();
    fecthRowsCount();
  }, [currentPage, selectedFilter, searchTrigger]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    bookId: number
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setHoverStyles((prev) => ({
      ...prev,
      [bookId]: { transformOrigin: `${x}px ${y}px` },
    }));
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLDivElement>,
    bookId: number
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setHoverStyles((prev) => ({
      ...prev,
      [bookId]: { transformOrigin: `${x}px ${y}px` },
    }));
  };

  const handleSearch = async () => {
    setSearchTrigger(!searchTrigger);
  };

  return (
    <div className={`${afacad_Flux.className} `}>
      {selectedBook && (
        <BookModal
          selectedBook={selectedBook}
          setSelectedBook={setSelectedBook}
        />
      )}
      <div className="relative md:flex justify-between md:px-12 px-8 py-5 ">
        <div className="flex items-center mb-2 md:mb-0">
          <input
            placeholder="Search..."
            className="input shadow-lg px-5 py-3 rounded-xl w-56 transition-all focus:w-64 outline-none text-black mr-2"
            name="search"
            type="search"
            onChange={(e) => {
              searchInputRef.current = e.target.value;
            }}
            onKeyDown={(e) => {
              e.key === "Enter" && handleSearch();
            }}
          />
          {searchInputRef.current !== "" ? (
            <button
              className="shadow-lg px-5 py-4 rounded-xl outline-none text-black bg-red-400"
              onClick={() => {
                searchInputRef.current = "";
                handleSearch();
              }}
            >
              <RxCross2 />
            </button>
          ) : (
            <button
              className="shadow-lg px-5 py-4 rounded-xl outline-none text-black bg-white"
              onClick={() => {
                handleSearch();
              }}
            >
              <CiSearch />
            </button>
          )}
        </div>
        <div className="flex items-center">
          <button
            className="shadow-lg px-5 py-3 w-full md:w-auto rounded-xl outline-none text-black bg-white mr-2"
            onClick={menuToggle}
          >
            {selectedFilter !== "" ? (
              <h1>{selectedFilter}</h1>
            ) : (
              <h1>Filter</h1>
            )}
          </button>
          {selectedFilter !== "" && (
            <button
              className="shadow-lg px-5 py-4 rounded-xl outline-none text-black bg-red-400"
              onClick={() => {
                setSelectedFilter("");
                setMenu(false);
              }}
            >
              <RxCross2 />
            </button>
          )}
        </div>

        <div
          className={`absolute  md:top-16 md:right-10 z-50 mt-2 md:w-52 w-64 rounded-md bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none transition ease-out duration-100 ${
            menu
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <div className="py-1 " role="none">
            <div className="h-52 overflow-auto scrollbar overflow-x-hidden">
              {genre.map((genre) => (
                <button
                  className="block px-4 py-2 text-sm text-black"
                  key={genre.genre}
                  onClick={() => {
                    menuToggle();
                    setSelectedFilter(genre.genre);
                  }}
                >
                  <p key={genre.genre} className="text-lg text-black text-left">
                    {genre.genre}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        {loading ? (
          <div className="flex justify-center py-10">
            <Loading />
          </div>
        ) : books.length > 0 ? (
          <>
            <div className="flex justify-center">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-x-10 gap-2 md:px-12 px-5  z-1">
                {books.map((book) => (
                  <BooksCard
                    key={book.id}
                    book={book}
                    handleMouseMove={handleMouseMove}
                    handleMouseLeave={handleMouseLeave}
                    hoverStyles={hoverStyles}
                    setSelectedBook={setSelectedBook}
                    loading={loading}
                  />
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                maxPage={maxPage}
              />
            </div>
          </>
        ) : (
          <div className=" flex justify-center">
            <h1 className="text-2xl text-black">No Books Found</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default BooksPage;
