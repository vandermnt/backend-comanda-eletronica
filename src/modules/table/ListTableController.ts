import { Request, Response } from "express";
import { TableRepository } from "./TableRepository";

class ListTableController {
  async execute(request: Request, response: Response): Promise<Response> {
    const tableRepository = new TableRepository();

    const tables = await tableRepository.getAll();

    return response.status(200).json(tables);
  }
}

export { ListTableController };
