import { Todo as PrismaTodo } from '@prisma/client';
import { Arg, Ctx, Field, ID, Int, Mutation, ObjectType, Query, Resolver } from "type-graphql";
import { MyContext } from 'src/types';

@ObjectType()
export class Todo {
    @Field(() => ID)
    id: number;

    @Field()
    task: string;

    @Field()
    isCompleted: boolean;

    @Field(() => String, { nullable: true })
    priority: string | null;

    @Field(() => Date, { nullable: true })
    deadline: Date | null;
}

@Resolver()
export class TodoResolver {
    @Query(() => [Todo])
    async todos(
        @Ctx() { prisma }: MyContext
    ): Promise<Todo[]> {
        return await prisma.todo.findMany()
    }

    @Query(() => Todo, { nullable: true })
    async todo(
        @Arg("id", () => Int) id: number,
        @Ctx() { prisma }: MyContext
    ): Promise<Todo | null> {
        return await prisma.todo.findUnique({ where: { id: id } })
    }

    @Mutation(() => Todo)
    async createTodo(
        @Arg("task") task: string,
        @Arg("isCompleted") isCompleted: boolean,
        @Arg("priority", { nullable: true }) priority: string,
        @Arg("deadline", { nullable: true }) deadline: Date,
        @Ctx() { prisma }: MyContext
    ): Promise<Todo> {
        const todo = await prisma.todo.create({
            data: {
                task: task,
                isCompleted: isCompleted,
                priority: priority,
                deadline: deadline,
            }
        })
        return todo
    }

    // @Mutation(() => Todo)
    // async updateTodo(
    //     @Arg('id') id: number,
    //     @Arg('task', () => String, { nullable: true }) todoname: string | undefined,
    //     @Arg('isCompleted', () => Boolean, { nullable: true }) isCompleted: boolean | undefined,
    //     @Arg('deadline', () => Boolean, { nullable: true }) isCompleted: boolean | undefined,
    //     @Ctx() { prisma }: MyContext
    // ): Promise<PrismaTodo | null> {
    //     const todo = await prisma.todo.findUnique({ where: { id: id } })
    //     if (!todo) {
    //         return null
    //     }

    //     if (todoname !== undefined && isCompleted !== undefined &&  ) {
    //         await prisma.todo.update({
    //             where: { id: id },
    //             data: { task: taks, password: password }
    //         })
    //     } else if (todoname !== undefined) {
    //         await prisma.todo.update({
    //             where: { id: id },
    //             data: { todoname: todoname }
    //         })
    //     } else if (password !== undefined) {
    //         await prisma.todo.update({
    //             where: { id: id },
    //             data: { password: password }
    //         })
    //     }

    //     return todo
    // }

    @Mutation(() => Boolean)
    async deleteTodo(
        @Arg("id") id: number,
        @Ctx() { prisma }: MyContext
    ): Promise<Boolean> {
        const todo = await prisma.todo.findUnique({ where: { id: id } })

        if (!todo) {
            return false
        }

        await prisma.todo.delete({ where: { id: id } })
        return true
    }
}
