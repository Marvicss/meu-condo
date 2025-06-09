import { AuthService } from "../service/AuthService";
import { Request, Response, NextFunction } from "express";



export class AuthController {
  constructor(private readonly authService: AuthService) {}

  async login(req: Request, res: Response, next: NextFunction):Promise<void> {
    const { email, password } = req.body;
    const result = await this.authService.login(email, password);
    res.status(200).json(result);
  }
}
