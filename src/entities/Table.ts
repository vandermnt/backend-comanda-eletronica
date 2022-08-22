import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Table {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: boolean;

  @Column()
  number: number;
}
