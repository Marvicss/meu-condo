
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { PrismaCondominiumRepository } from '../repository/CondominiumRepository';
import { CreateCondominiumRequestDTO } from '../dtos/request/CreateCondominiumRequestDTO';
import { UpdateCondominiumRequestDTO } from '../dtos/request/UpdateCondominiumRequestDTO';
import { CondominiumNotFoundException } from '../exceptions/CondominiumNotFoundException';
import { CondominiumFoundException } from '../exceptions/CondominiumFoundException';

export class CondominiumService {

    constructor(private readonly condominiumRepository: PrismaCondominiumRepository){}

  async create(data: CreateCondominiumRequestDTO) {
    const dto = plainToInstance(CreateCondominiumRequestDTO, data);
    const errors = await validate(dto);
    if (errors.length > 0) {
      throw { status: 400, message: 'Dados inválidos', errors };
    }

    // Verificações de unicidade
    const existingByCnpj = await this.condominiumRepository.findAll();
    if (existingByCnpj.some(c => c.cnpj === data.cnpj)) {
      throw new CondominiumFoundException("Já existe um condomínio com esse cnpj!");
    }

    if (existingByCnpj.some(c => c.email === data.email)) {
      throw new CondominiumFoundException("Já existe um condomínio com esse e-mail!");
    }

    if (existingByCnpj.some(c => c.phoneNumber === data.phoneNumber)) {
      throw new CondominiumFoundException("Já existe um condomínio com esse número de telefone!");
    }

    return await this.condominiumRepository.create(data);
  }

  async findAll() {
    return await this.condominiumRepository.findAll();
  }

  async findById(id: string) {
    const condominium = await this.condominiumRepository.findById(id);
    if (!condominium) {
      throw new CondominiumNotFoundException("Condomínio não encontrado");
    }
    return condominium;
  }

  async update(id: string, data: UpdateCondominiumRequestDTO) {
    // Validação
    const dto = plainToInstance(UpdateCondominiumRequestDTO, data);
    const errors = await validate(dto);
    if (errors.length > 0) {
      throw { status: 400, message: 'Dados inválidos', errors };
    }

    const existing = await this.condominiumRepository.findById(id);
    if (!existing) {
      throw new CondominiumNotFoundException("Condomínio não encontrado");
    }

    return await this.condominiumRepository.update(id, data);
  }

  async delete(id: string) {
    const existing = await this.condominiumRepository.findById(id);
    if (!existing) {
      throw new CondominiumNotFoundException("Condomínio não encontrado");
    }

    await this.condominiumRepository.delete(id);
    return { message: 'Condomínio excluído com sucesso' };
  }
}
