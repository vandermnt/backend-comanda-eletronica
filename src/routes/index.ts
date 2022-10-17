import { Router } from "express";
import { tableRouter } from "./table.routes";
import { orderRouter } from "./order.routes";
import { productRouter } from "./product.routes";
import { categoryRouter } from "./category.routes";

const routes = Router();

routes.use(categoryRouter);
routes.use(productRouter);
routes.use(tableRouter);
routes.use(orderRouter);

export { routes };
