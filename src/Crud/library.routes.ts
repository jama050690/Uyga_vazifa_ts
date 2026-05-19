import { FastifyInstance } from "fastify";
import { createLibraryRoutes } from "./create-library.routes";
import { deleteLibraryRoutes } from "./delete-library.routes";
import { getLibraryRoutes } from "./get-library.routes";
import { patchLibraryRoutes } from "./patch-library.routes";
import { putLibraryRoutes } from "./put-library.routes";

export async function libraryRoutes(fastify: FastifyInstance) {
  fastify.register(getLibraryRoutes);
  fastify.register(createLibraryRoutes);
  fastify.register(putLibraryRoutes);
  fastify.register(patchLibraryRoutes);
  fastify.register(deleteLibraryRoutes);
}
