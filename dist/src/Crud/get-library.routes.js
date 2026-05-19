"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLibraryRoutes = getLibraryRoutes;
const library_schema_1 = require("../compliments/library.schema");
const library_service_1 = require("../services/library.service");
async function getLibraryRoutes(fastify) {
    fastify.get("/libraries", async (_request, reply) => {
        return {
            message: "Library list",
            data: library_service_1.libraryService.getAll()
        };
    });
    fastify.get("/libraries/:id", {
        schema: {
            params: library_schema_1.libraryParamsSchema
        }
    }, async (request, reply) => {
        const library = library_service_1.libraryService.getById(request.params.id);
        if (!library) {
            return reply.code(404).send({
                message: "Library topilmadi"
            });
        }
        return {
            message: "Library topildi",
            data: library
        };
    });
}
