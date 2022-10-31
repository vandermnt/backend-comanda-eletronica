import { injectable } from "tsyringe";
import { OrderRepository } from "./OrderRepository";

@injectable()
class NewOrderHandler {
  constructor(private orderRepository: OrderRepository) {}

  async handler(order: any): Promise<any> {
    const { tableId } = order;
    const command = await this.orderRepository.getCommandByTable(tableId);
    console.log(command);

    if (!command?.id) {
      const newCommand = await this.orderRepository.createCommand(tableId);
      order.commandId = newCommand.id;
      return await this.orderRepository.create(order, newCommand);
    }

    order.commandId = command.id;

    return await this.orderRepository.create(order, command);
  }
}

export { NewOrderHandler };
