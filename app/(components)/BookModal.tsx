import React from "react";
import { Books } from "../types";
import Image from "next/image";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";

const BookModal = ({
  selectedBook,
  setSelectedBook,
}: {
  selectedBook: Books;
  setSelectedBook: (book: Books | null) => void;
}) => {
  return (
    <div>
      <Dialog
        open={selectedBook !== null}
        onClose={
          selectedBook === null ? undefined : () => setSelectedBook(null)
        }
        aria-labelledby="responsive-dialog-title"
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "20px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <DialogContent>
          <div className="w-full justify-center flex ">
            <Image
              src={`https://covers.openlibrary.org/b/isbn/${selectedBook.isbn}-L.jpg`}
              width={150}
              height={200}
              alt={selectedBook.title}
              loading="lazy"
              className="rounded-xl"
            />
          </div>
        </DialogContent>
        <DialogTitle
          id="responsive-dialog-title"
          sx={{
            fontSize: "2rem",
            fontWeight: 600,
            textAlign: "center",
            color: "#333",
            paddingBottom: 2,
          }}
        >
          {selectedBook ? selectedBook.title : "Book Information"}
        </DialogTitle>

        <DialogContent>
          <DialogContentText
            sx={{
              fontSize: "1.1rem",
              color: "#555",
              lineHeight: 1.6,
            }}
          >
            <strong>Author:</strong> {selectedBook?.author}
          </DialogContentText>
          <DialogContentText
            sx={{
              fontSize: "1.1rem",
              color: "#555",
              lineHeight: 1.6,
            }}
          >
            <strong>Genre:</strong> {selectedBook?.genre}
          </DialogContentText>
          <DialogContentText
            sx={{
              fontSize: "1.1rem",
              color: "#555",
              lineHeight: 1.6,
            }}
          >
            <strong>Published Year:</strong> {selectedBook?.published_year}
          </DialogContentText>

          <DialogContentText
            sx={{
              fontSize: "1rem",
              color: "#777",
              marginTop: 2,
              lineHeight: 1.6,
            }}
          >
            <strong>Description:</strong> {selectedBook?.description}
          </DialogContentText>

          <DialogContentText
            sx={{
              fontSize: "1.1rem",
              color: "#555",
              lineHeight: 1.6,
              marginTop: 3,
            }}
          >
            <strong>Copies Available:</strong> {selectedBook?.copies}
          </DialogContentText>
        </DialogContent>

        <DialogActions
          sx={{ padding: "16px 24px", justifyContent: "space-between" }}
        >
          <Button
            variant="outlined"
            color="error"
            onClick={() => setSelectedBook(null)}
            sx={{
              borderRadius: "12px",
              textTransform: "none",
              padding: "8px 20px",
              fontWeight: 600,
              fontSize: "1rem",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            Close
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => alert("Borrow functionality here")}
            sx={{
              borderRadius: "12px",
              textTransform: "none",
              padding: "8px 20px",
              fontWeight: 600,
              fontSize: "1rem",
              "&:hover": {
                backgroundColor: "#1976d2",
              },
            }}
          >
            Borrow
          </Button>
        </DialogActions>
      </Dialog>
      {/* <div className="w-full justify-center flex mb-6">
        <Image
          src={`https://covers.openlibrary.org/b/isbn/${selectedBook.isbn}-L.jpg`}
          width={150}
          height={200}
          alt={selectedBook.title}
          loading="lazy"
          className="rounded-xl"
        />
      </div>
      <div className="text-center mb-6">
        <h1 className="text-4xl font-semibold text-gray-800">
          {selectedBook.title}
        </h1>
        <p className="text-xl text-gray-600 mt-2">
          <strong className="font-medium">Author:</strong> {selectedBook.author}
        </p>
        <p className="text-xl text-gray-600">
          <strong className="font-medium">Genre:</strong> {selectedBook.genre}
        </p>
        <p className="text-xl text-gray-600">
          <strong className="font-medium">Published Year:</strong>{" "}
          {selectedBook.published_year}
        </p>
      </div>
      <div className="mb-6">
        <p className="text-gray-600">
          <strong className="font-medium">Description:</strong>{" "}
          {selectedBook.description}
        </p>
      </div>
      <div className=" absolute top-4 left-4 p-2 rounded-xl bg-green-200 text-white">
        <h2 className="text-xl text-gray-800">
          <strong className="font-medium">Available : </strong>{" "}
          {selectedBook.copies}
        </h2>
      </div>
      <div className="flex gap-6 mt-8">
        <button
          className="bg-gray-300 text-gray-800 py-3 px-6 rounded-xl w-full hover:bg-gray-400 transition-all duration-300 transform hover:scale-105"
          onClick={() => setSelectedBook(null)}
        >
          Close
        </button>
        <button className="bg-blue-600 text-white py-3 px-6 rounded-xl w-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
          Borrow
        </button>
      </div> */}
    </div>
  );
};

export default BookModal;
