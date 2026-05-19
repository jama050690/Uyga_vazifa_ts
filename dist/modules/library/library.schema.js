"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.libraryParamsSchema = exports.libraryUpdateSchema = exports.librarySchema = void 0;
exports.librarySchema = {
    type: "object",
    required: ["name", "address", "booksCount"],
    additionalProperties: false,
    properties: {
        name: { type: "string", minLength: 2 },
        address: { type: "string", minLength: 5 },
        booksCount: { type: "number", minimum: 0 },
        isOpen: { type: "boolean" }
    }
};
exports.libraryUpdateSchema = {
    type: "object",
    additionalProperties: false,
    properties: {
        name: { type: "string", minLength: 2 },
        address: { type: "string", minLength: 5 },
        booksCount: { type: "number", minimum: 0 },
        isOpen: { type: "boolean" }
    }
};
exports.libraryParamsSchema = {
    type: "object",
    required: ["id"],
    properties: {
        id: { type: "number" }
    }
};
