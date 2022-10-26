import { Request, Response } from "express";
import { TableRepository } from "./TableRepository";

class CloseTableController {
  async execute(request: Request, response: Response): Promise<Response> {
    const tableRepository = new TableRepository();

    const { tableId, commandId } = request.body;

    try {
      await tableRepository.close(tableId, commandId);
      return response.status(200);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

export { CloseTableController };
