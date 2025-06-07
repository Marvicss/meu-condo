import { IsNotEmpty, IsString, IsInt, IsBoolean, IsUUID, IsOptional } from "class-validator";

export class CreatePartyRoomRequestDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsInt()
  capacity: number;

  @IsOptional()
  @IsBoolean()
  available?: boolean;

  @IsNotEmpty()
  @IsUUID()
  condominiumId: string;
}
