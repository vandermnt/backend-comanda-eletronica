import { Router } from "express";
import { LoginController } from "../modules/account/authenticate/loginController";

const loginRouter = Router();

const loginController = new LoginController();

loginRouter.post("/login", loginController.handle);

export { loginRouter };
