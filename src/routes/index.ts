import { Router } from "express";
import { tableRouter } from "./table.routes";
import { orderRouter } from "./order.routes";
import { productRouter } from "./product.routes";
import { categoryRouter } from "./category.routes";
import { commandRouter } from "./command.routes";
import { usersRouter } from "./user.routes";
import { reportsRouter } from "./reports.routes";
import { authenticateRouter } from "./authenticate.routes";

const routes = Router();

routes.use(usersRouter);
routes.use(tableRouter);
routes.use(orderRouter);
routes.use(commandRouter);
routes.use(reportsRouter);
routes.use(productRouter);
routes.use(categoryRouter);
routes.use(authenticateRouter);

export { routes };
