import { Router, Request, Response, NextFunction } from "express";
import { UsersController } from "../controllers/UsersController";
import { UserService } from "../services/UserService";
import { UserRepository } from "../repository/UserRepository";
import { PrismaClient } from "@prisma/client";
import { authenticateJWT } from "../../../common/middlewares/authenticateJwt";
import { authorizeRole } from "../../../common/middlewares/authorizeRole";


const prismaClient = new PrismaClient();
const userRepository = new UserRepository(prismaClient);
const userService = new UserService(userRepository);
const usersController = new UsersController(userService);

const router = Router();

router.post("/", (req, res, next) => usersController.create(req, res, next));
router.get("/", authenticateJWT, authorizeRole("ADMIN"),  (req, res, next) => usersController.listAll(req, res, next));
router.get("/:id", authenticateJWT, authorizeRole("ADMIN"), (req, res, next) => usersController.findById(req, res, next));
router.delete("/:id", authenticateJWT, authorizeRole("ADMIN"), (req, res, next) => usersController.delete(req, res, next));
router.put("/:id", authenticateJWT, authorizeRole("ADMIN"), (req, res, next) => usersController.update(req, res, next));

export default router;