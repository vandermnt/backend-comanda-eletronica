import { Order } from "../../entities/Order";
import { AppDataSource } from "../../database/data-source";
import { Command } from "../../entities/Command";
import { injectable } from "tsyringe";

@injectable()
class OrderRepository {
  private readonly orderRepository;
  private readonly commandRepository;

  constructor() {
    this.orderRepository = AppDataSource.getRepository(Order);
    this.commandRepository = AppDataSource.getRepository(Command);
  }

  async create(order: any): Promise<void> {
    const orderCreated = new Order();
    orderCreated.id_product = order.productId;
    orderCreated.id_table = order.tableId;
    orderCreated.qtde_product = order.qtdeProduct;
    orderCreated.id_command = order.commandId;
    orderCreated.note = order.note;
    orderCreated.value = order.value;

    try {
      await this.orderRepository.save(orderCreated);
    } catch (error) {
      console.log("aqui errooooooooooo");
      console.log(error);
    }
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

    try {
      return await this.commandRepository.save(commandCreated);
    } catch (error) {
      console.log("aqui errooooooooooo");
      console.log(error);
    }
  }
}

export { OrderRepository };
