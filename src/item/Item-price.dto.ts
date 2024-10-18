import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class ItemPrice {

    @Field()
    price:number;
}