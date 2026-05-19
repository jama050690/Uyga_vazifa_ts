import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest
} from "fastify";
import { libraryParamsSchema } from "../compliments/library.schema";
import { LibraryParams } from "../compliments/library.types";
import { libraryService } from "../services/library.service";

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
