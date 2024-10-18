import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Item } from '@prisma/client';

@Injectable()
export class ItemService {
  constructor(private prisma: PrismaService) {}

  // Get all items from the database
  async getAllItems(): Promise<Item[]> {
    return this.prisma.item.findMany();
  }

  async getItem(id:number): Promise<Item | null> {
    return this.prisma.item.findUnique({
        where:{id}
    });
  }

  // Create a new item
  async createItem(data: Prisma.ItemCreateInput): Promise<Item> {
    return this.prisma.item.create({
      data,
    });
  }

  async updatePrice(id: number, newPrice: number): Promise<Item> {
    return this.prisma.item.update({
      where: { id },
      data: { price: newPrice },
    });
  }

  
}
