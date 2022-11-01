import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Category } from "./Category";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column("decimal", { precision: 5, scale: 2 })
  price: number;

  @Column()
  id_category: number;

  @ManyToOne(() => Category, (category) => category.id, { eager: true })
  @JoinColumn({ name: "id_category" })
  category: Category;
}
