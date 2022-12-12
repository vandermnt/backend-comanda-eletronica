import { Request, Response } from "express";
import { container } from "tsyringe";
import { ReportsRepository } from "./ReportsRepository";

class ReportsController {
  async execute(request: Request, response: Response): Promise<Response> {
    const { dateStart, dateEnd } = request.query;

    if (!dateStart && !dateEnd) {
      return response
        .status(400)
        .send(
          "Paramêtros obrigatórios não informados! Data inicial e data final do relatório."
        );
    }

    const reportsRepository = container.resolve(ReportsRepository);
    const result = await reportsRepository.getReports({ dateStart, dateEnd });

    return response.status(200).json(result);
  }
}

export { ReportsController };
