import { Request, Response } from "express";
import { ProductRepository } from "./ProductRepository";

class NewProductController {
  async execute(request: Request, response: Response): Promise<Response> {
    const productRepository = new ProductRepository();

    await productRepository.create(request.body);

    return response.status(201).json("OK");
  }
}

export { NewProductController };
