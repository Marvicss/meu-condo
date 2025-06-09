import express from "express";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import exceptionHandler from "./common/middlewares/ExceptionHandler";
import userRoutes from "./modules/user/routes/userRoutes";
import authRoutes from "./modules/auth/routes/authRoutes";
import condominiumRoutes from "./modules/condominium/routes/condominiumRoutes";
import partyroomRoutes from "./modules/partyroom/routes/partyroomRoutes";
import parkingRoutes from "./modules/parking/routes/parkingRoutes";
import accountabilityRoutes from "./modules/accountability/routes/accountabilityRoutes";
import apartmentRoutes from "./modules/apartment/routes/apartmentRoutes";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/condominiums", condominiumRoutes);
app.use("/partyrooms", partyroomRoutes);
app.use("/parkings", parkingRoutes);
app.use("/accountabilities", accountabilityRoutes);
app.use("/apartments", apartmentRoutes);

app.use(exceptionHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});


export default app;