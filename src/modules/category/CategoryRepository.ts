import { DataSource } from "typeorm";
import { AppDataSource } from "../../database/data-source";
import { Category } from "../../entities/Category";

class CategoryRepository {
  private readonly categoryRepository;

  constructor() {
    this.categoryRepository = AppDataSource.getRepository(Category);
  }

  async getAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async create(category: Category): Promise<Category | undefined> {
    try {
      console.log(this.categoryRepository);
      return await this.categoryRepository.save(category);
    } catch (error) {
      console.error(error);
    }
  }
}

export { CategoryRepository };
