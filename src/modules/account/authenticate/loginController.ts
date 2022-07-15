import { Request, Response } from "express";
import { container } from "tsyringe";
import { LoginUseCase } from "./loginUseCase";

class LoginController {
  async handle(request: Request, response: Response): Promise<Response> {
    console.log(request.body);
    const { email, password } = request.body;

    const loginUseCase = container.resolve(LoginUseCase);
    const token = await loginUseCase.execute({ email, password });

    return response.status(200).json(token);
  }
}

export { LoginController };
