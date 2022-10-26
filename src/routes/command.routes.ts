import { Router } from "express";
import { ListCommandController } from "../modules/command/ListCommandController";

const listCommandController = new ListCommandController();

const commandRouter = Router();

commandRouter.get("/commands", listCommandController.execute);

export { commandRouter };
