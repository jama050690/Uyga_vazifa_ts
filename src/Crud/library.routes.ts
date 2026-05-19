import { FastifyInstance } from "fastify";
import { createLibraryRoutes } from "./create-library.routes.js";
import { deleteLibraryRoutes } from "./delete-library.routes.js";
import { getLibraryRoutes } from "./get-library.routes.js";
import { patchLibraryRoutes } from "./patch-library.routes.js";
import { putLibraryRoutes } from "./put-library.routes.js";

export async function libraryRoutes(fastify: FastifyInstance) {
  fastify.register(getLibraryRoutes);
  fastify.register(createLibraryRoutes);
  fastify.register(putLibraryRoutes);
  fastify.register(patchLibraryRoutes);
  fastify.register(deleteLibraryRoutes);
}
