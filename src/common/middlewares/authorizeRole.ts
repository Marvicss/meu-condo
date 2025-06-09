import { Request, Response, NextFunction } from "express";

export function authorizeRole(...roles: string[]) {
  return function (req: Request, res: Response, next: NextFunction): void {
    const user = (req as any).user;

    if (!user || !roles.includes(user.userType)) {
      res.status(403).json({ message: "Acesso negado" });
      return;
    }

    next();
  };
}