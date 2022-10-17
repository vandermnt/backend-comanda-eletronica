import { Request, Response } from "express";
import { OrderRepository } from "./OrderRepository";

class NewOrderController {
  async execute(request: Request, response: Response): Promise<Response> {
    const orderRepository = new OrderRepository();
    console.log(request.body);
    const { order } = request.body;
    await orderRepository.create(order);
    return response.status(201);
  }
}

export { NewOrderController };
