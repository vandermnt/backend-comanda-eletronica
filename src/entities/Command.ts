import {
  Column,
  CreateDateColumn,
  Double,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Table } from "./Table";

export class Command {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: Double;

  @Column()
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToOne(() => Table, (table) => table.id)
  @JoinColumn()
  id_table: number;
}
