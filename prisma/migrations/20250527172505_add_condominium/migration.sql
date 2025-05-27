-- CreateTable
CREATE TABLE "Condominium" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,

    CONSTRAINT "Condominium_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Condominium_cnpj_key" ON "Condominium"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "Condominium_email_key" ON "Condominium"("email");
