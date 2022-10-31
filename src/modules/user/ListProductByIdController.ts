import { Request, Response } from "express";
import { UserRepository } from "./UserRepository";

class ListProductByIdController {
  async execute(request: Request, response: Response): Promise<Response> {
    const userRepository = new UserRepository();

    const product = await userRepository.getById(request.params.id);

    return response.status(200).json(product);
  }
}

export { ListProductByIdController };
