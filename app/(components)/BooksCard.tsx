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
  const [imageLoaded, setImageLoaded] = useState("loading");
  console.log(loading);
  return (
    <div
      key={book.id}
      className=" border border-gray-400 md:my-4 my-2 bg-white rounded-2xl relative group overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-xl"
      onMouseMove={(e) => handleMouseMove(e, book.id)}
      onMouseLeave={(e) => handleMouseLeave(e, book.id)}
      onClick={() => setSelectedBook(book)}
    >
      <div
        className="absolute inset-0 bg-slate-200 transform scale-0 rounded-2xl group-hover:scale-100 transition-transform duration-200"
        style={hoverStyles[book.id] || {}}
      ></div>

      <div className="relative z-10 h-72 flex gap-4">
        <div className="md:w-62  w-[50%] overflow-hidden">
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
            className="object-cover rounded-l-xl w-full h-full"
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
          <>
            <div className="flex flex-col gap-2 md:p-5 py-5  md:w-full w-[50%] ">
              <h2 className="text-black font-bold md:text-3xl text-xl ">
                {book.title}{" "}
                <span className="text-gray-400">({book.published_year})</span>
              </h2>
              <p className="text-gray-800 text-xl lg:block hidden">
                {book.description}
              </p>
              <p className="text-gray-800 text-xl">
                <strong>Author:</strong> {book.author}
              </p>
              <p className="text-gray-800 text-lg">
                <strong>Genre:</strong> {book.genre}
              </p>
              {book.is_available ? (
                <div className="absolute right-4 bottom-4 bg-green-600 px-2 rounded-lg w-32 flex justify-center">
                  <h1 className="text-lg">{book.copies} Available </h1>
                </div>
              ) : (
                <div className="absolute right-4 bottom-4 bg-red-400 px-2 rounded-lg w-36 flex justify-center">
                  <h1 className="text-lg"> Unavilable </h1>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BooksCard;
