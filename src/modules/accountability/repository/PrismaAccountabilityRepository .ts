import { Accountability, Condominium, PrismaClient } from "@prisma/client";
import { CreateAccountabilityRequestDTO } from "../dtos/request/CreateAccountabilityRequestDTO";
import { UpdateAccountabilityRequestDTO } from "../dtos/request/UpdateAccountabilityRequestDTO";

export class PrismaAccountabilityRepository  {
  constructor(private prisma: PrismaClient) {}

  async create(data: CreateAccountabilityRequestDTO): Promise<Accountability> {
    return await this.prisma.accountability.create({ data });
  }

  async findAllByCondominium(condoId: string) {
    return this.prisma.accountability.findMany({
      where: { condominiumId: condoId },
    });
  }

  async findById(id: string) {
    return this.prisma.accountability.findUnique({ where: { id } });
  }

  async delete(id: string) {
    await this.prisma.accountability.delete({ where: { id } });
  }

  async update(id: string, data: UpdateAccountabilityRequestDTO): Promise<Accountability> {
    return this.prisma.accountability.update({
      where: { id },
      data,
    });
  }
}
