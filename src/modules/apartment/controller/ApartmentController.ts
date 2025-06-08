import { ApartmentRequestDTO } from "../dto/request/ApartmentRequestDTO";
import { ApartmentMapper } from "../mappers/ApartmentMapper";
import { ApartmentService } from "../service/ApartmentService";
import { Request, Response, NextFunction } from "express";



export class ApartmentController{
    constructor(private apartmentService : ApartmentService){};


    async create(req: Request, res: Response, next: NextFunction ){
        const body: ApartmentRequestDTO = req.body;
        const apartment = await this.apartmentService.create(body);
        const response = ApartmentMapper.toResponseDTO(apartment);

        return res.status(201).json(response)
    }

    async findAllByCondominium(req: Request, res: Response, next: NextFunction ){
        const {condoId} = req.params;

        const apartments = await this.apartmentService.findAllByCondominium(condoId);
        const response = apartments.map(ApartmentMapper.toResponseDTO)

        return res.status(200).json(response)
    }

    async findById(req: Request, res: Response, next: NextFunction ){
        const { id } = req.params;
        const apartment = await this.apartmentService.findById(id);
        const response = ApartmentMapper.toResponseDTO(apartment);

        return res.status(200).json(response);
    }

    async update(req: Request, res: Response, next: NextFunction ){
        const { id }= req.params;
        const body : ApartmentRequestDTO = req.body;

        const updatedApartment = await this.apartmentService.update(id, body);
        const response = ApartmentMapper.toResponseDTO(updatedApartment);

        return res.status(200).json(response);
    }

    async delete(req: Request, res: Response, next: NextFunction ){
        const { id } = req.params;
        await this.apartmentService.delete(id);

        return res.status(204).json({message : "Usuario excluido com sucesso"})

    }
}