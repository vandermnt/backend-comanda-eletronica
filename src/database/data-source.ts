import "reflect-metadata";
import { DataSource } from "typeorm";
import { Category } from "../entities/Category";
import { Product } from "../entities/Product";
import { Table } from "../entities/Table";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "root",
  password: "root",
  database: "db-comanda-eletronica",
  synchronize: true,
  entities: [Category, Product, Table],
  migrations: ["dist/database/migrations/*.js"],
});

export const createConnection = async (): Promise<void> => {
  try {
    await AppDataSource.initialize();
  } catch (error) {
    console.log(error);
  }
};
