import { NextFunction, Request, Response } from "express";
import { AppError } from "../apiError/AppError";

export default function exceptionHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  console.error(err); 

  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
}
