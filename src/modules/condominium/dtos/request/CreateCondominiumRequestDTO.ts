import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateCondominiumRequestDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @Length(14, 18, { message: 'CNPJ deve ter entre 14 e 18 caracteres (com ou sem máscara)' })
  cnpj: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(10, 15, { message: 'Número de telefone inválido' })
  phoneNumber: string;
}
