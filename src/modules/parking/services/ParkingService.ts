import { CondominiumNotFoundException } from "../../condominium/exceptions/CondominiumNotFoundException";
import { PrismaCondominiumRepository } from "../../condominium/repository/CondominiumRepository";
import { CreateParkingRequestDTO } from "../dtos/request/CreateParkingRequestDTO";
import { CreateParkingResponseDTO } from "../dtos/response/ParkingResponseDTO";
import { ParkingNotFoundException } from "../exceptions/ParkingNotFoundException";
import { ParkingMapper } from "../mappers/ParkingMapper";
import { ParkingRepository } from "../repository/ParkingRepository";

export class ParkingService {
  constructor(
    private readonly parkingRepository: ParkingRepository,
    private readonly condominuimRepository: PrismaCondominiumRepository
  ) {}

  async create(
    data: CreateParkingRequestDTO
  ): Promise<CreateParkingResponseDTO> {
    const parking = await this.parkingRepository.create(data);
    return ParkingMapper.toResponseDTO(parking);
  }

  async findById(id: string): Promise<CreateParkingResponseDTO | null> {
    const parking = await this.parkingRepository.findById(id);
    if (!parking) {
      throw new ParkingNotFoundException("Parking not found!");
    }

    return parking ? ParkingMapper.toResponseDTO(parking) : null;
  }

  async findAll(): Promise<CreateParkingResponseDTO[]> {
    const parkings = await this.parkingRepository.findAll();
    return parkings.map(ParkingMapper.toResponseDTO);
  }

  async delete(id: string): Promise<void> {
    const parking = await this.parkingRepository.findById(id);
    if (!parking) {
      throw new ParkingNotFoundException("Parking not found!");
    }

    await this.parkingRepository.delete(id);
  }

  async update(
    id: string,
    data: CreateParkingRequestDTO
  ): Promise<CreateParkingResponseDTO> {
    const parking = await this.parkingRepository.findById(id);

    if (!parking) {
      throw new ParkingNotFoundException("Parking not found!");
    }

    const condominumExists = await this.condominuimRepository.findById(
      data.condominiumId,
    );

    if(!condominumExists) {
      throw new CondominiumNotFoundException("Condominium not found!");
    }

        const updatedparking = await this.parkingRepository.update(id, data);

    return ParkingMapper.toResponseDTO(updatedparking);
  }
}
