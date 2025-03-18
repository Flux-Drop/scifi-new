-- AlterTable
ALTER TABLE "User" ADD COLUMN     "name" TEXT DEFAULT CONCAT(firstName, ' ', lastName);
