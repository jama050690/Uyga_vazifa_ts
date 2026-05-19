import { buildApp } from "./app.js";

const app = buildApp();
const port = Number(process.env.PORT) || 3000;
const host = process.env.HOST || "127.0.0.1";

const start = async () => {
  try {
    await app.listen({ port, host });
    app.log.info(`Server running at http://${host}:${port}`);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

void start();
