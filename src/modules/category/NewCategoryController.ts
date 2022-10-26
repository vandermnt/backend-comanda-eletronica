import { Request, Response } from "express";
import { container } from "tsyringe";
import { Category } from "../../entities/Category";
import { CategoryRepository } from "./CategoryRepository";

class NewCategoryController {
  constructor() {}

  async execute(request: Request, response: Response): Promise<Response> {
    const categoryRepository = container.resolve(CategoryRepository);

    const { name } = request.body;

    const newCategory = new Category();
    newCategory.name = name;

    const category = await categoryRepository.create(newCategory);

    return response.status(201).json(category);
  }
}

export { NewCategoryController };
