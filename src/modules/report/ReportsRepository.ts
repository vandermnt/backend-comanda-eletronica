import { injectable } from "tsyringe";
import { CommandRepository } from "../command/CommandRepository";

@injectable()
class ReportsRepository {
  constructor(private commandRepository: CommandRepository) {}

  public async getReports(data: any): Promise<any> {}
}

export { ReportsRepository };
