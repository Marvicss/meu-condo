import { NextFunction, Request, Response } from "express";
import { AppError } from "../apiError/AppError";

export default function exceptionHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
):void {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
    return;
  }

  console.error(err); 

   res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
  return
}
