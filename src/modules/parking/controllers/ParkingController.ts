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
  ): Promise<void> {
    const parking = await this.parkingService.create(
      req.body as CreateParkingRequestDTO
    );
    res.status(201).json(parking);
  }

    async listAll(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        const parkings = await this.parkingService.findAll();
        res.status(200).json(parkings);
    }

    async findById(req: Request, res: Response, next: NextFunction): Promise<void> {
        const parking = await this.parkingService.findById(req.params.id);
        res.status(200).json(parking);
    }

    async update(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        const parking = await this.parkingService.update(
            req.params.id,
            req.body as CreateParkingRequestDTO
        );
        res.status(200).json(parking);
    }

    async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
        await this.parkingService.delete(req.params.id);
        res.status(204).send();
    }

    
}
