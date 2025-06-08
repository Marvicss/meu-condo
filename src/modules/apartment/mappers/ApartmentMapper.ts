import { Apartment } from "@prisma/client";
import { ApartmentResponseDTO } from "../dto/response/ApartamentResponseDTO";


export class ApartmentMapper{
    static toResponseDTO(apartment: Apartment): ApartmentResponseDTO{
        return {
            id: apartment.id,
            condominiumId: apartment.condominiumId,
            number: apartment.number,
            floor: apartment.floor,
            createdAt: apartment.createdAt
        }
    }
}