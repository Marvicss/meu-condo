-- CreateTable
CREATE TABLE "PartyRoom" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "capacity" INTEGER NOT NULL,
    "available" BOOLEAN NOT NULL DEFAULT true,
    "condominiumId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PartyRoom_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PartyRoom" ADD CONSTRAINT "PartyRoom_condominiumId_fkey" FOREIGN KEY ("condominiumId") REFERENCES "Condominium"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
