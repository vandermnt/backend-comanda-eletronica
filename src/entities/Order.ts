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

  @Column()
  value: number;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => Command, (command) => command.id)
  @JoinColumn()
  id_command: number;

  @ManyToOne(() => Table, (table) => table.id)
  @JoinColumn()
  id_table: number;

  @ManyToOne(() => Product, (product) => product.id)
  @JoinColumn()
  id_product: number;
}
