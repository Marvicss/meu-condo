import { Request, Response, NextFunction } from "express";
import { CondominiumResponseDTO } from "../dtos/response/CondominiumResponseDTO";
import { CondominiumService } from "../services/CondominiumService";
import { CondominiumMapper } from "../mappers/CondominiumMapper";
import { CreateCondominiumRequestDTO } from "../dtos/request/CreateCondominiumRequestDTO";
import { UpdateCondominiumRequestDTO } from "../dtos/request/UpdateCondominiumRequestDTO";

export class CondominiumsController {
  constructor(private readonly condominiumService: CondominiumService) {}

  async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<CondominiumResponseDTO>> {
    const created = await this.condominiumService.create(
      req.body as CreateCondominiumRequestDTO
    );
    return res
      .status(201)
      .json(CondominiumMapper.toCondominiumResponseDTO(created));
  }

  async listAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<CondominiumResponseDTO[]>> {
    const result = await this.condominiumService.findAll();
    return res
      .status(200)
      .json(result.map(CondominiumMapper.toCondominiumResponseDTO));
  }

  async findById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<CondominiumResponseDTO>> {
    const { id } = req.params;
    const result = await this.condominiumService.findById(id);
    return res
      .status(200)
      .json(CondominiumMapper.toCondominiumResponseDTO(result));
  }

  async update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<CondominiumResponseDTO>> {
    const { id } = req.params;
    const updated = await this.condominiumService.update(
      id,
      req.body as UpdateCondominiumRequestDTO
    );
    return res
      .status(200)
      .json(CondominiumMapper.toCondominiumResponseDTO(updated));
  }

  async delete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<void>> {
    const { id } = req.params;
    await this.condominiumService.delete(id);
    return res.status(204).send();
  }
}
