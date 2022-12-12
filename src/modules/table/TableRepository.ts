import { injectable } from "tsyringe";
import { AppDataSource } from "../../database/data-source";
import { Command } from "../../entities/Command";
import { Table } from "../../entities/Table";

enum Status {
  closed = "closed",
  open = "open",
}

@injectable()
class TableRepository {
  private readonly tableRepository;
  private readonly commandRepository;

  constructor() {
    this.tableRepository = AppDataSource.getRepository(Table);
    this.commandRepository = AppDataSource.getRepository(Command);
  }

  async getAll(): Promise<Table[]> {
    return await this.tableRepository.find({
      order:{
        number: "ASC"
      }
    });
  }

  async create(table: Table): Promise<void> {
    const tableCreated = new Table();
    tableCreated.number = table.number;
    tableCreated.status = true;

    await this.tableRepository.save(tableCreated);
  }

  async close(tableId: string, commandId: string): Promise<void> {
    const table = await this.tableRepository.findOne({
      where: { id: parseInt(tableId) },
    });

    if (!table) {
      throw new Error("Não foi possível fechar a mesa. Mesa inexistente!");
    }

    const command = await this.commandRepository.findOne({
      where: { id: parseInt(commandId) },
    });

    if (!command) {
      throw new Error("Não foi possível fechar a mesa. Comanda inexistente!");
    }

    table.status = true;
    command.status = Status.closed;

    await this.tableRepository.save(table);
    await this.commandRepository.save(command);
  }

  async getById(tableId: number): Promise<any> {
    const table = await this.tableRepository.findOneBy({
      id: tableId,
    });

    return table;
  }
}

export { TableRepository };
