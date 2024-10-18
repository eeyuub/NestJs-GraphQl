import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
//import { Item } from '@prisma/client';
import { ItemService } from './item.service';
import { Item } from './item.dto';
import { ItemPrice } from './Item-price.dto';
import { InternalServerErrorException, NotFoundException } from '@nestjs/common';

@Resolver('Item')
export class ItemResolver {
  constructor(private readonly itemService: ItemService) {}

  // Get all items
  @Query(() => [Item])
  async getItems() {
    return this.itemService.getAllItems();
  }

  // Add a new item
  @Mutation(() => Item)
  async createItem(@Args('name') name: string, @Args('price') price: number) {
    return this.itemService.createItem({ name, price });
  }

  @Mutation(() => Item)
  async updatePrice(@Args('id') id: number, @Args('newPrice') price: number) {
    return this.itemService.updatePrice(id, price);
  }

  @Mutation(() => Item, { nullable: true })
async getItem(@Args('id') id: number): Promise<Item | null> {
  try {
    const item = await this.itemService.getItem(id);

    if (!item) {
      throw new NotFoundException(`Item with ID ${id} not found`);
    }

    return item;
  } catch (error) {
    console.error(error);

    if (error) {
      throw error; // Rethrow NotFoundException
    }

    // For other types of errors, throw a generic error
    throw new InternalServerErrorException('An error occurred while retrieving the item');
    
  }
}

  @Subscription(() => ItemPrice)
  async getPrice(@Args('id') id: number) {
    const item = await this.itemService.getItem(id);
    if (!item) {
      throw new Error(`Item with id ${id} not found`);
    }
    return { id: item.id, price: item.price };
  }
}
