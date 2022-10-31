import { Request, Response } from "express";
import { UserRepository } from "./UserRepository";

class EditProductController {
  async execute(request: Request, response: Response): Promise<Response> {
    const userRepository = new UserRepository();
    const { id } = request.params;
    const data = request.body;

    try {
      await userRepository.update(id, data);
      return response.status(200).json("OK");
    } catch (error) {
      console.log(error);
      return response.status(400).send("Usuário não encontrado");
    }
  }
}

export { EditProductController };
