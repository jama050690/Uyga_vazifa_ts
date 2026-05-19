"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLibraryRoutes = createLibraryRoutes;
const library_schema_1 = require("../compliments/library.schema");
const library_service_1 = require("../services/library.service");
async function createLibraryRoutes(fastify) {
    fastify.post("/libraries", {
        schema: {
            body: library_schema_1.librarySchema
        }
    }, async (request, reply) => {
        const library = library_service_1.libraryService.create(request.body);
        return reply.code(201).send({
            message: "Library yaratildi",
            data: library
        });
    });
}
