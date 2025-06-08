
import { Router } from "express";
import { ApartmentRepository } from "../repository/ApartmentReposotiory";
import { ApartmentService } from "../service/ApartmentService";
import { ApartmentController } from "../controller/ApartmentController";
import { authenticateJWT } from "../../../common/middlewares/authenticateJwt";
import { PrismaClient } from "@prisma/client";


const prismaClient = new PrismaClient();
const apartmentRepository = new ApartmentRepository(prismaClient);
const apartmentService = new ApartmentService(apartmentRepository);
const apartmentController = new ApartmentController(apartmentService);

const router = Router();

router.get("/:id", authenticateJWT ,(req,res,next) => apartmentController.findById(req,res,next));
router.get("/condominium/:id", authenticateJWT, (req,res,next)=> apartmentController.findAllByCondominium(req, res, next))
router.post("/", authenticateJWT, (req, res, next)=> apartmentController.create(req, res, next));
router.put("/:id", authenticateJWT, (req, res, next)=> apartmentController.update(req, res, next));
router.delete("/:id", authenticateJWT, (req, res, next)=> apartmentController.delete(req, res, next));

export default router;