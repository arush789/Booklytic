"use client";
import React, { useState } from "react";
import { Books } from "../types";
import Image from "next/image";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, Skeleton, Typography } from "@mui/material";
import { Afacad_Flux } from "next/font/google";
import { useSession } from "next-auth/react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { updateBook } from "../api/api";
import fallBackImage from "../../public/Images/imageNotFound.jpg";

const afacad_Flux = Afacad_Flux({ subsets: ["latin"], weight: ["400"] });

const BookModal = ({
  selectedBook,
  setSelectedBook,
}: {
  selectedBook: Books;
  setSelectedBook: (book: Books | null) => void;
}) => {
  const { data: session } = useSession();
  const [editModal, setEditModal] = useState<boolean>(false);
  const [bookCopies, setBookCopies] = useState<number>(selectedBook.copies);
  const [bookAvailability, setBookAvailabilty] = useState<boolean>(
    selectedBook.is_available
  );
  const [imageLoaded, setImageLoaded] = useState("loading");
  console.log(bookAvailability);
  return (
    <div>
      <Dialog
        open={!!selectedBook}
        onClose={() => setSelectedBook(null)}
        aria-labelledby="book-modal-title"
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "20px",
            backgroundColor: "#ffffff",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
            overflow: "hidden",
          },
        }}
      >
        <DialogTitle
          id="book-modal-title"
          sx={{
            background: "linear-gradient(to right, #9cb486, #8EB486)",
            color: "#fff",
            fontFamily: afacad_Flux.style.fontFamily,
            textAlign: "center",
            fontSize: "1.8rem",
            padding: "6px 14px",
          }}
        >
          {selectedBook?.title || "Book Details"}
        </DialogTitle>

        <DialogContent
          sx={{
            padding: "24px",
            textAlign: "center",
          }}
        >
          <div className="flex justify-center mt-4">
            {imageLoaded === "loading" && (
              <Skeleton
                variant="rectangular"
                width={200}
                height={300}
                animation="wave"
                className="rounded-xl w-32 md:w-52"
              />
            )}

            <Image
              src={
                imageLoaded === "error"
                  ? fallBackImage
                  : `https://covers.openlibrary.org/b/isbn/${selectedBook.isbn}-L.jpg?default=false`
              }
              width={3000}
              height={3000}
              alt={selectedBook.title}
              onError={() => {
                setImageLoaded("error");
              }}
              loading="lazy"
              className="rounded-xl w-32 md:w-52"
              onLoad={() => setImageLoaded("loaded")}
            />
          </div>
          <p className="md:text-xl text-lg my-2">
            {selectedBook?.description || "No description available."}
          </p>
          <p className="md:text-xl text-lg my-2">
            <strong>Author:</strong> {selectedBook?.author || "Unknown"}
          </p>
          <p className="md:text-xl text-lg my-2">
            <strong>Genre:</strong> {selectedBook?.genre || "Unknown"}
          </p>
          <p className="md:text-xl text-lg my-2">
            <strong>Published:</strong> {selectedBook?.published_year || "N/A"}
          </p>
        </DialogContent>

        <DialogActions
          sx={{
            padding: "16px 24px",
            justifyContent: "center",
            backgroundColor: "#f5f5f5",
          }}
        >
          <Button
            variant="contained"
            fullWidth
            onClick={() => alert("Borrow functionality here")}
            sx={{
              borderRadius: "12px",
              textTransform: "none",
              letterSpacing: "2px",
              padding: "8px 0",
              fontFamily: afacad_Flux.style.fontFamily,
              fontSize: "1rem",
              boxShadow: "0 4px 12px #8EB486",
              "&:hover": {
                backgroundColor: "#115293",
              },
              backgroundColor: "#8EB486",
            }}
          >
            Borrow
          </Button>
          {session?.user?.role === "admin" && (
            <Button
              variant="outlined"
              sx={{
                borderRadius: "12px",
                textTransform: "none",
                padding: "8px 20px",
                fontSize: "1rem",
                color: "white",
                fontFamily: afacad_Flux.style.fontFamily,
                backgroundColor: "#115293",
              }}
              onClick={() => setEditModal(true)}
            >
              Edit
            </Button>
          )}
        </DialogActions>
      </Dialog>
      <Dialog
        open={editModal}
        onClose={() => setEditModal(false)}
        aria-labelledby="book-modal-title"
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "20px",
            backgroundColor: "#ffffff",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
            overflow: "hidden",
          },
        }}
      >
        <DialogContent
          sx={{
            padding: "24px",
            textAlign: "center",
          }}
        >
          <div className="flex flex-col items-start gap-3 ">
            <h1 className="text-xl font-bold">Copies</h1>
            <div className="bg-slate-300 flex rounded-full gap-x-4 ">
              <button
                className="bg-red-400 text-white p-2 rounded-full"
                onClick={() => {
                  if (bookCopies > 0) {
                    setBookCopies(bookCopies - 1);
                  }
                }}
              >
                <FaMinus />
              </button>
              <div className="flex items-center">
                <h1 className="text-xl">{bookCopies}</h1>
              </div>
              <button
                className="bg-green-600 text-white p-2 rounded-full"
                onClick={() => setBookCopies(bookCopies + 1)}
              >
                <FaPlus />
              </button>
            </div>
            <h1 className="text-xl font-bold">Issue status</h1>
            <label
              htmlFor="check"
              className={`${
                bookAvailability ? "bg-green-500" : "bg-red-500"
              } rounded-full w-16 h-8 relative transition-colors duration-300`}
            >
              <input
                type="checkbox"
                id="check"
                className="peer sr-only"
                checked={bookAvailability}
                onChange={() => setBookAvailabilty(!bookAvailability)}
              />
              <span className="left-1 top-[3px] bg-white w-2/5 h-4/5 absolute rounded-full peer-checked:left-[34px] transition-all duration-100"></span>
            </label>
            <div className="w-full mt-5">
              <button
                className="bg-green-600 text-white p-2 rounded-xl w-full"
                onClick={() =>
                  updateBook(selectedBook.id, bookCopies, bookAvailability)
                }
              >
                Save
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookModal;
