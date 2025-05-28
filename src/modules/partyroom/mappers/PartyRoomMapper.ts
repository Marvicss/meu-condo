import { PartyRoom } from "@prisma/client";
import { PartyRoomResponseDTO } from "../dtos/response/PartyRoomResponseDTO";

export class PartyRoomMapper {
  static toResponseDTO(room: PartyRoom): PartyRoomResponseDTO {
    return {
      id: room.id,
      name: room.name,
      description: room.description,
      capacity: room.capacity,
      available: room.available,
      condominiumId: room.condominiumId,
      createdAt: room.createdAt,
      updatedAt: room.updatedAt,
    };
  }
}
