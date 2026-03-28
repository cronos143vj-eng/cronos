import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient();
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

// Lazy initialization using a Proxy to prevent build-time static analysis failures
// when the DATABASE_URL environment variable is missing.
export const prisma = new Proxy({} as PrismaClientSingleton, {
  get: (target, prop) => {
    const client = globalForPrisma.prisma ?? prismaClientSingleton();
    if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = client;
    return (client as any)[prop];
  }
});
