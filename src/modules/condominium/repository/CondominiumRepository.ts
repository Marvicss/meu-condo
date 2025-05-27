import { PrismaClient, Condominium } from "@prisma/client";
import { CreateCondominiumRequestDTO } from "../dtos/request/CreateCondominiumRequestDTO";
import { UpdateCondominiumRequestDTO } from "../dtos/request/UpdateCondominiumRequestDTO";

export class PrismaCondominiumRepository {
  constructor(private readonly prismaClient: PrismaClient) {}

  async create(data: CreateCondominiumRequestDTO): Promise<Condominium> {
    return await this.prismaClient.condominium.create({ data });
  }

  async findAll(): Promise<Condominium[]> {
    return await this.prismaClient.condominium.findMany();
  }

  async findById(id: string): Promise<Condominium | null> {
    return await this.prismaClient.condominium.findUnique({ where: { id } });
  }

  async update(
    id: string,
    data: UpdateCondominiumRequestDTO
  ): Promise<Condominium> {
    return await this.prismaClient.condominium.update({ where: { id }, data });
  }

  async delete(id: string): Promise<void> {
    await this.prismaClient.condominium.delete({ where: { id } });
  }
}
