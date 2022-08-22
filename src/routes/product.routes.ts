import { Router } from "express";
import { ListProductController } from "../modules/product/ListProductController";
import { NewProductController } from "../modules/product/NewProductController";

const listProductController = new ListProductController();
const newProductController = new NewProductController();

const productRouter = Router();

productRouter.get("/products", listProductController.execute);
productRouter.post("/products", newProductController.execute);

export { productRouter };
