import { CreateParkingRequestDTO } from "../dtos/request/CreateParkingRequestDTO";
import { CreateParkingResponseDTO } from "../dtos/response/ParkingResponseDTO";
import { ParkingService } from "../services/ParkingService";
import { Request, Response, NextFunction } from "express";

export class ParkingController {
  constructor(private readonly parkingService: ParkingService) {}

  async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<CreateParkingResponseDTO>> {
    const parking = await this.parkingService.create(
      req.body as CreateParkingRequestDTO
    );
    return res.status(201).json(parking);
  }

    async listAll(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response<CreateParkingResponseDTO[]>> {
        const parkings = await this.parkingService.findAll();
        return res.status(200).json(parkings);
    }

    async findById(req: Request, res: Response, next: NextFunction): Promise<Response<CreateParkingResponseDTO>> {
        const parking = await this.parkingService.findById(req.params.id);
        return res.status(200).json(parking);
    }

    async update(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response<CreateParkingResponseDTO>> {
        const parking = await this.parkingService.update(
            req.params.id,
            req.body as CreateParkingRequestDTO
        );
        return res.status(200).json(parking);
    }

    async delete(req: Request, res: Response, next: NextFunction): Promise<Response<void>> {
        await this.parkingService.delete(req.params.id);
        return res.status(204).send();
    }

    
}
