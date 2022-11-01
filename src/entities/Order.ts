import {
  Column,
  CreateDateColumn,
  Double,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Command } from "./Command";
import { Product } from "./Product";
import { Table } from "./Table";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  qtde_product: number;

  @Column()
  note: string;

  @Column("decimal", { precision: 5, scale: 2 })
  value: number;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => Command, (command) => command.id)
  @JoinColumn({ name: "id_command" })
  id_command: number;

  @ManyToOne(() => Table, (table) => table.id)
  @JoinColumn({ name: "id_table" })
  id_table: number;

  @ManyToOne(() => Product, (product) => product.id)
  @JoinColumn({ name: "id_product" })
  id_product: number;
}
