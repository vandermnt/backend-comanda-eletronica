import "reflect-metadata";
import { Router } from "express";
import { tableRouter } from "./table.routes";
import { orderRouter } from "./order.routes";
import { productRouter } from "./product.routes";
import { categoryRouter } from "./category.routes";
import { commandRouter } from "./command.routes";

const routes = Router();

routes.use(categoryRouter);
routes.use(productRouter);
routes.use(tableRouter);
routes.use(orderRouter);
routes.use(commandRouter);

export { routes };
