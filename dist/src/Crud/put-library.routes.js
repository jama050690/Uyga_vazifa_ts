"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putLibraryRoutes = putLibraryRoutes;
const library_schema_js_1 = require("../compliments/library.schema.js");
const library_service_js_1 = require("../services/library.service.js");
async function putLibraryRoutes(fastify) {
    fastify.put("/libraries/:id", {
        schema: {
            params: library_schema_js_1.libraryParamsSchema,
            body: library_schema_js_1.libraryUpdateSchema
        }
    }, async (request, reply) => {
        const library = library_service_js_1.libraryService.update(request.params.id, request.body);
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
