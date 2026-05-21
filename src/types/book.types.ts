export interface Book {
  id: number;
  name: string;
  author: string;
  genre: string;
  pages: number;
}

export interface BookBody {
  name: string;
  author: string;
  genre: string;
  pages: number;
}

export interface BookParams {
  name: string;
}
