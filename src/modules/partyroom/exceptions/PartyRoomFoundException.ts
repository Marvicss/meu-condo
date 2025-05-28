import { AppError } from "../../../common/apiError/AppError";

export class PartyRoomFoundException extends AppError {
  constructor(message: string) {
    super(message, 409);
    this.name = "PartyRoomFoundException";
    Error.captureStackTrace(this, this.constructor);
  }
}
