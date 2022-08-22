import { Router } from "express";
import { ListTableController } from "../modules/table/ListTableController";
import { NewTableController } from "../modules/table/NewTableController";

const listTablesController = new ListTableController();
const newTablesController = new NewTableController();

const tableRouter = Router();

tableRouter.get("/tables", listTablesController.execute);
tableRouter.post("/tables", newTablesController.execute);

export { tableRouter };
