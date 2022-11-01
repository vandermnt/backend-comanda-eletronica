import { Order } from "../../entities/Order";
import { AppDataSource } from "../../database/data-source";
import { Command } from "../../entities/Command";
import { container, injectable } from "tsyringe";
import { TableRepository } from "../table/TableRepository";
import { Table } from "../../entities/Table";

@injectable()
class OrderRepository {
  private readonly orderRepository;
  private readonly commandRepository;
  private readonly tableeRepository;

  constructor() {
    this.orderRepository = AppDataSource.getRepository(Order);
    this.commandRepository = AppDataSource.getRepository(Command);
    this.tableeRepository = AppDataSource.getRepository(Table);
  }

  async create(order: any, command: Command): Promise<void> {
    const orderCreated = new Order();
    orderCreated.id_product = order.productId;
    orderCreated.id_table = order.tableId;
    orderCreated.qtde_product = order.qtdeProduct;
    orderCreated.id_command = order.commandId;
    orderCreated.note = order.note;
    orderCreated.value = order.value;
    const valueCommandUpdated = parseInt(command.value as any) + order.value;
    await this.orderRepository.save(orderCreated);
    await this.commandRepository.update(
      { id: command.id },
      { value: valueCommandUpdated }
    );
  }

  async getCommandByTable(tableId: number): Promise<Command | null> {
    const command = await this.commandRepository.findOne({
      where: { id_table: tableId, status: "open" },
    });

    return command;
  }

  async createCommand(tableId: number): Promise<any> {
    const commandCreated = new Command();
    commandCreated.value = 0;
    commandCreated.status = "open";
    commandCreated.id_table = tableId;

    const tableRepository = container.resolve(TableRepository);

    const table = await tableRepository.getById(tableId);
    table.status = false;

    await this.tableeRepository.save(table);
    return await this.commandRepository.save(commandCreated);
  }

  async getAll(): Promise<any> {}
}

export { OrderRepository };
