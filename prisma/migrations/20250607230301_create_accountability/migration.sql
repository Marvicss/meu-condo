-- CreateEnum
CREATE TYPE "AccountabilityType" AS ENUM ('INCOME', 'EXPENSE');

-- CreateTable
CREATE TABLE "Accountability" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "amount" DECIMAL(65,30) NOT NULL,
    "type" "AccountabilityType" NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "condominiumId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Accountability_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Accountability" ADD CONSTRAINT "Accountability_condominiumId_fkey" FOREIGN KEY ("condominiumId") REFERENCES "Condominium"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
