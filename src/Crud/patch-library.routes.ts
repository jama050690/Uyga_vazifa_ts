import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest
} from "fastify";
import {
  libraryParamsSchema,
  libraryUpdateSchema
} from "../compliments/library.schema";
import {
  LibraryParams,
  UpdateLibraryBody
} from "../compliments/library.types";
import { libraryService } from "../services/library.service";

export async function patchLibraryRoutes(fastify: FastifyInstance) {
  fastify.patch<{ Params: LibraryParams; Body: UpdateLibraryBody }>(
    "/libraries/:id",
    {
      schema: {
        params: libraryParamsSchema,
        body: libraryUpdateSchema
      }
    },
    async (
      request: FastifyRequest<{ Params: LibraryParams; Body: UpdateLibraryBody }>,
      reply: FastifyReply
    ) => {
      const library = libraryService.update(request.params.id, request.body);

      if (!library) {
        return reply.code(404).send({
          message: "Library topilmadi"
        });
      }

      return {
        message: "Library qisman yangilandi",
        data: library
      };
    }
  );
}
