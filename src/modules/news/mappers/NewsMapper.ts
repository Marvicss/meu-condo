import { News } from "@prisma/client";
import { NewsResponseDTO } from "../dtos/NewsResponseDTO";

export class NewsMapper{
    static toResponse(data : News): NewsResponseDTO{
        return{
            id: data.id,
            condominiumId: data.condominiumId,
            message: data.message,
            type: data.type,
            createdAt: data.createdAt
        }
    }
}