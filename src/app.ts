import Fastify from "fastify";
import { libraryRoutes } from "./Crud/library.routes.js";

export function buildApp() {
  const app = Fastify({
    logger: true
  });

  app.get("/", async () => {
    return {
      message: "Fastify Library CRUD API"
    };
  });

  app.register(libraryRoutes, { prefix: "/api" });

  return app;
}
