import { Request, Response } from "express";
import { ProductRepository } from "./ProductRepository";

class ListProductByCategoryController {
  async execute(request: Request, response: Response): Promise<Response> {
    console.log("opwpaddjka");
    const productRepository = new ProductRepository();

    const product = await productRepository.getByCategory(
      parseInt(request.params.id)
    );

    return response.status(200).json(product);
  }
}

export { ListProductByCategoryController };
