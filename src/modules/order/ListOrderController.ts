import { Request, Response } from "express";
import { OrderRepository } from "./OrderRepository";

class ListOrderController {
  async execute(request: Request, response: Response): Promise<Response> {
    const orderRepository = new OrderRepository();

    const orders = await orderRepository.getAll();

    return response.status(200).json(orders);
  }
}

export { ListOrderController };
