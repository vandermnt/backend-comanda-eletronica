import { OrderRepository } from "./OrderRepository";

class NewOrderHandler {
  constructor(private orderRepository: OrderRepository) {}

  async handler(order: any): Promise<any> {
    const { id_table } = order;

    const command = await this.orderRepository.getCommandByTable(id_table);

    if (!command?.id) {
      const newCommand = await this.orderRepository.createCommand(id_table);
      order.commandId = newCommand.id;
      return await this.orderRepository.create(order);
    }

    order.commandId = command.id;
    return await this.orderRepository.create(order);
  }
}

export { NewOrderHandler };
