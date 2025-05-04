import { PrismaClient } from "@prisma/client";

const prisma: PrismaClient =
  process.env.NODE_ENV === "production"
    ? new PrismaClient()
    : (() => {
        let cachedPrisma: PrismaClient | undefined;
        if (!cachedPrisma) {
          cachedPrisma = new PrismaClient();
        }
        return cachedPrisma;
      })();

export default prisma;