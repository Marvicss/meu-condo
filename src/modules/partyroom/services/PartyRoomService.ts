import { AppError } from "../../../common/apiError/AppError";
import { CondominiumNotFoundException } from "../../condominium/exceptions/CondominiumNotFoundException";
import { PrismaCondominiumRepository } from "../../condominium/repository/CondominiumRepository";
import { CreatePartyRoomRequestDTO } from "../dtos/request/CreatePartyRoomRequestDTO";
import { UpdatePartyRoomRequestDTO } from "../dtos/request/UpdatePartyRoomRequestDTO";
import { PartyRoomResponseDTO } from "../dtos/response/PartyRoomResponseDTO";
import { PartyRoomFoundException } from "../exceptions/PartyRoomFoundException";
import { PartyRoomMapper } from "../mappers/PartyRoomMapper";
import { PartyRoomRepository } from "../repository/PartyRoomRepository";

export class PartyRoomService {
  constructor(
    private readonly partyRoomRepository: PartyRoomRepository,
    private readonly condominiumRepository: PrismaCondominiumRepository
  ) {}

  async create(data: CreatePartyRoomRequestDTO): Promise<PartyRoomResponseDTO> {
    const { name, capacity, condominiumId } = data;

    if (capacity <= 0) {
      throw new AppError("Capacity must be greater than 0", 400);
    }

    const existing = await this.partyRoomRepository.findByName(name);
    if (existing && existing.condominiumId === condominiumId) {
      throw new PartyRoomFoundException("Party Room already Exists");
    }

    const condominiumExists = await this.condominiumRepository.findById(condominiumId);
    if(!condominiumExists){
        throw new CondominiumNotFoundException("Condominium not found!");
    }

    const partyRoom = await this.partyRoomRepository.create({
      name,
      description: data.description,
      capacity,
      available: data.available ?? true,
      condominiumId,
    });

    return PartyRoomMapper.toResponseDTO(partyRoom);
  }

  async findAll(): Promise<PartyRoomResponseDTO[]> {
    const rooms = await this.partyRoomRepository.findAll();
    return rooms.map(PartyRoomMapper.toResponseDTO);
  }

  async findById(id: string): Promise<PartyRoomResponseDTO> {
    const room = await this.partyRoomRepository.findById(id);
    if (!room) throw new AppError("Party room not found", 404);
    return PartyRoomMapper.toResponseDTO(room);
  }

  async update(
    id: string,
    data: UpdatePartyRoomRequestDTO
  ): Promise<PartyRoomResponseDTO> {
    const existing = await this.partyRoomRepository.findById(id);
    if (!existing) throw new AppError("Party room not found", 404);

    if (data.capacity !== undefined && data.capacity <= 0) {
      throw new AppError("Capacity must be greater than 0", 400);
    }

    if (data.name && data.name !== existing.name) {
      const roomWithSameName = await this.partyRoomRepository.findByName(
        data.name
      );
      if (
        roomWithSameName &&
        roomWithSameName.condominiumId === existing.condominiumId
      ) {
        throw new AppError(
          "Another party room with this name already exists in the condominium",
          409
        );
      }
    }

    const updated = await this.partyRoomRepository.update(id, data);
    return PartyRoomMapper.toResponseDTO(updated);
  }

  async delete(id: string): Promise<void> {
    const existing = await this.partyRoomRepository.findById(id);
    if (!existing) throw new AppError("Party room not found", 404);
    await this.partyRoomRepository.delete(id);
  }


}
