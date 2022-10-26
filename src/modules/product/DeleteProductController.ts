import { Request, Response } from "express";
import { ProductRepository } from "./ProductRepository";

class DeleteProductController {
  async execute(request: Request, response: Response): Promise<Response> {
    const productRepository = new ProductRepository();
    const { id } = request.params;

    const products = await productRepository.delete(id);

    return response.status(200).json(products);
  }
}

export { DeleteProductController };
