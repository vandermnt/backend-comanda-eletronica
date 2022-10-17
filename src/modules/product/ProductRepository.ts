import { Product } from "../../entities/Product";
import { AppDataSource } from "../../database/data-source";

class ProductRepository {
  private readonly productRepository;
  constructor() {
    this.productRepository = AppDataSource.getRepository(Product);
  }
  async getAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async create(product: Product): Promise<void> {
    const productCreated = new Product();
    productCreated.name = product.name;
    productCreated.description = product.description;
    productCreated.price = product.price;
    productCreated.id_category = product.id_category;

    try {
      await this.productRepository.save(productCreated);
    } catch (error) {
      console.error(error);
    }
  }
}

export { ProductRepository };
