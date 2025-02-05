import dotenv from "dotenv";
dotenv.config();
import app from "./app";
import config from "./config";

const port = config.port;

if (!process.env.INFURA_API_KEY) {
  throw new Error("INFURA_API_KEY environment variable is required");
}

const server = app.listen(port, () => {
  console.log(`🚀 GraphQL server running at http://localhost:${port}/graphql`);
  console.log(`Try the following query:${config.defaultQuery}`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM signal received: closing HTTP server");
  server.close(() => {
    console.log("HTTP server closed");
    process.exit(0);
  });
});

process.on("SIGINT", () => {
  console.log("SIGINT signal received: closing HTTP server");
  server.close(() => {
    console.log("HTTP server closed");
    process.exit(0);
  });
});
