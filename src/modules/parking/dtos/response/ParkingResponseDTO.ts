export class CreateParkingResponseDTO {
  id: string;
  name: string;
  description?: string | null;
  capacity: number;
  available: boolean;
  condominiumId: string;
  createdAt: Date;
  updatedAt: Date;
}