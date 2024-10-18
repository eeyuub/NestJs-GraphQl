import { Field, ObjectType, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class Item {
  @Field(type => Int)
  id: number;

  @Field()
  name: string;

  @Field(type => Float)
  price: number;
}
