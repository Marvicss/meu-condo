import { Request, Response, NextFunction } from "express";
import { PartyRoomService } from "../services/PartyRoomService";
import { CreatePartyRoomRequestDTO } from "../dtos/request/CreatePartyRoomRequestDTO";
import { UpdatePartyRoomRequestDTO } from "../dtos/request/UpdatePartyRoomRequestDTO";
import { PartyRoomResponseDTO } from "../dtos/response/PartyRoomResponseDTO";
import { PartyRoomMapper } from "../mappers/PartyRoomMapper";

export class PartyRoomsController {
  constructor(private readonly partyRoomService: PartyRoomService) {}

  async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const created = await this.partyRoomService.create(
      req.body as CreatePartyRoomRequestDTO
    );
    res
      .status(201)
      .json(PartyRoomMapper.toResponseDTO(created));
  }

  async listAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const rooms = await this.partyRoomService.findAll();
    res
      .status(200)
      .json(rooms.map(PartyRoomMapper.toResponseDTO));
  }

  async findById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;
    const room = await this.partyRoomService.findById(id);
    res
      .status(200)
      .json(PartyRoomMapper.toResponseDTO(room));
  }

  async update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;
    const updated = await this.partyRoomService.update(
      id,
      req.body as UpdatePartyRoomRequestDTO
    );
    res
      .status(200)
      .json(PartyRoomMapper.toResponseDTO(updated));
  }

  async delete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id } = req.params;
    await this.partyRoomService.delete(id);
    res.status(204).send();
  }
}
