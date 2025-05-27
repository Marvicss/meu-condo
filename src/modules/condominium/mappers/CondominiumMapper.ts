import { Condominium } from "@prisma/client";
import { CondominiumResponseDTO } from "../dtos/response/CondominiumResponseDTO";

export class CondominiumMapper {
  static toCondominiumResponseDTO(condo: Condominium): CondominiumResponseDTO {
    return {
      id: condo.id,
      name: condo.name,
      cnpj: condo.cnpj,
      address: condo.address,
      email: condo.email,
      phoneNumber: condo.phoneNumber,
      createdAt: condo.createdAt,
      updatedAt: condo.updatedAt,
    };
  }
}
