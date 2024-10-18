import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ItemResolver } from './item/item.resolver';
import { ItemModule } from './item/item.module';
import { PrismaService } from './prisma/prisma.service';
import { ProductModule } from './product/product.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver:ApolloDriver,
      autoSchemaFile: join(process.cwd(),'src/schema.gql'),
    }),
    ItemModule,
    ProductModule,
    CommentModule,
  ],
  controllers: [],
  providers: [AppService,PrismaService],
})
export class AppModule {}
