import "reflect-metadata";
import express from "express";
import helmet from "helmet";
import cors from "cors";
// import "./database";
import { routes } from "./routes";
import { createConnection } from "./database/data-source";

createConnection();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(routes);

export { app };
