import { Router } from "express";
import {
  DeleteCategoryController,
  ListCategoryContoller,
  NewCategoryController,
} from "../modules/category";
import { ListCategoryByIdController } from "../modules/category/ListCategoryByIdController";
import { EditProductController } from "../modules/product/EditProductController";

const newCategoryController = new NewCategoryController();
const listCategoryController = new ListCategoryContoller();
const deleteCategoryController = new DeleteCategoryController();
const editProductController = new EditProductController();
const listCategoryByIdController = new ListCategoryByIdController();

const categoryRouter = Router();

categoryRouter.post("/categories", newCategoryController.execute);
categoryRouter.get("/categories", listCategoryController.execute);
categoryRouter.delete("/categories/:id", deleteCategoryController.execute);
categoryRouter.put("/categories/:id", editProductController.execute);
categoryRouter.get("/categories/:id", listCategoryByIdController.execute);

export { categoryRouter };
