import { AppError } from "../../../common/apiError/AppError";

export class UserFoundException extends AppError {
  constructor(message: string) {
    super(message, 409);
    this.name = "UserFoundException";
    Error.captureStackTrace(this, this.constructor);
  }
}
