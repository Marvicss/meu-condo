import { AuthService } from "../service/AuthService";
import { Request, Response, NextFunction } from "express";



export class AuthController {
  constructor(private readonly authService: AuthService) {}

  async login(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    const result = await this.authService.login(email, password);
    return res.status(200).json(result);
  }
}
