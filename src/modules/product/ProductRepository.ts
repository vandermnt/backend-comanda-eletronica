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

  async getByCategory(categoryId: number): Promise<Product[]> {
    console.log(categoryId);

    const products = await this.productRepository.find({
      relations: ["category"],
      where: {
        id_category: categoryId,
      },
    });

    return products;
  }

  async delete(productId: string): Promise<void> {
    await this.productRepository.delete(productId);
    return;
  }

  async update(productId: string, data: any): Promise<void> {
    const product = await this.getById(productId);

    if (!product) {
      throw new Error("Produto não encontrado!");
    }

    product.name = data.name;
    product.description = data.description;
    product.price = data.price;
    product.id_category = data.id_category.id;

    await this.productRepository.save(product);
  }

  async getById(productId: string): Promise<Product | null> {
    return await this.productRepository.findOneBy({ id: parseInt(productId) });
  }
}

export { ProductRepository };
