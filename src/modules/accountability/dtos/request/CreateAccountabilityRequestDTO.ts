import { IsDateString, IsEnum, IsNotEmpty, IsNumber, isString, IsUUID } from "class-validator";
import { AccountabilityType } from "../../enums/AccountabilityType";

export class CreateAccountabilityRequestDTO {
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @IsEnum(AccountabilityType)
  type: AccountabilityType;

  @IsNotEmpty()
  @IsUUID()
  condominiumId: string;

  @IsNotEmpty()
  @IsDateString()
  date: string;

  @IsNotEmpty()
  description: string;
}