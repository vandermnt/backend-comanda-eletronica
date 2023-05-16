import { Request, Response } from "express";
import { ProductRepository } from "./ProductRepository";

class EditProductController {
  async execute(request: Request, response: Response): Promise<Response> {
    const productRepository = new ProductRepository();
    const { id } = request.params;
    const data = request.body;

    try {
      await productRepository.update(id, data);
      return response.status(200).json("OK");
    } catch (error) {
      return response.status(400).send("Produto não encontrado");
    }
  }
}

export { EditProductController };
