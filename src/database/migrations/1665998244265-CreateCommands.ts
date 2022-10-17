import { query } from "express";
import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateCommands1665998244265 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: "command",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
          },
          {
            name: "value",
            type: "double",
          },
          {
            name: "status",
            type: "varchar",
          },
          {
            name: "id_table",
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

    const foreignKey = new TableForeignKey({
      columnNames: ["id_table"],
      referencedColumnNames: ["id"],
      referencedTableName: "table",
      onDelete: "CASCADE",
    });

    await queryRunner.createForeignKey("command", foreignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("command");
  }
}
