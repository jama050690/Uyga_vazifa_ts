import { FastifyInstance } from "fastify";
import { books, nextId } from "../../db/books";
import { bookBodySchema, bookParamsSchema, bookUpdateSchema } from "../schemas/book.schema";
import { BookBody, BookParams } from "../types/book.types";

let id = nextId;

export async function bookRoutes(fastify: FastifyInstance) {
  fastify.get("/books", async (_req, reply): Promise<unknown> => {
    return reply.send({ message: "Kitoblar ro'yxati", data: books });
  });

  fastify.get<{ Params: BookParams }>(
    "/books/:name",
    { schema: { params: bookParamsSchema } },
    async (req, reply): Promise<unknown> => {
      const book = books.find((b) => b.name === req.params.name);
      if (!book) return reply.code(404).send({ message: "Kitob topilmadi" });
      return reply.send({ message: "Kitob topildi", data: book });
    }
  );

  fastify.post<{ Body: BookBody }>(
    "/books",
    { schema: { body: bookBodySchema } },
    async (req, reply): Promise<unknown> => {
      const book = { id: id++, ...req.body };
      books.push(book);
      return reply.code(201).send({ message: "Kitob yaratildi", data: book });
    }
  );

  fastify.put<{ Params: BookParams; Body: BookBody }>(
    "/books/:name",
    { schema: { params: bookParamsSchema, body: bookBodySchema } },
    async (req, reply): Promise<unknown> => {
      const book = books.find((b) => b.name === req.params.name);
      if (!book) return reply.code(404).send({ message: "Kitob topilmadi" });
      Object.assign(book, req.body);
      return reply.code(200).send({ message: "Kitob yangilandi", data: book });
    }
  );

  fastify.patch<{ Params: BookParams; Body: Partial<BookBody> }>(
    "/books/:name",
    { schema: { params: bookParamsSchema, body: bookUpdateSchema } },
    async (req, reply): Promise<unknown> => {
      const book = books.find((b) => b.name === req.params.name);
      if (!book) return reply.code(404).send({ message: "Kitob topilmadi" });
      Object.assign(book, req.body);
      return reply.code(200).send({ message: "Kitob qisman yangilandi", data: book });
    }
  );

  fastify.delete<{ Params: BookParams }>(
    "/books/:name",
    { schema: { params: bookParamsSchema } },
    async (req, reply): Promise<unknown> => {
      const index = books.findIndex((b) => b.name === req.params.name);
      if (index === -1) return reply.code(404).send({ message: "Kitob topilmadi" });
      books.splice(index, 1);
      return reply.code(200).send({ message: "Kitob o'chirildi" });
    }
  );
}
