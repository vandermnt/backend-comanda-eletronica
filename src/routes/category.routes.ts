import { Router } from "express";
import {
  ListCategoryContoller,
  NewCategoryController,
} from "../modules/category";

const newCategoryController = new NewCategoryController();
const listCategoryController = new ListCategoryContoller();

const categoryRouter = Router();

categoryRouter.post("/categories", newCategoryController.execute);
categoryRouter.get("/categories", listCategoryController.execute);

export { categoryRouter };
