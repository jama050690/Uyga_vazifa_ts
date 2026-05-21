import Fastify from "fastify";
import { bookRoutes } from "./Crud/book.routes";

export function buildApp() {
  const app = Fastify({ logger: true });

  app.get("/", async () => ({ message: "Fastify Book CRUD API" }));

  app.register(bookRoutes, { prefix: "/api" });

  return app;
}
