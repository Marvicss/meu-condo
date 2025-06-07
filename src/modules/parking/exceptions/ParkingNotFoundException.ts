import { AppError } from "../../../common/apiError/AppError";

export class ParkingNotFoundException extends AppError {
  constructor(message: string) {
    super(message, 404);
    this.name = "ParkingNotFoundException";
    Error.captureStackTrace(this, this.constructor);
  }
}
