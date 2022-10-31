import { Request, Response } from "express";
import { container } from "tsyringe";
import { CategoryRepository } from "./CategoryRepository";

class ListCategoryByIdController {
  async execute(request: Request, response: Response): Promise<Response> {
    const categoryRepository = container.resolve(CategoryRepository);

    const product = await categoryRepository.getById(request.params.id);

    return response.status(200).json(product);
  }
}

export { ListCategoryByIdController };
