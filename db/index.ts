export interface BookItem {
  name: string;
  author: string;
  genre: string;
  pages: number;
}

export const libraryBooks: Record<number, BookItem[]> = {
  1: [
    {
      name: "O'tkan kunlar",
      author: "Abdulla Qodiriy",
      genre: "Roman",
      pages: 320
    },
    {
      name: "Mehrobdan chayon",
      author: "Abdulla Qodiriy",
      genre: "Roman",
      pages: 280
    }
  ],
  2: [
    {
      name: "Harry Potter",
      author: "J. K. Rowling",
      genre: "Fantasy",
      pages: 410
    },
    {
      name: "Atomic Habits",
      author: "James Clear",
      genre: "Self-help",
      pages: 300
    }
  ]
};
