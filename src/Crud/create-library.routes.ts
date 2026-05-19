import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest
} from "fastify";
import { librarySchema } from "../compliments/library.schema";
import { CreateLibraryBody } from "../compliments/library.types";
import { libraryService } from "../services/library.service";

export async function createLibraryRoutes(fastify: FastifyInstance) {
  fastify.post<{ Body: CreateLibraryBody }>(
    "/libraries",
    {
      schema: {
        body: librarySchema
      }
    },
    async (
      request: FastifyRequest<{ Body: CreateLibraryBody }>,
      reply: FastifyReply
    ) => {
      const library = libraryService.create(request.body);

      return reply.code(201).send({
        message: "Library yaratildi",
        data: library
      });
    }
  );
}
