import { PrismaClient, User } from "@prisma/client";
import { CreateUserRequestDTO } from "../dtos/request/CreateUserRequestDTO";
import { UpdateUserRequestDTO } from "../dtos/request/UpdateUserRequestDTO";

export class UserRepository {
  constructor(private readonly prismaClient: PrismaClient) {}

  async createUser(data: CreateUserRequestDTO): Promise<User> {
    return await this.prismaClient.user.create({
      data,
    });
  }

  async findById(id: string): Promise<User | null> {
    return await this.prismaClient.user.findUnique({
      where: { id },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.prismaClient.user.findUnique({
      where: { email },
    });
  }

  async findAll() {
    return this.prismaClient.user.findMany();
  }

  async delete(id: string) {
    await this.prismaClient.user.delete({ where: { id } });
  }

  async findByUsername(username: string): Promise<User | null> {
    return await this.prismaClient.user.findUnique({
      where: {
        username
      },
    });
  }


  async update(id: string, data: UpdateUserRequestDTO): Promise<User> {
    return await this.prismaClient.user.update({
      where: { id },
      data,
    });
  }
}
