"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.libraryParamsSchema = exports.libraryUpdateSchema = exports.librarySchema = void 0;
const bookSchema = {
    type: "object",
    required: ["name", "author", "genre", "pages"],
    additionalProperties: false,
    properties: {
        name: { type: "string", minLength: 2 },
        author: { type: "string", minLength: 2 },
        genre: { type: "string", minLength: 2 },
        pages: { type: "number", minimum: 1 }
    }
};
exports.librarySchema = {
    type: "object",
    required: ["name", "address"],
    additionalProperties: false,
    properties: {
        name: { type: "string", minLength: 2 },
        address: { type: "string", minLength: 5 },
        books: {
            type: "array",
            items: bookSchema
        },
        isOpen: { type: "boolean" }
    }
};
exports.libraryUpdateSchema = {
    type: "object",
    additionalProperties: false,
    properties: {
        name: { type: "string", minLength: 2 },
        address: { type: "string", minLength: 5 },
        books: {
            type: "array",
            items: bookSchema
        },
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
