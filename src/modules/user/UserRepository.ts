import { hash } from "bcrypt";
import { AppDataSource } from "../../database/data-source";
import { User } from "../../entities/User";

class UserRepository {
  private readonly userRepository;
  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }
  async getAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async create(user: User): Promise<void> {
    const passwordHash = await hash(user.password, 8);

    const userCreated = new User();
    userCreated.name = user.name;
    userCreated.email = user.email;
    userCreated.password = passwordHash;
    userCreated.is_admin = user.is_admin;

    try {
      await this.userRepository.save(userCreated);
    } catch (error) {
      console.error(error);
    }
  }

  async delete(userId: string): Promise<void> {
    await this.userRepository.delete(userId);
    return;
  }

  async update(userId: string, data: any): Promise<void> {
    const user = await this.getById(userId);

    if (!user) {
      throw new Error("Usuário não encontrado!");
    }

    user.name = data.name;
    user.email = data.email;
    user.password = data.password;
    user.is_admin = data.is_admin.id;

    await this.userRepository.save(user);
  }

  async getById(productId: string): Promise<User | null> {
    return await this.userRepository.findOneBy({ id: parseInt(productId) });
  }

  async findByEmail(email: any): Promise<User | null> {
    const user = await this.userRepository.findOneBy({ email } as any);

    return user;
  }
}

export { UserRepository };
