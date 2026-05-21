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
} as const;

export const librarySchema = {
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
} as const;

export const libraryUpdateSchema = {
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
} as const;

export const libraryParamsSchema = {
  type: "object",
  required: ["name"],
  properties: {
    name: { type: "string", minLength: 2 }
  }
} as const;
