"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putLibraryRoutes = putLibraryRoutes;
const library_schema_1 = require("../compliments/library.schema");
const library_service_1 = require("../services/library.service");
async function putLibraryRoutes(fastify) {
    fastify.put("/libraries/:id", {
        schema: {
            params: library_schema_1.libraryParamsSchema,
            body: library_schema_1.libraryUpdateSchema
        }
    }, async (request, reply) => {
        const library = library_service_1.libraryService.update(request.params.id, request.body);
        if (!library) {
            return reply.code(404).send({
                message: "Library topilmadi"
            });
        }
        return {
            message: "Library yangilandi",
            data: library
        };
    });
}
