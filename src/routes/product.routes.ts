import { Router } from "express";
import { NewProductController } from "../modules/product/NewProductController";
import { ListProductController } from "../modules/product/ListProductController";
import { DeleteProductController } from "../modules/product/DeleteProductController";
import { EditProductController } from "../modules/product/EditProductController";
import { ListProductByIdController } from "../modules/product/ListProductByIdController";
import { ListProductByCategoryController } from "../modules/product/ListProductByCategoryController";

const listProductController = new ListProductController();
const listProductByIdController = new ListProductByIdController();
const newProductController = new NewProductController();
const deleteProductController = new DeleteProductController();
const editProductController = new EditProductController();
const listProductByCategoryController = new ListProductByCategoryController();

const productRouter = Router();

productRouter.get("/products/:id", listProductByIdController.execute);
productRouter.get("/products", listProductController.execute);
productRouter.post("/products", newProductController.execute);
productRouter.delete("/products/:id", deleteProductController.execute);
productRouter.put("/products/:id", editProductController.execute);
productRouter.get(
  "/products/category/:id",
  listProductByCategoryController.execute
);

export { productRouter };
