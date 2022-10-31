import { Router } from "express";
import { ListUserController } from "../modules/user/ListUserController";
import { NewUserController } from "../modules/user/NewUserController";

const listUserController = new ListUserController();
const newUserController = new NewUserController();

const usersRouter = Router();

usersRouter.get("/users", listUserController.execute);
usersRouter.post("/users", newUserController.execute);

export { usersRouter };
