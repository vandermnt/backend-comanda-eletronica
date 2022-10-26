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

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Table, (table) => table.id)
  @JoinColumn({ name: "id_table" })
  id_table: number;
}
