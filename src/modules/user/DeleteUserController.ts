import { Request, Response } from "express";
import { UserRepository } from "./UserRepository";

class DeleteProductController {
  async execute(request: Request, response: Response): Promise<Response> {
    const userRepository = new UserRepository();
    const { id } = request.params;

    try {
      const users = await userRepository.delete(id);
      return response.status(200).json(users);
    } catch (error) {
      return response
        .status(400)
        .send("Erro, não foi possível excluir usuário!");
    }
  }
}

export { DeleteProductController };
