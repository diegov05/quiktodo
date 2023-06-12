import { Prisma, PrismaClient } from "@prisma/client";

export type MyContext = {
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>
}