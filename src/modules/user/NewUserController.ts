import { Request, Response } from "express";
import { UserRepository } from "./UserRepository";

class NewUserController {
  async execute(request: Request, response: Response): Promise<Response> {
    const userRepository = new UserRepository();

    await userRepository.create(request.body);

    return response.status(201).json("OK");
  }
}

export { NewUserController };
