import { injectable } from "tsyringe";
import { OrderRepository } from "./OrderRepository";

@injectable()
class NewOrderHandler {
  constructor(private orderRepository: OrderRepository) {}

  async handler(order: any): Promise<any> {
    const { id_table } = order;

    const command = await this.orderRepository.getCommandByTable(id_table);

    console.log(`comandaaaaaaaaaaa ${JSON.stringify(command)}`);

    if (!command?.id) {
      console.log("aqui entreiiiiiiiiii");
      const newCommand = await this.orderRepository.createCommand(id_table);
      order.commandId = newCommand.id;
      return await this.orderRepository.create(order);
    }

    order.commandId = command.id;
    console.log(order.commandId);

    return await this.orderRepository.create(order);
  }
}

export { NewOrderHandler };
