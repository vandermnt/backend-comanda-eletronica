import { injectable } from "tsyringe";
import { CommandRepository } from "../command/CommandRepository";

@injectable()
class ReportsRepository {
  constructor(private commandRepository: CommandRepository) {}

  public async getReports(data: any): Promise<any> {
    const { dateStart, dateEnd } = data;

    const result = await this.commandRepository.getCommandByDate(
      dateStart,
      dateEnd
    );

    return result;
  }
}

export { ReportsRepository };
