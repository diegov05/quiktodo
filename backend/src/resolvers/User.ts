import { User as PrismaUser } from '@prisma/client';
import { Arg, Ctx, Field, ID, Int, Mutation, ObjectType, Query, Resolver } from "type-graphql";
import { MyContext } from 'src/types';

@ObjectType()
export class User {
    @Field(() => ID)
    id: number;

    @Field()
    username: string;

    @Field()
    password: string;
}

@Resolver()
export class UserResolver {
    @Query(() => [User])
    users(
        @Ctx() ctx: MyContext
    ): Promise<PrismaUser[]> {
        return ctx.prisma.user.findMany()
    }

    @Query(() => User, { nullable: true })
    user(
        @Arg('id', () => Int) id: number,
        @Ctx() ctx: MyContext
    ): Promise<PrismaUser | null> {
        return ctx.prisma.user.findUnique({
            where: {
                id: id
            }
        })
    }

    @Mutation(() => User)
    async createUser(
        @Arg('username') username: string,
        @Arg('password') password: string,
        @Ctx() ctx: MyContext
    ): Promise<PrismaUser> {
        const user = await ctx.prisma.user.create({
            data: {
                username: username,
                password: password
            }
        })
        return user
    }

    @Mutation(() => User)
    async updateUser(
        @Arg('id') id: number,
        @Arg('username', () => String, { nullable: true }) username: string | undefined,
        @Arg('password', () => String, { nullable: true }) password: string | undefined,
        @Ctx() { prisma }: MyContext
    ): Promise<PrismaUser | null> {
        const user = await prisma.user.findUnique({ where: { id: id } })
        if (!user) {
            return null
        }

        if (username !== undefined && password !== undefined) {
            await prisma.user.update({
                where: { id: id },
                data: { username: username, password: password }
            })
        } else if (username !== undefined) {
            await prisma.user.update({
                where: { id: id },
                data: { username: username }
            })
        } else if (password !== undefined) {
            await prisma.user.update({
                where: { id: id },
                data: { password: password }
            })
        }

        return user
    }
}