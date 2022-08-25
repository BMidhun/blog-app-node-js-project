import { Application } from "express";
import HttpServer from "http";
import { config } from "./config/dev";
import initialize from "./loaders";

const PORT = config.PORT;

async function startServer(app: Application) {
  try {
    const server = HttpServer.createServer(await initialize(app));

    server.listen(PORT, () => {
      console.info("Server running on PORT", PORT);
    });
  } catch (error) {
    console.error("Something went wrong", error);
  }
}

export default startServer;
