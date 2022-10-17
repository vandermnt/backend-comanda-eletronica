import {
  Column,
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateOrders1665998738180 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: "order",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
          },
          {
            name: "qtde_product",
            type: "int",
          },
          {
            name: "note",
            type: "varchar",
          },
          {
            name: "value",
            type: "decimal",
          },
          {
            name: "id_command",
            type: "int",
          },
          {
            name: "id_table",
            type: "int",
          },
          {
            name: "id_product",
            type: "int",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );

    const foreignKeyCommand = new TableForeignKey({
      columnNames: ["id_command"],
      referencedColumnNames: ["id"],
      referencedTableName: "command",
      onDelete: "CASCADE",
    });

    await queryRunner.createForeignKey("order", foreignKeyCommand);

    const foreignKeyTable = new TableForeignKey({
      columnNames: ["id_table"],
      referencedColumnNames: ["id"],
      referencedTableName: "table",
      onDelete: "CASCADE",
    });

    await queryRunner.createForeignKey("order", foreignKeyTable);

    const foreignKeyProduct = new TableForeignKey({
      columnNames: ["id_product"],
      referencedColumnNames: ["id"],
      referencedTableName: "product",
      onDelete: "CASCADE",
    });

    await queryRunner.createForeignKey("order", foreignKeyProduct);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("order");
  }
}
