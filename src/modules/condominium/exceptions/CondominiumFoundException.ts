import { AppError } from "../../../common/apiError/AppError";

export class CondominiumFoundException extends AppError {
  constructor(message: string) {
    super(message, 409);
    this.name = "CondominiumFoundException";
    Error.captureStackTrace(this, this.constructor);
  }
}
