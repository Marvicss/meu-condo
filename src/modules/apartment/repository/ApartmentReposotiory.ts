import { Apartment, PrismaClient } from "@prisma/client";
import { ApartmentRequestDTO } from "../dto/request/ApartmentRequestDTO";



export class ApartmentRepository{

    constructor(private prisma: PrismaClient){};

    async create(data: ApartmentRequestDTO): Promise<Apartment>{
        return await this.prisma.apartment.create({data});
    }

    async findById(id: string): Promise<Apartment | null>{
       return await this.prisma.apartment.findUnique({where: {id}})
    }

    async findAllByCondominium(condoId: string): Promise<Apartment[]> {
        return this.prisma.apartment.findMany({where: { condominiumId: condoId },
    });
    }

    async update(id: string, data: ApartmentRequestDTO): Promise<Apartment> {
        return this.prisma.apartment.update({
            where: { id },
            data,
        });
    }

    async delete(id: string): Promise<void> {
         await this.prisma.apartment.delete({ where: { id } });
    }


}