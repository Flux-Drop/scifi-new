/*
  Warnings:

  - You are about to drop the column `price` on the `Plan` table. All the data in the column will be lost.
  - You are about to drop the column `validity` on the `Plan` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Plan` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `category` to the `Plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `offers` to the `Plan` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PlanCategory" AS ENUM ('ENTERTAINMENT', 'SPEED');

-- AlterTable
ALTER TABLE "Plan" DROP COLUMN "price",
DROP COLUMN "validity",
ADD COLUMN     "category" "PlanCategory" NOT NULL,
ADD COLUMN     "offers" JSONB NOT NULL,
ADD COLUMN     "ottSubscriptions" JSONB;

-- CreateTable
CREATE TABLE "PlanPricing" (
    "id" TEXT NOT NULL,
    "planId" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "priceWithoutTax" DOUBLE PRECISION NOT NULL,
    "priceWithTax" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PlanPricing_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PlanPricing_planId_duration_key" ON "PlanPricing"("planId", "duration");

-- CreateIndex
CREATE UNIQUE INDEX "Plan_name_key" ON "Plan"("name");

-- AddForeignKey
ALTER TABLE "PlanPricing" ADD CONSTRAINT "PlanPricing_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
