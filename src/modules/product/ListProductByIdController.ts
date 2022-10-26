import { Request, Response } from "express";
import { ProductRepository } from "./ProductRepository";

class ListProductByIdController {
  async execute(request: Request, response: Response): Promise<Response> {
    const productRepository = new ProductRepository();

    const product = await productRepository.getById(request.params.id);

    return response.status(200).json(product);
  }
}

export { ListProductByIdController };
