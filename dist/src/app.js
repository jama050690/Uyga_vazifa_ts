"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildApp = buildApp;
const fastify_1 = __importDefault(require("fastify"));
const library_routes_js_1 = require("./Crud/library.routes.js");
function buildApp() {
    const app = (0, fastify_1.default)({
        logger: true
    });
    app.get("/", async () => {
        return {
            message: "Fastify Library CRUD API"
        };
    });
    app.register(library_routes_js_1.libraryRoutes, { prefix: "/api" });
    return app;
}
