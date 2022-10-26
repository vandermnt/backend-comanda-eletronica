import { Request, Response } from "express";
import { container } from "tsyringe";
import { CategoryRepository } from "./CategoryRepository";

class ListCategoryContoller {
  async execute(request: Request, response: Response): Promise<Response> {
    const categoryRepository = container.resolve(CategoryRepository);

    const categories = await categoryRepository.getAll();

    return response.status(200).json(categories);
  }
}

export { ListCategoryContoller };
