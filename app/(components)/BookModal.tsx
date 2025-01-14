import React from "react";
import { Books } from "../types";
import Image from "next/image";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, Typography } from "@mui/material";
import { Afacad_Flux } from "next/font/google";

const afacad_Flux = Afacad_Flux({ subsets: ["latin"], weight: ["400"] });

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
            padding: "16px 24px",
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
            <Image
              src={`https://covers.openlibrary.org/b/isbn/${selectedBook?.isbn}-L.jpg`}
              width={150}
              height={200}
              alt={selectedBook?.title}
              loading="lazy"
              style={{
                borderRadius: "12px",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
                marginBottom: "16px",
              }}
            />
          </div>
          <Typography
            variant="body2"
            sx={{
              fontFamily: afacad_Flux.style.fontFamily,
              fontSize: "1.5rem",
              color: "#555",
              marginBottom: "16px",
              lineHeight: "1.6",
            }}
          >
            {/* <strong>Description:</strong>{" "} */}
            {selectedBook?.description || "No description available."}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: afacad_Flux.style.fontFamily,
              fontSize: "1.5rem",
              color: "#333",
              marginBottom: "8px",
            }}
          >
            <strong>Author:</strong> {selectedBook?.author || "Unknown"}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: afacad_Flux.style.fontFamily,
              fontSize: "1.5rem",
              color: "#333",
              marginBottom: "8px",
            }}
          >
            <strong>Genre:</strong> {selectedBook?.genre || "Unknown"}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: afacad_Flux.style.fontFamily,
              fontSize: "1.5rem",
              color: "#333",
              marginBottom: "8px",
            }}
          >
            <strong>Published:</strong> {selectedBook?.published_year || "N/A"}
          </Typography>
        </DialogContent>

        <DialogActions
          sx={{
            padding: "16px 24px",
            justifyContent: "center",
            backgroundColor: "#f5f5f5",
          }}
        >
          {/* <Button
            variant="outlined"
            onClick={() => setSelectedBook(null)}
            sx={{
              borderRadius: "12px",
              textTransform: "none",
              padding: "8px 20px",
              fontSize: "1rem",
              fontFamily: afacad_Flux.style.fontFamily,

              "&:hover": {
                backgroundColor: "#e0e0e0",
              },
            }}
          >
            Close
          </Button> */}
          <Button
            variant="contained"
            fullWidth // Makes the button span the full width
            onClick={() => alert("Borrow functionality here")}
            sx={{
              borderRadius: "12px",
              textTransform: "none",
              padding: "12px 0", // Adjust padding for a taller button
              fontFamily: afacad_Flux.style.fontFamily,
              fontSize: "1rem",
              fontWeight: 600,
              boxShadow: "0 4px 12px #8EB486",
              "&:hover": {
                backgroundColor: "#115293",
              },
              backgroundColor: "#8EB486",
            }}
          >
            Borrow
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default BookModal;
