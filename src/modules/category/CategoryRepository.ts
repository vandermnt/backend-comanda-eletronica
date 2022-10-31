import { injectable } from "tsyringe";
import { DataSource } from "typeorm";
import { AppDataSource } from "../../database/data-source";
import { Category } from "../../entities/Category";
import { Product } from "../../entities/Product";
import { ProductRepository } from "../product/ProductRepository";

@injectable()
class CategoryRepository {
  private readonly categoryRepository;

  constructor(private productRepository: ProductRepository) {
    this.categoryRepository = AppDataSource.getRepository(Category);
  }

  async getAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async create(category: Category): Promise<Category | undefined> {
    try {
      return await this.categoryRepository.save(category);
    } catch (error) {
      console.log(error);
      console.error(error);
    }
  }

  async delete(categoryId: number): Promise<void> {
    const productWithCategory = await this.productRepository.getByCategory(
      categoryId
    );

    if (productWithCategory.length > 0) {
      throw new Error(
        "Não foi possível excluir categoria. Pois existem produtos vinculados"
      );
    }
    await this.categoryRepository.delete(categoryId);
    return;
  }

  async update(categoryId: string, data: any): Promise<void> {
    const category = await this.getById(categoryId);

    if (!category) {
      throw new Error("Categoria não encontrada!");
    }

    category.name = data.name;

    await this.categoryRepository.save(category);
  }

  async getById(categoryId: string): Promise<Category | null> {
    return await this.categoryRepository.findOneBy({
      id: parseInt(categoryId),
    });
  }
}

export { CategoryRepository };
