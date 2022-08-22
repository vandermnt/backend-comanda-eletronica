import { Router } from "express";
import { categoryRouter } from "./category.routes";
import { productRouter } from "./product.routes";
import { tableRouter } from "./table.routes";

const routes = Router();

routes.use(categoryRouter);
routes.use(productRouter);
routes.use(tableRouter);

export { routes };
