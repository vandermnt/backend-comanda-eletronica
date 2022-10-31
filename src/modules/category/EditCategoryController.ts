import { Request, Response } from "express";
import { container } from "tsyringe";
import { CategoryRepository } from "./CategoryRepository";

class EditCategoryController {
  async execute(request: Request, response: Response): Promise<Response> {
    const categoryRepository = container.resolve(CategoryRepository);
    console.log(request.params);

    const { id } = request.params;
    const data = request.body;

    try {
      await categoryRepository.update(id, data);
      console.log(id);
      return response.status(200).json("OK");
    } catch (error) {
      console.log(error);
      return response.status(700).send("Categoria não encontrada");
    }
  }
}

export { EditCategoryController };
