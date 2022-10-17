import {
  Column,
  CreateDateColumn,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Command } from "./Command";
import { Product } from "./Product";
import { Table } from "./Table";

export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  qtde_product: number;

  @Column()
  note: string;

  @Column()
  value: number;

  @CreateDateColumn()
  created_at: Date;

  @OneToOne(() => Command, (command) => command.id)
  @JoinColumn()
  id_command: number;

  @OneToOne(() => Table, (table) => table.id)
  @JoinColumn()
  id_table: number;

  @OneToOne(() => Product, (product) => product.id)
  @JoinColumn()
  id_product: number;
}
