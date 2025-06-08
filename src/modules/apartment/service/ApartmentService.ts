import { Apartment } from "@prisma/client";
import { ApartmentRequestDTO } from "../dto/request/ApartmentRequestDTO";
import { ApartmentRepository } from "../repository/ApartmentReposotiory";
import { ApartmentNotFoundException } from "../exceptions/ApartmentNotFoundException";


export class ApartmentService{

    constructor(private apartmentRepository: ApartmentRepository){}

    async create(data:ApartmentRequestDTO): Promise<Apartment>{
        return await this.apartmentRepository.create(data);
    }

    async findById(id: string): Promise<Apartment>{
        const apartment = await this.apartmentRepository.findById(id);

        if(!apartment){
            throw new ApartmentNotFoundException("Apartmento Não Encontrado");
        }

        return apartment;
    }

    async findAllByCondominium(condoId: string): Promise<Apartment[]>{
        const apartments = await this.apartmentRepository.findAllByCondominium(condoId);

        if(apartments.length === 0){
            throw new ApartmentNotFoundException("Apartmentos Não Encontrado para o Condominio Informado");
        }

        return apartments;
    }

    async update(id: string, data:ApartmentRequestDTO ): Promise<Apartment>{
        return await this.apartmentRepository.update(id, data);
    }

    async delete(id: string): Promise<boolean>{
        const apartment = await this.findById(id);

        if(!apartment){
            throw new ApartmentNotFoundException("Apartmentos Não Encontrado");
        }

        await this.apartmentRepository.delete(id);

        return true;
    }
}