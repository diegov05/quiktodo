import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Tag {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field()
    color: string;
}
