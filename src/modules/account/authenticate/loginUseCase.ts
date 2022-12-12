import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { injectable } from "tsyringe";
import { UserRepository } from "../../user/UserRepository";

interface User {
  email: string;
  password: string;
}

@injectable()
class LoginUseCase {
  constructor(private userRespository: UserRepository) {}
  async execute({ email, password }: User) {
    const user = await this.userRespository.findByEmail(email);
    if (!user) {
      throw new Error("Email or passowrd incorrect!");
    }

    const passwordIsValid = compare(password, user.password);

    if (!passwordIsValid) {
      throw new Error("Email or passowrd incorrect!");
    }

    const token = sign({}, "0c06985e623594963b73acf465a11bdc", {
      subject: user.id.toString(),
      expiresIn: "1d",
    });

    return {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };
  }
}

export { LoginUseCase };
