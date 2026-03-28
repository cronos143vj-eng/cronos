import { PrismaClient } from '@prisma/client';

let prismaClient: PrismaClient | undefined;

function createPrismaClient() {
  return new PrismaClient();
}

function getPrismaClient() {
  if (!prismaClient) {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL is not set. Prisma client cannot be initialized during build. Set DATABASE_URL in Vercel or avoid DB access at build time.');
    }
    if (process.env.NODE_ENV === 'production') {
      prismaClient = createPrismaClient();
    } else {
      const globalAny = globalThis as any;
      if (!globalAny.__prisma) globalAny.__prisma = createPrismaClient();
      prismaClient = globalAny.__prisma;
    }
  }
  return prismaClient;
}

export const prisma = new Proxy({} as PrismaClient, {
  get(_, prop) {
    const client = getPrismaClient();
    return (client as any)[prop];
  }
});
