export class AccountabilityResponseDTO {
  id: string;
  amount: number;
  title: string;
  type: "INCOME" | "EXPENSE";
  condominiumId: string;
  description: string | null;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}
