import { Request, Response } from "express";

class EnsureAuthenticate {
  async execute(request: Request, response: Response): Promise<void> {}
}

export { EnsureAuthenticate };
