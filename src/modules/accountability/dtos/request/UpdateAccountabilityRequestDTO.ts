import {
  IsOptional,
  IsString,
  IsNotEmpty,
  IsNumber,
  IsUUID,
  IsIn,
  IsDateString,
} from "class-validator";

export class UpdateAccountabilityRequestDTO {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  amount?: number;

  @IsOptional()
  @IsIn(["INCOME", "EXPENSE"])
  type?: "INCOME" | "EXPENSE";

  @IsOptional()
  @IsUUID()
  condominiumId?: string;

  @IsOptional()
  @IsDateString()
  date?: string;
}
