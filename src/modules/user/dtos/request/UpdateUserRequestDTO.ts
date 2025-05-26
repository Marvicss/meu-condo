import { UserType } from "@prisma/client";
import { IsEmail, IsEnum, IsOptional, IsString, Length } from "class-validator";

export class UpdateUserRequestDTO {
  @IsString({ message: "Full name must be a string" })
  @Length(3, 100, { message: "Full name must be between 3 and 100 characters" })
  fullName: string;


  @IsEmail({}, { message: "Invalid email format" })
  email: string;


  @IsOptional()
  @IsString({ message: "Phone number must be a string" })
  phoneNumber?: string;


}
