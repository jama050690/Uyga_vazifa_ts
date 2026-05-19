"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLibraryRoutes = createLibraryRoutes;
const library_schema_js_1 = require("../compliments/library.schema.js");
const library_service_js_1 = require("../services/library.service.js");
async function createLibraryRoutes(fastify) {
    fastify.post("/libraries", {
        schema: {
            body: library_schema_js_1.librarySchema
        }
    }, async (request, reply) => {
        const library = library_service_js_1.libraryService.create(request.body);
        return reply.code(201).send({
            message: "Library yaratildi",
            data: library
        });
    });
}
