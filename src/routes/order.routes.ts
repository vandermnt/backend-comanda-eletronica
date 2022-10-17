import { Router } from "express";
import { NewOrderController } from "../modules/order/NewOrderController";

const orderRouter = Router();

const newOrderController = new NewOrderController();

orderRouter.post("/orders", newOrderController.execute);

export { orderRouter };
