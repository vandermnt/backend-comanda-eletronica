import { Request, Response } from "express";
import { Category } from "../../entities/Category";
import { CategoryRepository } from "./CategoryRepository";

class NewCategoryController {
  constructor() {}

  async execute(
    request: Request,
    response: Response
  ): Promise<Category | undefined> {
    const categoryRepository = new CategoryRepository();

    const { name } = request.body;

    const newCategory = new Category();
    newCategory.name = name;

    console.log(newCategory);
    return await categoryRepository.create(newCategory);
  }
}

export { NewCategoryController };
