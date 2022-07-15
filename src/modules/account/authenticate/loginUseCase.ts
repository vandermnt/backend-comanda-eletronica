import { sign } from "jsonwebtoken";

interface User {
  email: string;
  password: string;
}

class LoginUseCase {
  async execute({ email, password }: User) {
    const token = sign({}, "teste", {
      subject: "teste",
      expiresIn: "1d",
    });

    return token;
  }
}

export { LoginUseCase };
