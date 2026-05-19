import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest
} from "fastify";
import { libraryParamsSchema } from "../compliments/library.schema";
import { LibraryParams } from "../compliments/library.types";
import { libraryService } from "../services/library.service";

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
