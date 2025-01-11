import axios from "axios";
import { Books, Error } from "../types";

export const getBooks = async (
  limit: number,
  page: number,
  genre: string,
  search: string
): Promise<{ data: Books[]; status: number } | Error> => {
  const res = await axios
    .get(
      `http://localhost:3001/api/getBooks?limit=${limit}&page=${page}&genre=${genre}&search=${search}`
    )
    .then((res) => {
      return res;
    });

  if (res.status === 200) {
    return { data: res.data, status: 200 };
  } else {
    return { error: "error fetching data", status: res.status };
  }
};

export const getGenre = async () => {
  const res = await axios
    .get(`http://localhost:3001/api/getGenre`)
    .then((res) => {
      return res;
    });

  if (res.status === 200) {
    return { data: res.data, status: 200 };
  } else {
    return { error: "error fetching data", status: res.status };
  }
};

export const getRowsCount = async (
  table: string,
  genre: string,
  search: string
) => {
  const res = await axios
    .get(
      `http://localhost:3001/api/count/${table}?genre=${genre}&search=${search}`
    )
    .then((res) => {
      return res;
    });

  if (res.status === 200) {
    return { data: res.data, status: 200 };
  } else {
    return { error: "error fetching data", status: res.status };
  }
};
