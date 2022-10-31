import {
  Column,
  CreateDateColumn,
  Double,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Table } from "./Table";

@Entity()
export class Command {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: number;

  @Column()
  status: string;

  @Column()
  id_table: number;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => Table, (table) => table.id)
  @JoinColumn({ name: "id_table" })
  table: Table;
}
