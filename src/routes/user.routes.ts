import { Router } from "express";
import { ensureAuthenticate } from "../middleware/ensureAuthenticate";
import { ListUserController } from "../modules/user/ListUserController";
import { NewUserController } from "../modules/user/NewUserController";

const listUserController = new ListUserController();
const newUserController = new NewUserController();

const usersRouter = Router();

usersRouter.get("/users", ensureAuthenticate, listUserController.execute);
usersRouter.post("/users", ensureAuthenticate, newUserController.execute);

export { usersRouter };
