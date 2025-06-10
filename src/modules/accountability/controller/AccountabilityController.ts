import { Request, Response, NextFunction } from "express";
import { AccountabilityMapper } from "../mappers/AccountabilityMapper";
import { CreateAccountabilityRequestDTO } from "../dtos/request/CreateAccountabilityRequestDTO";
import { UpdateAccountabilityRequestDTO } from "../dtos/request/UpdateAccountabilityRequestDTO";
import { AccountabilityService } from "../service/AccountabilityService";

export class AccountabilityController {
  constructor(private readonly accountabilityService: AccountabilityService) {}

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    const dto: CreateAccountabilityRequestDTO = req.body;

    const record = await this.accountabilityService.create(dto);
    const response = AccountabilityMapper.toResponseDTO(record);

     res.status(201).json(response);
  }

  async listByCondo(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { condominiumId } = req.params;

    const records = await this.accountabilityService.listAllByCondo(condominiumId);
    const response = records.map(AccountabilityMapper.toResponseDTO);

     res.status(200).json(response);
  }

  async findById(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id } = req.params;

    const record = await this.accountabilityService.findById(id);
    const response = AccountabilityMapper.toResponseDTO(record);

     res.status(200).json(response);
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id } = req.params;
    const dto: UpdateAccountabilityRequestDTO = req.body;

    const record = await this.accountabilityService.update(id, dto);
    const response = AccountabilityMapper.toResponseDTO(record);

     res.status(200).json(response);
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id } = req.params;

    await this.accountabilityService.delete(id);

     res.status(204).send();
  }
}
