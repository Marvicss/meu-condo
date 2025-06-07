import { IsOptional, IsString, IsInt, IsBoolean, IsUUID } from "class-validator";

export class UpdatePartyRoomRequestDTO {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsInt()
  capacity?: number;

  @IsOptional()
  @IsBoolean()
  available?: boolean;

  @IsOptional()
  @IsUUID()
  condominiumId?: string;
}
