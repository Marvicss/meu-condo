import { AppError } from "../../../common/apiError/AppError";

export class ApartmentNotFoundException extends AppError {
  constructor(message: string) {
    super(message, 404);
    this.name = "ApartmentNotFoundException";
    Error.captureStackTrace(this, this.constructor);
  }
}