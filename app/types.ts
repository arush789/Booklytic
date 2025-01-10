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
