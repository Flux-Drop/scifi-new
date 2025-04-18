-- CreateEnum
CREATE TYPE "BannerStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- AlterTable
ALTER TABLE "Banner" ADD COLUMN     "bannerStatus" "BannerStatus" NOT NULL DEFAULT 'ACTIVE';
