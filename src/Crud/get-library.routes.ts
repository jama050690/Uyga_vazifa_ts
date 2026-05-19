import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest
} from "fastify";
import { libraryParamsSchema } from "../compliments/library.schema.js";
import { LibraryParams } from "../compliments/library.types.js";
import { libraryService } from "../services/library.service.js";

export async function getLibraryRoutes(fastify: FastifyInstance) {
  fastify.get("/libraries", async (_request: FastifyRequest, reply: FastifyReply) => {
    return {
      message: "Library list",
      data: libraryService.getAll()
    };
  });

  fastify.get<{ Params: LibraryParams }>(
    "/libraries/:id",
    {
      schema: {
        params: libraryParamsSchema
      }
    },
    async (
      request: FastifyRequest<{ Params: LibraryParams }>,
      reply: FastifyReply
    ) => {
      const library = libraryService.getById(request.params.id);

      if (!library) {
        return reply.code(404).send({
          message: "Library topilmadi"
        });
      }

      return {
        message: "Library topildi",
        data: library
      };
    }
  );
}
