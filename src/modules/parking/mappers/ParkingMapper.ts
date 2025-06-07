import { Parking } from "@prisma/client";
import { CreateParkingResponseDTO } from "../dtos/response/ParkingResponseDTO";

export class ParkingMapper {
  static toResponseDTO(parking: Parking): CreateParkingResponseDTO {
    return {
      id: parking.id,
      name: parking.name,
      description: parking.description,
      capacity: parking.capacity,
      available: parking.available,
      condominiumId: parking.condominiumId,
      createdAt: parking.createdAt,
      updatedAt: parking.updatedAt,
    };
  }
}