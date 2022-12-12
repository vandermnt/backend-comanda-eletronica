import { Router } from "express";
import { LoginController } from "../modules/account/authenticate/loginController";

const authenticateRouter = Router();

const loginController = new LoginController();

authenticateRouter.post("/sessions", loginController.handle);

export { authenticateRouter };
