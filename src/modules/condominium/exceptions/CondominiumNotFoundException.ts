import { AppError } from "../../../common/apiError/AppError";

export class CondominiumNotFoundException extends AppError {
  constructor(message: string) {
    super(message, 404);
    this.name = "CondominiumNotFoundException";
    Error.captureStackTrace(this, this.constructor);
  }
}
