import { Module } from '@nestjs/common';
import { ItemResolver } from './item.resolver';
import { ItemService } from './item.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [ItemResolver, ItemService, PrismaService],
})
export class ItemModule {}
