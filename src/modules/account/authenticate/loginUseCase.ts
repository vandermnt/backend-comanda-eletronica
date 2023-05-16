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
    if (!email || !password) {
      throw new Error("Missing params email or password");
    }

    const user = await this.userRespository.findByEmail(email);
    if (!user) {
      throw new Error("Email or password incorrect!");
    }

    const passwordIsValid = compare(password, user.password);

    if (!passwordIsValid) {
      throw new Error("Email or password incorrect!");
    }

    const token = sign({}, "0c06985e623594963b73acf465a11bdc", {
      subject: user.id.toString(),
      expiresIn: "1d",
    });
    console.log(token);
    console.log(user);
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
