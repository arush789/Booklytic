"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Afacad_Flux } from "next/font/google";
import { Books } from "../types";

const afacad_Flux = Afacad_Flux({ subsets: ["latin"] });

const BooksPage = () => {
  const [books, setBooks] = useState<Books[]>([]);
  const [hoverStyles, setHoverStyles] = useState<{
    [key: number]: React.CSSProperties;
  }>({});

  useEffect(() => {
    axios.get("http://localhost:3001/api/getBooks").then((res) => {
      setBooks(res.data);
    });
  }, []);

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

  return (
    <div className={`${afacad_Flux.className}`}>
      <div className="relative flex  justify-between px-12 py-5">
        <input
          placeholder="Search..."
          className="input shadow-lg focus:border-2 border-gray-300 px-5 py-3 rounded-xl w-56 transition-all focus:w-64 outline-none text-black"
          name="search"
          type="search"
        />
        <button className="shadow-lg px-5 py-3 rounded-xl outline-none text-black bg-white ">
          <h1>Filter</h1>
        </button>
      </div>
      <div className="md:grid md:grid-cols-3 flex flex-wrap md:gap-5 gap-2 md:px-12 px-5 justify-center">
        {books.length > 0 ? (
          books.map((book) => (
            <div
              key={book.id}
              className="p-4 border border-gray-200 md:my-4 my-2 bg-white rounded-2xl md:w-full w-80 relative group overflow-hidden  transition-transform duration-500"
              onMouseMove={(e) => handleMouseMove(e, book.id)}
              onMouseLeave={(e) => handleMouseLeave(e, book.id)}
            >
              <div
                className="absolute inset-0 bg-[#8EB486] transform scale-0 rounded-2xl group-hover:scale-100 transition-transform duration-200"
                style={hoverStyles[book.id] || {}}
              ></div>
              <div className="relative z-10 p-4">
                <h2 className="text-black font-bold text-2xl">{book.title}</h2>
                <p className="text-gray-800 text-md">
                  <strong>Author:</strong> {book.author}
                </p>
                <p className="text-gray-800 text-md">
                  <strong>Genre:</strong> {book.genre}
                </p>
                <p className="text-gray-800 text-md">
                  <strong>Published Year:</strong> {book.published_year}
                </p>
                <p className="text-gray-800 text-md">
                  <strong>Description:</strong> {book.description}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading books...</p>
        )}
      </div>
    </div>
  );
};

export default BooksPage;
