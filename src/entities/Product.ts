import {
  Column,
  Entity,
  JoinColumn,
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

  @Column()
  price: number;

  @Column()
  id_category: number;

  @OneToOne(() => Category, (category) => category.id, { eager: true })
  @JoinColumn({ name: "id_category" })
  category: Category;
}
