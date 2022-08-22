import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTables1661147735797 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: "table",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
          },
          {
            name: "status",
            type: "boolean",
          },
          {
            name: "number",
            type: "int",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable("table");
  }
}
