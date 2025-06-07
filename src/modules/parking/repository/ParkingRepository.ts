import { Parking, PrismaClient } from "@prisma/client";
import { CreateParkingRequestDTO } from "../dtos/request/CreateParkingRequestDTO";

export class ParkingRepository {
    constructor(private readonly prisma: PrismaClient) {}

    async create(data: CreateParkingRequestDTO): Promise<Parking> {
       return await this.prisma.parking.create({
            data,
        });
    }

    async findById(id: string): Promise<Parking | null> {
        return await this.prisma.parking.findUnique({
            where: { id },
        });
    }

    async findAll(): Promise<Parking[]> {
        return await this.prisma.parking.findMany();
    }

    async delete(id: string): Promise<void> {
        await this.prisma.parking.delete({
            where: { id },
        });
    }
    async update(id: string, data: CreateParkingRequestDTO): Promise<Parking> {
        return await this.prisma.parking.update({
            where: { id },
            data,
        });
    }

    
}