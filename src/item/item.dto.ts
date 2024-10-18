import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class Item {

    @Field()
    id:number;

    @Field()
    name:string;

    @Field()
    price:number;
}