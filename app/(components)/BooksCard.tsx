import React from "react";
import { BooksCardProps } from "../types";

const BooksCard: React.FC<BooksCardProps> = ({
  book,
  handleMouseLeave,
  handleMouseMove,
  hoverStyles,
}) => {
  return (
    <div
      key={book.id}
      className="p-4 border border-gray-200 md:my-4 my-2 bg-white rounded-2xl md:w-full w-80 relative group overflow-hidden transition-transform duration-500"
      onMouseMove={(e) => handleMouseMove(e, book.id)}
      onMouseLeave={() => handleMouseLeave(book.id)}
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
  );
};

export default BooksCard;
