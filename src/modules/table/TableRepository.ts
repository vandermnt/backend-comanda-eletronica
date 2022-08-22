import { AppDataSource } from "../../database/data-source";
import { Table } from "../../entities/Table";

class TableRepository {
  private readonly tableRepository;
  constructor() {
    this.tableRepository = AppDataSource.getRepository(Table);
  }
  async getAll(): Promise<Table[]> {
    return await this.tableRepository.find();
  }

  async create(table: Table): Promise<void> {
    const tableCreated = new Table();
    tableCreated.number = table.number;
    tableCreated.status = table.status;

    await this.tableRepository.save(tableCreated);
  }
}

export { TableRepository };
