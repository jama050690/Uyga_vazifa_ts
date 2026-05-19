"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.libraryRoutes = libraryRoutes;
const create_library_routes_js_1 = require("./create-library.routes.js");
const delete_library_routes_js_1 = require("./delete-library.routes.js");
const get_library_routes_js_1 = require("./get-library.routes.js");
const patch_library_routes_js_1 = require("./patch-library.routes.js");
const put_library_routes_js_1 = require("./put-library.routes.js");
async function libraryRoutes(fastify) {
    fastify.register(get_library_routes_js_1.getLibraryRoutes);
    fastify.register(create_library_routes_js_1.createLibraryRoutes);
    fastify.register(put_library_routes_js_1.putLibraryRoutes);
    fastify.register(patch_library_routes_js_1.patchLibraryRoutes);
    fastify.register(delete_library_routes_js_1.deleteLibraryRoutes);
}
