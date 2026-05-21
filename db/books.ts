import { Book } from "../src/types/book.types";

export const books: Book[] = [
  { id: 1, name: "O'tkan kunlar", author: "Abdulla Qodiriy", genre: "Roman", pages: 320 },
  { id: 2, name: "Harry Potter", author: "J. K. Rowling", genre: "Fantasy", pages: 410 },
  { id: 3, name: "Atomic Habits", author: "James Clear", genre: "Self-help", pages: 300 }
];

export let nextId = books.length + 1;
