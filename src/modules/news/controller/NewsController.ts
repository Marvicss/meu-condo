import { NextFunction, Request, Response } from "express";
import { NewsService } from "../service/NewsService";
import { NewsRequestDTO } from "../dtos/NewsRequestDTO";
import { NewsMapper } from "../mappers/NewsMapper";

export class NewsController{
    constructor(private newsService: NewsService){}


    async create(req: Request, res: Response, next: NextFunction): Promise<void>{
        const body : NewsRequestDTO = req.body;
        const news = await this.newsService.create(body);
        const response = NewsMapper.toResponse(news);

        res.status(201).json(response);
    }

    async findAll(req: Request, res: Response, next: NextFunction): Promise<void>{
        const newses = await this.newsService.findAll();
        const response = newses.map(NewsMapper.toResponse);

        res.status(200).json(newses);
    }

    async findById(req: Request, res: Response, next: NextFunction): Promise<void>{
        const {id} = req.params;
        const news = await this.newsService.findById(id);
        const response = NewsMapper.toResponse(news);

        res.status(200).json(response);
    }

        async findByCondo(req: Request, res: Response, next: NextFunction): Promise<void>{
        const {condoId} = req.params;
        const news = await this.newsService.findByCondo(condoId);
        const response = news.map(NewsMapper.toResponse)

        res.status(200).json(response);
    }



    async update(req: Request, res: Response, next:NextFunction):Promise<void>{
        const {id} = req.params;
        const body : NewsRequestDTO = req.body;
        const news = await this.newsService.update(id,body);
        const response = NewsMapper.toResponse(news);

        res.status(200).json(response);
    }

    async delete(req: Request, res: Response, next: NextFunction):Promise<void>{
        const {id} = req.params;
        const deleted = await this.newsService.delete(id);

        if(deleted){
            res.status(204).json({message: "Noticia Excluida com Sucesso"})
        }

        res.status(404).json({message: "Nao encontrado"})
    }
}