import { Router, Request, Response, NextFunction } from "express";
import { UsersController } from "../controllers/UsersController";
import { UserService } from "../services/UserService";
import { UserRepository } from "../repository/UserRepository";
import { PrismaClient } from "@prisma/client";


const prismaClient = new PrismaClient();
const userRepository = new UserRepository(prismaClient);
const userService = new UserService(userRepository);
const usersController = new UsersController(userService);

const router = Router();

router.post("/", (req, res, next) => usersController.create(req, res, next));
router.get("/", (req, res, next) => usersController.listAll(req, res, next));
router.get("/:id", (req, res, next) => usersController.findById(req, res, next));
router.delete("/:id", (req, res, next) => usersController.delete(req, res, next));
router.put("/:id", (req, res, next) => usersController.update(req, res, next));

export default router;