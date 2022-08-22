import "reflect-metadata";
import express from "express";
import helmet from "helmet";
// import "./database";
import { routes } from "./routes";
import { createConnection } from "./database/data-source";

createConnection();

const app = express();

app.use(helmet());
app.use(express.json());
app.use(routes);

export { app };
