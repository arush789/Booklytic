export type UserType = {
  email: string;
  name: string;
  role: "member" | "admin";
};

export type Books = {
  author: string;
  copies: number;
  description: string;
  genre: string;
  id: number;
  is_available: boolean;
  isbn: string;
  published_year: number;
  title: string;
};

export type BooksCardProps = {
  book: Books;
  handleMouseLeave: (bookId: number) => void;
  handleMouseMove: (
    e: React.MouseEvent<HTMLDivElement>,
    bookId: number
  ) => void;
  hoverStyles: {
    [key: number]: React.CSSProperties;
  };
};

export type AdminDataProps = {
  children: React.ReactNode;
};

export type Error = {
  error: string;
  status: number;
};
