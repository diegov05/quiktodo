import { Ctx, Field, ID, ObjectType, Query, Resolver } from "type-graphql";
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
        @Ctx() ctx: MyContext
    ): Promise<Todo[]> {
        return await ctx.prisma.todo.findMany()
    }
}
