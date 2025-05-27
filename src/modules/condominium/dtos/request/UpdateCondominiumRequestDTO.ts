import { IsEmail, IsOptional, IsString, Length } from 'class-validator';

export class UpdateCondominiumRequestDTO {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  @Length(14, 18)
  cnpj?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  @Length(10, 15)
  phoneNumber?: string;
}
