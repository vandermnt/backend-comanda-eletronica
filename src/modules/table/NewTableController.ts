import { Request, Response } from "express";
import { TableRepository } from "./TableRepository";

class NewTableController {
  async execute(request: Request, response: Response): Promise<Response> {
    const tableRepository = new TableRepository();

    await tableRepository.create(request.body);

    return response.status(201);
  }
}

export { NewTableController };
