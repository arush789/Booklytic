"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outfit, Afacad_Flux } from "next/font/google";
import { Books } from "../types";
import Link from "next/link";

const afacad_Flux = Afacad_Flux({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

const BooksPage = () => {
  const [books, setBooks] = useState<Books[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/getBooks").then((res) => {
      setBooks(res.data);
    });
  }, []);

  return (
    <div className={`${afacad_Flux.className}`}>
      <div className="md:grid md:grid-cols-3 flex flex-wrap md:gap-5 gap-2 md:px-12 px-5 justify-center">
        {books.length > 0 ? (
          books.map((book) => (
            <div
              key={book.id}
              className="p-4 border border-gray-200 md:my-4 my-2 bg-white rounded-2xl md:w-full w-80 relative group overflow-hidden hover:scale-105 transition-transform duration-500"
            >
              <div className="absolute inset-0 bg-[#8EB486] transform scale-0 rounded-2xl group-hover:scale-100 transition-transform duration-200 origin-bottom-left"></div>
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
                {/* <Link href={"#"} className="text-blue-600">
                  Read More..
                </Link> */}
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
