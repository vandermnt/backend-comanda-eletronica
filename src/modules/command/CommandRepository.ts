import { AppDataSource } from "../../database/data-source";
import { Command } from "../../entities/Command";
import { injectable } from "tsyringe";

@injectable()
class CommandRepository {
  private readonly commandRepository;

  constructor() {
    this.commandRepository = AppDataSource.getRepository(Command);
  }

  async getCommandByStatusOpen(): Promise<Command[] | null> {
    const command = await this.commandRepository.find({
      where: { status: "open" },
    });

    return command;
  }
}

export { CommandRepository };
