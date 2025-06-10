import { User } from "@prisma/client";
import { CreateUserRequestDTO } from "../dtos/request/CreateUserRequestDTO";
import { CreateUserResponseDTO } from "../dtos/response/CreateUserResponseDTO";
import { UserService } from "../services/UserService";
import { Request, Response, NextFunction } from "express";


export class UsersController {
  constructor(private readonly usersService: UserService) {}

async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    const user = await this.usersService.create(req.body);
     res.status(201).json(user);
  }

  async listAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    const users = await this.usersService.listAll();
     res.status(200).json(users);
  }

  async findById(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id } = req.params;
    const user = await this.usersService.findById(id);
     res.status(200).json(user);
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id } = req.params;
    await this.usersService.delete(id);
    res.status(204).send();
  }	

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id } = req.params;
    const user = await this.usersService.update(id, req.body);
     res.status(200).json(user);
  }

  
}
