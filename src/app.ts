import express from "express";
import { createHandler } from "graphql-http/lib/use/express";
import schema from "./schema";

const app = express();

app.use(express.json());

app.all("/graphql", createHandler({ schema }));

export default app;
