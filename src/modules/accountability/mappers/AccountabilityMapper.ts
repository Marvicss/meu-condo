import { Accountability } from "@prisma/client";
import { AccountabilityResponseDTO } from "../dtos/response/AccountabilityResponseDTO";

export class AccountabilityMapper {
  static toResponseDTO(record: Accountability): AccountabilityResponseDTO {
    return {
      id: record.id,
      title: record.title,
      amount: record.amount.toNumber(),
      type: record.type,
      condominiumId: record.condominiumId,
      description: record.description,
      date: record.date,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
    };
  }
}
