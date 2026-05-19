import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest
} from "fastify";
import { libraryParamsSchema } from "../compliments/library.schema.js";
import { LibraryParams } from "../compliments/library.types.js";
import { libraryService } from "../services/library.service.js";

export async function deleteLibraryRoutes(fastify: FastifyInstance) {
  fastify.delete<{ Params: LibraryParams }>(
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
      const removed = libraryService.remove(request.params.id);

      if (!removed) {
        return reply.code(404).send({
          message: "Library topilmadi"
        });
      }

      return reply.code(200).send({
        message: "Library o'chirildi"
      });
    }
  );
}
