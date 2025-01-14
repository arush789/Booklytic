"use client";
import React, { useEffect, useState } from "react";
import { BooksCardProps } from "../types";
import Image from "next/image";
import axios from "axios";
import fallBackImage from "../../public/Images/imageNotFound.jpg";
import { Skeleton } from "@mui/material";

const BooksCard: React.FC<BooksCardProps> = ({
  book,
  handleMouseLeave,
  handleMouseMove,
  hoverStyles,
  setSelectedBook,
  loading,
}) => {
  const [imageLoaded, setImageLoaded] = useState("loading");
  console.log(loading);
  return (
    <div
      key={book.id}
      className="md:p-4 border border-gray-200 md:my-4 my-2 bg-white rounded-2xl relative group overflow-hidden transition-transform duration-500 hover:scale-105"
      onMouseMove={(e) => handleMouseMove(e, book.id)}
      onMouseLeave={(e) => handleMouseLeave(e, book.id)}
      onClick={() => setSelectedBook(book)}
    >
      <div
        className="absolute inset-0 bg-[#8EB486] transform scale-0 rounded-2xl group-hover:scale-100 transition-transform duration-200"
        style={hoverStyles[book.id] || {}}
      ></div>
      <div className="relative z-10 p-4 flex gap-4">
        <div className="md:w-52 md:h-72 w-32 h-40 overflow-hidden">
          {imageLoaded === "loading" && (
            <Skeleton
              variant="rectangular"
              width={150}
              height={200}
              animation="wave"
              className="rounded-md"
            />
          )}
          <Image
            src={
              imageLoaded === "error"
                ? fallBackImage
                : `https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg?default=false`
            }
            width={150}
            height={200}
            alt={book.title}
            onError={() => {
              setImageLoaded("error");
            }}
            loading="lazy"
            className="object-cover rounded-2xl w-full h-full"
            onLoad={() => setImageLoaded("loaded")}
          />
        </div>
        {loading ? (
          <div className="flex flex-col gap-2 w-full">
            <Skeleton variant="text" width="80%" height={30} animation="wave" />
            <Skeleton variant="text" width="60%" height={25} animation="wave" />
            <Skeleton variant="text" width="70%" height={25} animation="wave" />
            <Skeleton variant="text" width="50%" height={20} animation="wave" />
            <Skeleton
              variant="text"
              width="100%"
              height={80}
              animation="wave"
              className="md:block hidden"
            />
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <h2 className="text-black font-bold md:text-3xl text-2xl ">
              {book.title}{" "}
              <span className="text-gray-300">({book.published_year})</span>
            </h2>
            <p className="text-gray-800 text-xl md:block hidden">
              {book.description}
            </p>
            <p className="text-gray-800 text-xl">
              <strong>Author:</strong> {book.author}
            </p>
            <p className="text-gray-800 text-lg">
              <strong>Genre:</strong> {book.genre}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BooksCard;
