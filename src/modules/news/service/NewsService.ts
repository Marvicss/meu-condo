import { News } from "@prisma/client";
import { NewsRequestDTO } from "../dtos/NewsRequestDTO";
import { NewsRepository } from "../repository/NewsRepository";

export class NewsService{

    constructor(private newsRepository : NewsRepository){};


    async create(data: NewsRequestDTO): Promise<News>{
        return await this.newsRepository.create(data);
    }

    async findAll(): Promise<News[]>{
        return await this.newsRepository.findAll();
    }

    async findById(id: string):Promise<News>{
        const news = await this.newsRepository.findById(id);

        if(!news){
            throw new Error("Noticia nao encontrada");
        }

        return news;
    }

    async findByCondo(condoId: string):Promise<News[]>{
        return await this.newsRepository.findByCondo(condoId);
    }

    async update(id: string, data: NewsRequestDTO): Promise<News>{
        return await this.newsRepository.update(id, data);
    }

    async delete(id: string): Promise<boolean>{
        const news = await this.findById(id);

        if(news){
            await this.newsRepository.delete(id);
            return true;
        }

        return false;
        
    }
}