import { IsNumber, IsUUID } from "class-validator";

export class ApartmentRequestDTO {

    @IsUUID()
    condominiumId: string;

    @IsNumber()
    floor: number;

    @IsNumber()
    number : number;
}