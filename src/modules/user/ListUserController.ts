import { Request, Response } from "express";
import { UserRepository } from "./UserRepository";

class ListUserController {
  async execute(request: Request, response: Response): Promise<Response> {
    const userRepository = new UserRepository();

    const products = await userRepository.getAll();

    return response.status(200).json(products);
  }
}

export { ListUserController };
