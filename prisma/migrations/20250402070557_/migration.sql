-- CreateTable
CREATE TABLE "PartnerDetailsSection" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "partnerId" TEXT NOT NULL,

    CONSTRAINT "PartnerDetailsSection_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PartnerDetailsSection" ADD CONSTRAINT "PartnerDetailsSection_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "Partner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
