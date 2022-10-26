import { Request, Response } from "express";
import { container } from "tsyringe";
import { CategoryRepository } from "./CategoryRepository";

class DeleteCategoryController {
  async execute(request: Request, response: Response): Promise<Response> {
    const categoryRepository = container.resolve(CategoryRepository);
    const { id } = request.params;

    try {
      const products = await categoryRepository.delete(parseInt(id));
      return response.status(200).json(products);
    } catch (error) {
      console.log(error);
      return response.status(400).json("dokwaod");
    }
  }
}

export { DeleteCategoryController };
