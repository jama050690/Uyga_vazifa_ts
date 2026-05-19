"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLibraryRoutes = deleteLibraryRoutes;
const library_schema_js_1 = require("../compliments/library.schema.js");
const library_service_js_1 = require("../services/library.service.js");
async function deleteLibraryRoutes(fastify) {
    fastify.delete("/libraries/:id", {
        schema: {
            params: library_schema_js_1.libraryParamsSchema
        }
    }, async (request, reply) => {
        const removed = library_service_js_1.libraryService.remove(request.params.id);
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
