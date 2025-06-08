import { Accountability } from "@prisma/client";
import { CreateAccountabilityRequestDTO } from "../dtos/request/CreateAccountabilityRequestDTO";
import { PrismaAccountabilityRepository } from "../repository/PrismaAccountabilityRepository ";
import { AccountabilityNotFoundException } from "../exceptions/AccountabilityNotFoundException";
import { UpdateAccountabilityRequestDTO } from "../dtos/request/UpdateAccountabilityRequestDTO";


export class AccountabilityService {
  constructor(
    private readonly accountabilityRepository: PrismaAccountabilityRepository
  ) {}

  async create(data: CreateAccountabilityRequestDTO): Promise<Accountability> {
    return await this.accountabilityRepository.create(data);
  }

  async listAllByCondo(condominiumId: string): Promise<Accountability[]> {
    return await this.accountabilityRepository.findAllByCondominium(condominiumId);
  }

  async findById(id: string): Promise<Accountability> {
    const record = await this.accountabilityRepository.findById(id);
    if (!record) {
      throw new AccountabilityNotFoundException("Registro de prestação de contas não encontrado.");
    }
    return record;
  }

  async update(id: string, data: UpdateAccountabilityRequestDTO): Promise<Accountability> {
    const existing = await this.accountabilityRepository.findById(id);
    if (!existing) {
      throw new AccountabilityNotFoundException("Registro de prestação de contas não encontrado.");
    }

    return await this.accountabilityRepository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    const existing = await this.accountabilityRepository.findById(id);
    if (!existing) {
      throw new AccountabilityNotFoundException("Registro de prestação de contas não encontrado.");
    }

    await this.accountabilityRepository.delete(id);
  }
}
