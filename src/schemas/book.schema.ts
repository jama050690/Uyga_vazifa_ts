export const bookBodySchema = {
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

export const bookUpdateSchema = {
  type: "object",
  additionalProperties: false,
  properties: {
    name: { type: "string", minLength: 2 },
    author: { type: "string", minLength: 2 },
    genre: { type: "string", minLength: 2 },
    pages: { type: "number", minimum: 1 }
  }
} as const;

export const bookParamsSchema = {
  type: "object",
  required: ["name"],
  properties: {
    name: { type: "string", minLength: 2 }
  }
} as const;
