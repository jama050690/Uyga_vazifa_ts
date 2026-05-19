import { BookItem } from "../../db";

export interface Library {
  id: number;
  name: string;
  address: string;
  booksCount: number;
  books: BookItem[];
  isOpen: boolean;
}

export interface CreateLibraryBody {
  name: string;
  address: string;
  books?: BookItem[];
  isOpen?: boolean;
}

export interface UpdateLibraryBody {
  name?: string;
  address?: string;
  books?: BookItem[];
  isOpen?: boolean;
}

export interface LibraryParams {
  id: number;
}
