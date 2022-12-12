import { Router } from "express";
import { ensureAuthenticate } from "../middleware/ensureAuthenticate";
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

categoryRouter.post(
  "/categories",
  ensureAuthenticate,
  newCategoryController.execute
);
categoryRouter.get(
  "/categories",
  ensureAuthenticate,
  listCategoryController.execute
);
categoryRouter.delete(
  "/categories/:id",
  ensureAuthenticate,
  deleteCategoryController.execute
);
categoryRouter.put(
  "/categories/:id",
  ensureAuthenticate,
  editProductController.execute
);
categoryRouter.get(
  "/categories/:id",
  ensureAuthenticate,
  listCategoryByIdController.execute
);

export { categoryRouter };
