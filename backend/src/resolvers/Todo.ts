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
}
