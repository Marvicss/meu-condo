import { News, PrismaClient } from "@prisma/client";
import { NewsRequestDTO } from "../dtos/NewsRequestDTO";


export class NewsRepository {

    constructor(private prismaClient: PrismaClient){};

    async create(data: NewsRequestDTO): Promise<News>{
        return await this.prismaClient.news.create({data});
    }

    async findAll(): Promise<News[]>{
        return await this.prismaClient.news.findMany();
    }

    async findById(id: string): Promise<News | null>{
        return await this.prismaClient.news.findUnique({where: {id}});
    }

    async findByCondo(condoId: string):Promise<News[]>{
        return await this.prismaClient.news.findMany({where: {condominiumId: condoId}})
    }

    async update(id: string, data: NewsRequestDTO): Promise<News>{
        return await this.prismaClient.news.update({where: {id}, data});
    }

    async delete(id: string): Promise<void>{
        await this.prismaClient.news.delete({where: {id}});
    }
}