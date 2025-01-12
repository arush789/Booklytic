import React, { useEffect } from "react";
import { BooksCardProps } from "../types";
import Image from "next/image";
import axios from "axios";

const BooksCard: React.FC<BooksCardProps> = ({
  book,
  handleMouseLeave,
  handleMouseMove,
  hoverStyles,
  setSelectedBook,
}) => {
  return (
    <div
      key={book.id}
      className="md:p-4 border border-gray-200 md:my-4 my-2 bg-white rounded-2xl md:w-full w-80 relative group overflow-hidden transition-transform duration-500 hover:scale-105"
      onMouseMove={(e) => handleMouseMove(e, book.id)}
      onMouseLeave={(e) => handleMouseLeave(e, book.id)}
      onClick={() => setSelectedBook(book)}
    >
      <div
        className="absolute inset-0 bg-[#8EB486] transform scale-0 rounded-2xl group-hover:scale-100 transition-transform duration-200"
        style={hoverStyles[book.id] || {}}
      ></div>
      <div className="relative z-10 p-4 flex gap-4">
        <div className="w-42 h-48 overflow-hidden">
          <Image
            src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`}
            width={150}
            height={200}
            alt={book.title}
            loading="lazy"
            className="object-cover rounded-2xl w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-black font-bold text-2xl">{book.title}</h2>
          <p className="text-gray-800 text-xl">
            <strong>Author:</strong> {book.author}
          </p>
          <p className="text-gray-800 text-lg">
            <strong>Genre:</strong> {book.genre}
          </p>
          <p className="text-gray-800 text-lg">
            <strong>Published Year:</strong> {book.published_year}
          </p>
          <p className="text-gray-800 text-lg md:block hidden">
            <strong>Description:</strong> {book.description}
          </p>
          {/* <div className="mt-4">
          <button className="bg-black text-white w-full py-2 rounded-2xl">
          Issue
          </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
