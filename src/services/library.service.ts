import { libraryBooks } from "../../db";
import {
  CreateLibraryBody,
  Library,
  UpdateLibraryBody
} from "../compliments/library.types";

const libraries: Library[] = [
  {
    id: 1,
    name: "Alisher Navoiy Kutubxonasi",
    address: "Toshkent, Chilonzor tumani",
    books: libraryBooks[1],
    booksCount: libraryBooks[1].length,
    isOpen: true
  },
  {
    id: 2,
    name: "Yoshlar Kutubxonasi",
    address: "Samarqand, Registon ko'chasi",
    books: libraryBooks[2],
    booksCount: libraryBooks[2].length,
    isOpen: false
  }
];

let nextId = libraries.length + 1;

export const libraryService = {
  getAll(): Library[] {
    return libraries;
  },

  getByName(name: string): Library | undefined {
    return libraries.find((library) => library.name === name);
  },

  create(payload: CreateLibraryBody): Library {
    const books = payload.books ?? [];
    const library: Library = {
      id: nextId++,
      name: payload.name,
      address: payload.address,
      books,
      booksCount: books.length,
      isOpen: payload.isOpen ?? true
    };

    libraries.push(library);
    return library;
  },

  update(name: string, payload: UpdateLibraryBody): Library | undefined {
    const library = libraries.find((item) => item.name === name);

    if (!library) {
      return undefined;
    }

    if (payload.name !== undefined) {
      library.name = payload.name;
    }

    if (payload.address !== undefined) {
      library.address = payload.address;
    }

    if (payload.isOpen !== undefined) {
      library.isOpen = payload.isOpen;
    }

    if (payload.books !== undefined) {
      library.books = payload.books;
      library.booksCount = payload.books.length;
    }

    return library;
  },

  remove(name: string): boolean {
    const index = libraries.findIndex((library) => library.name === name);

    if (index === -1) {
      return false;
    }

    libraries.splice(index, 1);
    return true;
  }
};
