import { Request, Response } from "express";
import { CategoryRepository } from "./CategoryRepository";

class ListCategoryContoller {
  async execute(request: Request, response: Response): Promise<Response> {
    const categoryRepository = new CategoryRepository();

    const categories = await categoryRepository.getAll();

    return response.status(200).json(categories);
  }
}

export { ListCategoryContoller };
