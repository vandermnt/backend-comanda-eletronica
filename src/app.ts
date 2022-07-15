import express from "express";
import helmet from "helmet";
import { loginRouter } from "./routes/login.routes";

const app = express();

app.use(helmet());
app.use(express.json());
app.use(loginRouter);

export { app };
