import { Request, Response } from "express";
import { container } from "tsyringe";
import { LoginUseCase } from "./loginUseCase";

class LoginController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const loginUseCase = container.resolve(LoginUseCase);
    try {
      const token = await loginUseCase.execute({ email, password });
      return response.status(200).json(token);
    } catch (error) {
      return response.status(400).json({ message: "Credenciais inválidas" });
    }
  }
}

export { LoginController };
