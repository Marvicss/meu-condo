import { Router, Request, Response, NextFunction } from "express";
import { AuthController } from "../controller/AuthController";
import { AuthService } from "../service/AuthService";
import { UserRepository } from "../../user/repository/UserRepository";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();
const userRepository = new UserRepository(prismaClient);
const authService = new AuthService(userRepository);
const authController = new AuthController(authService);

const router = Router();

router.post("/login", (req, res, next) => authController.login(req, res, next));

export default router;