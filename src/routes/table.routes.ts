import { Router } from "express";
import { ListTableController } from "../modules/table/ListTableController";

const listTablesController = new ListTableController();

const tableRouter = Router();

tableRouter.get("/tables", listTablesController.execute);
tableRouter.post("/tables");
