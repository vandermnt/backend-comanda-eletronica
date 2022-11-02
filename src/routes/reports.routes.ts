import { Router } from "express";
import { ReportsController } from "../modules/report/ReportsController";

const reportsRouter = Router();

const reportsController = new ReportsController();

reportsRouter.get("/reports", reportsController.execute);

export { reportsRouter };
