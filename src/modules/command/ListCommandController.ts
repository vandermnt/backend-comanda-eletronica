import { Request, Response } from "express";
import { CommandRepository } from "./CommandRepository";

class ListCommandController {
  async execute(request: Request, response: Response): Promise<Response> {
    const commandRepository = new CommandRepository();

    const commands = await commandRepository.getCommandByStatusOpen();

    return response.status(200).json(commands);
  }
}

export { ListCommandController };
