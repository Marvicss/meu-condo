import { IsString, IsOptional, IsInt, IsBoolean, IsUUID, Min, MaxLength } from "class-validator";
import { Type } from "class-transformer";

export class CreateParkingRequestDTO {
  @IsString({ message: "O nome deve ser uma string" })
  @MaxLength(100, { message: "O nome deve ter no máximo 100 caracteres" })
  name: string;

  @IsOptional()
  @IsString({ message: "A descrição deve ser uma string" })
  @MaxLength(255, { message: "A descrição deve ter no máximo 255 caracteres" })
  description?: string;

  @Type(() => Number)
  @IsInt({ message: "A capacidade deve ser um número inteiro" })
  @Min(1, { message: "A capacidade deve ser pelo menos 1" })
  capacity: number;

  @IsOptional()
  @Type(() => Boolean)
  @IsBoolean({ message: "O campo available deve ser booleano" })
  available?: boolean;

  @IsUUID("4", { message: "O condominiumId deve ser um UUID válido" })
  condominiumId: string;
}