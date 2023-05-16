import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
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
app.use(
  (err: Error, request: Request, response: Response, _next: NextFunction) => {
    response.status(400).json({ message: err.message });
  }
);
app.use(routes);

export { app };
