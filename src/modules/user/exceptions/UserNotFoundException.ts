import { AppError } from "../../../common/apiError/AppError";

export class UserNotFoundException extends AppError {
  constructor(message: string) {
    super(message, 404);
    this.name = "UserFoundException";
    Error.captureStackTrace(this, this.constructor);
  }
}
