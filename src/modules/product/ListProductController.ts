import { Request, Response } from "express";
import { ProductRepository } from "./ProductRepository";

class ListProductController {
  async execute(request: Request, response: Response): Promise<Response> {
    const productRepository = new ProductRepository();

    const products = await productRepository.getAll();

    return response.status(200).json(products);
  }
}

export { ListProductController };
