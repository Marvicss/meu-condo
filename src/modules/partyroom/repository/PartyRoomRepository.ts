import { PartyRoom, PrismaClient } from "@prisma/client";

export class PartyRoomRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(
    data: Omit<PartyRoom, "id" | "createdAt" | "updatedAt">
  ): Promise<PartyRoom> {
    return this.prisma.partyRoom.create({ data });
  }

  async findAll(): Promise<PartyRoom[]> {
    return this.prisma.partyRoom.findMany();
  }

  async findById(id: string): Promise<PartyRoom | null> {
    return this.prisma.partyRoom.findUnique({ where: { id } });
  }

  async update(id: string, data: Partial<PartyRoom>): Promise<PartyRoom> {
    return this.prisma.partyRoom.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.partyRoom.delete({ where: { id } });
  }

  async findByName(name: string): Promise<PartyRoom | null> {
    return this.prisma.partyRoom.findFirst({ where: { name } });
  }
}
