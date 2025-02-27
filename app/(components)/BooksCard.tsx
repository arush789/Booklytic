"use client";
import { Skeleton } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import fallBackImage from "../../public/Images/imageNotFound.jpg";
import { BooksCardProps } from "../types";

const BooksCard: React.FC<BooksCardProps> = ({
  book,
  handleMouseLeave,
  handleMouseMove,
  hoverStyles,
  setSelectedBook,
  loading,
}) => {
  const [imageLoaded, setImageLoaded] = useState<
    "loading" | "loaded" | "error"
  >("loading");

  return (
    <div
      key={book.id}
      className="relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
      onMouseMove={(e) => handleMouseMove(e, book.id)}
      onMouseLeave={(e) => handleMouseLeave(e, book.id)}
      onClick={() => setSelectedBook(book)}
    >
      {/* Stacking Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

      {/* Image Container */}
      <div className="relative w-full h-80 overflow-hidden">
        {imageLoaded === "loading" && (
          <Skeleton
            variant="rectangular"
            width="100%"
            height="100%"
            animation="wave"
            className="rounded-2xl"
          />
        )}
        <Image
          src={
            imageLoaded === "error"
              ? fallBackImage
              : `https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg?default=false`
          }
          fill
          alt={book.title}
          onError={() => setImageLoaded("error")}
          loading="lazy"
          className={`object-cover`}
          onLoad={() => setImageLoaded("loaded")}
        />
      </div>

      <div className="p-5 bg-white">
        {loading ? (
          <div className="flex flex-col gap-2">
            <Skeleton variant="text" width="80%" height={30} animation="wave" />
            <Skeleton variant="text" width="60%" height={25} animation="wave" />
            <Skeleton variant="text" width="70%" height={25} animation="wave" />
            <Skeleton variant="text" width="50%" height={20} animation="wave" />
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-gray-900 truncate hover:text-clip hover:whitespace-normal">
              {book.title}
            </h2>
            <p className="text-gray-600 text-sm font-medium mt-1">
              {book.author}
            </p>
            <p className="text-gray-500 text-sm mt-1">{book.published_year}</p>
          </>
        )}
      </div>

      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

      {book.is_available ? (
        <div className=" absolute bottom-4 right-4 bg-gradient-to-br from-green-600 to-green-300 text-white px-4 py-2 rounded-full text-sm font-semibold  transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
          <h1 className="text-lg">{book.copies} Available </h1>
        </div>
      ) : (
        <div className=" absolute bottom-4 right-4 bg-gradient-to-br from-red-600 to-red-300 text-white px-4 py-2 rounded-full text-sm font-semibold  transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
          <h1 className="text-lg"> Unavilable </h1>
        </div>
      )}
    </div>
  );
};

export default BooksCard;
