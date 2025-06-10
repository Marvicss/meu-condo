import { PrismaClient } from "@prisma/client";
import { NewsRepository } from "../repository/NewsRepository";
import { NewsService } from "../service/NewsService";
import { NewsController } from "../controller/NewsController";
import { Router } from "express";
import { authenticateJWT } from "../../../common/middlewares/authenticateJwt";


const prismaClient = new PrismaClient();
const newsRepository = new NewsRepository(prismaClient);
const newsService = new NewsService(newsRepository);
const newsController = new NewsController(newsService);

const router = Router();


router.get("/", authenticateJWT,(req, res, next) => newsController.findAll(req,res,next));
router.get("/:id",authenticateJWT, (req, res, next) => newsController.findById(req,res,next));
router.get("/condominium/:condoId", authenticateJWT,(req, res, next) => newsController.findByCondo(req,res,next));
router.post("/", authenticateJWT,(req, res, next) => newsController.create(req,res,next));
router.put("/:id",authenticateJWT, (req, res, next) => newsController.update(req,res,next));
router.delete("/:id", authenticateJWT,(req, res, next) => newsController.delete(req,res,next));

export default router;