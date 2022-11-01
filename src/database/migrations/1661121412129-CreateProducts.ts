import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateProducts1661121412129 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: "product",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "price",
            type: "decimal",
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "id_category",
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
      columnNames: ["id_category"],
      referencedColumnNames: ["id"],
      referencedTableName: "category",
      onDelete: "CASCADE",
    });

    await queryRunner.createForeignKey("product", foreignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("product");
  }
}
