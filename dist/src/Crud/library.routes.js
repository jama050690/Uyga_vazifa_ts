"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.libraryRoutes = libraryRoutes;
const create_library_routes_1 = require("./create-library.routes");
const delete_library_routes_1 = require("./delete-library.routes");
const get_library_routes_1 = require("./get-library.routes");
const patch_library_routes_1 = require("./patch-library.routes");
const put_library_routes_1 = require("./put-library.routes");
async function libraryRoutes(fastify) {
    fastify.register(get_library_routes_1.getLibraryRoutes);
    fastify.register(create_library_routes_1.createLibraryRoutes);
    fastify.register(put_library_routes_1.putLibraryRoutes);
    fastify.register(patch_library_routes_1.patchLibraryRoutes);
    fastify.register(delete_library_routes_1.deleteLibraryRoutes);
}
