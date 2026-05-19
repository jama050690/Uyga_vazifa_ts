"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.libraryRoutes = libraryRoutes;
const library_schema_js_1 = require("./library.schema.js");
const library_service_js_1 = require("./library.service.js");
async function libraryRoutes(fastify) {
    fastify.get("/libraries", async () => {
        return {
            message: "Library list",
            data: library_service_js_1.libraryService.getAll()
        };
    });
    fastify.get("/libraries/:id", {
        schema: {
            params: library_schema_js_1.libraryParamsSchema
        }
    }, async (request, reply) => {
        const library = library_service_js_1.libraryService.getById(request.params.id);
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
