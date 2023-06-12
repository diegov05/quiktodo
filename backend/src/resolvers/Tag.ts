import { Field, ID, ObjectType } from 'type-graphql';
import { Todo } from './Todo';

@ObjectType()
export class Tag {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field()
    color: string;

    @Field(() => [Todo])
    todos: Todo[];
}
