import { libraryBooks } from "../../db/index.js";
import {
  CreateLibraryBody,
  Library,
  UpdateLibraryBody
} from "../compliments/library.types.js";

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

  getById(id: number): Library | undefined {
    return libraries.find((library) => library.id === id);
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

  update(id: number, payload: UpdateLibraryBody): Library | undefined {
    const library = libraries.find((item) => item.id === id);

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

  remove(id: number): boolean {
    const index = libraries.findIndex((library) => library.id === id);

    if (index === -1) {
      return false;
    }

    libraries.splice(index, 1);
    return true;
  }
};
