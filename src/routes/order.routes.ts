import { Router } from "express";
import { ListOrderController } from "../modules/order/ListOrderController";
import { NewOrderController } from "../modules/order/NewOrderController";

const orderRouter = Router();

const newOrderController = new NewOrderController();
const listOrderController = new ListOrderController();

orderRouter.post("/orders", newOrderController.execute);
orderRouter.get("/orders", listOrderController.execute);

export { orderRouter };
