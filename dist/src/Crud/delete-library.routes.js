"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLibraryRoutes = deleteLibraryRoutes;
const library_schema_1 = require("../compliments/library.schema");
const library_service_1 = require("../services/library.service");
async function deleteLibraryRoutes(fastify) {
    fastify.delete("/libraries/:id", {
        schema: {
            params: library_schema_1.libraryParamsSchema
        }
    }, async (request, reply) => {
        const removed = library_service_1.libraryService.remove(request.params.id);
        if (!removed) {
            return reply.code(404).send({
                message: "Library topilmadi"
            });
        }
        return reply.code(200).send({
            message: "Library o'chirildi"
        });
    });
}
