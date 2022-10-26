import { Router } from "express";
import {
  DeleteCategoryController,
  ListCategoryContoller,
  NewCategoryController,
} from "../modules/category";

const newCategoryController = new NewCategoryController();
const listCategoryController = new ListCategoryContoller();
const deleteCategoryController = new DeleteCategoryController();

const categoryRouter = Router();

categoryRouter.post("/categories", newCategoryController.execute);
categoryRouter.get("/categories", listCategoryController.execute);
categoryRouter.delete("/categories/:id", deleteCategoryController.execute);

export { categoryRouter };
