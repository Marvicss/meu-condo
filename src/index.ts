import express from "express";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import exceptionHandler from "./common/middlewares/ExceptionHandler";
import userRoutes from "./modules/user/routes/userRoutes";
import authRoutes from "./modules/auth/routes/authRoutes";

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(express.json());


app.get("/test", (req, res) => {
  res.json({ message: "Rota de teste funcionando!" });
});

app.use("/users", userRoutes);
app.use("/auth", authRoutes);

app.use(exceptionHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
