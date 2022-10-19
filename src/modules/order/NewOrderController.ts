import { Request, Response } from "express";
import { container } from "tsyringe";
import { NewOrderHandler } from "./NewOrderHandler";

class NewOrderController {
  async execute(request: Request, response: Response): Promise<Response> {
    const newOrderHandler = container.resolve(NewOrderHandler);
    await newOrderHandler.handler(request.body.order);
    return response.status(201);
  }
}

export { NewOrderController };
