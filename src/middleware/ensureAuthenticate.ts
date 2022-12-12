import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserRepository } from "../modules/user/UserRepository";

export async function ensureAuthenticate(
  request: Request,
  _response: Response,
  next: NextFunction
): Promise<void> {
  const authHeader = request.headers.authorization as string;

  if (!authHeader) {
    next(new Error("Token missing"));
  }
  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, "0c06985e623594963b73acf465a11bdc");

    const usersRepository = new UserRepository();

    const user = await usersRepository.getById(user_id as string);

    if (!user) {
      throw new Error("User does not exists");
    }

    next();
  } catch (error) {
    next(new Error("Invalid token"));
  }
}
