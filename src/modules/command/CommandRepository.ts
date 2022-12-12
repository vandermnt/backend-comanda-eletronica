import { AppDataSource } from "../../database/data-source";
import { Command } from "../../entities/Command";
import { injectable } from "tsyringe";
import { Between } from "typeorm";

@injectable()
class CommandRepository {
  private readonly commandRepository;

  constructor() {
    this.commandRepository = AppDataSource.getRepository(Command);
  }

  async getCommandByStatusOpen(): Promise<Command[] | null> {
    const command = await this.commandRepository.find({
      relations: ["table"],
      where: { status: "open" },
    });

    return command;
  }

  async getCommandByDate(
    dateStart: any,
    dateEnd: any
  ): Promise<Command[] | null> {
    const command = await this.commandRepository.find({
      relations: ["table"],
      where: { created_at: Between(dateStart, dateEnd) },
    });

    return command;
  }
}

export { CommandRepository };
