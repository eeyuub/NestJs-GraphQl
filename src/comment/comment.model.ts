import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Comment {
  @Field(type => Int)
  id: number;

  @Field()
  content: string;

  @Field(type => Int)
  productId: number;
}
