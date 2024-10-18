import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Comment } from 'src/comment/comment.model';

@ObjectType()
export class Product {
  @Field(type => Int)
  id: number;

  @Field()
  name: string;

  @Field(type => Float)
  price: number;

  @Field(type => [Comment], { nullable: 'items' })
  comments?: Comment[];
}
