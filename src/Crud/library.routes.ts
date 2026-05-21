import { FastifyInstance } from "fastify";
import {
  libraryParamsSchema,
  librarySchema,
  libraryUpdateSchema
} from "../compliments/library.schema";
import {
  CreateLibraryBody,
  LibraryParams,
  UpdateLibraryBody
} from "../compliments/library.types";
import { libraryService } from "../services/library.service";

export async function libraryRoutes(fastify: FastifyInstance) {
  // GET /libraries — barchasi
  fastify.get("/libraries", async (_req, reply): Promise<unknown> => {
    return reply.send({ message: "Library list", data: libraryService.getAll() });
  });

  // GET /libraries/:id — bitta
  fastify.get<{ Params: LibraryParams }>(
    "/libraries/:id",
    { schema: { params: libraryParamsSchema } },
    async (req, reply): Promise<unknown> => {
      const library = libraryService.getById(req.params.id);
      if (!library) return reply.code(404).send({ message: "Library topilmadi" });
      return reply.send({ message: "Library topildi", data: library });
    }
  );

  // POST /libraries — yaratish
  fastify.post<{ Body: CreateLibraryBody }>(
    "/libraries",
    { schema: { body: librarySchema } },
    async (req, reply): Promise<unknown> => {
      const library = libraryService.create(req.body);
      return reply.code(201).send({ message: "Library yaratildi", data: library });
    }
  );

  // PUT /libraries/:id — to'liq yangilash
  fastify.put<{ Params: LibraryParams; Body: UpdateLibraryBody }>(
    "/libraries/:id",
    { schema: { params: libraryParamsSchema, body: libraryUpdateSchema } },
    async (req, reply): Promise<unknown> => {
      const library = libraryService.update(req.params.id, req.body);
      if (!library) return reply.code(404).send({ message: "Library topilmadi" });
      return reply.code(200).send({ message: "Library yangilandi", data: library });
    }
  );

  // PATCH /libraries/:id — qisman yangilash
  fastify.patch<{ Params: LibraryParams; Body: UpdateLibraryBody }>(
    "/libraries/:id",
    { schema: { params: libraryParamsSchema, body: libraryUpdateSchema } },
    async (req, reply): Promise<unknown> => {
      const library = libraryService.update(req.params.id, req.body);
      if (!library) return reply.code(404).send({ message: "Library topilmadi" });
      return reply.code(200).send({ message: "Library qisman yangilandi", data: library });
    }
  );

  // DELETE /libraries/:id — o'chirish
  fastify.delete<{ Params: LibraryParams }>(
    "/libraries/:id",
    { schema: { params: libraryParamsSchema } },
    async (req, reply): Promise<unknown> => {
      const removed = libraryService.remove(req.params.id);
      if (!removed) return reply.code(404).send({ message: "Library topilmadi" });
      return reply.code(200).send({ message: "Library o'chirildi" });
    }
  );
}
