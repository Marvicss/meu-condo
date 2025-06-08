import { AppError } from "../../../common/apiError/AppError";

export class AccountabilityNotFoundException extends AppError {
  constructor(message: string) {
    super(message, 404);
    this.name = "AccountabilityNotFoundException";
    Error.captureStackTrace(this, this.constructor);
  }
}
