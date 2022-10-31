import { Router } from "express";
import { CloseTableController } from "../modules/table/CloseTableController";
import { ListTableController } from "../modules/table/ListTableController";
import { NewTableController } from "../modules/table/NewTableController";

const listTablesController = new ListTableController();
const newTablesController = new NewTableController();
const closeTablesController = new CloseTableController();

const tableRouter = Router();

tableRouter.get("/tables", listTablesController.execute);
tableRouter.post("/tables", newTablesController.execute);
tableRouter.put("/tables/close", closeTablesController.execute);

export { tableRouter };
