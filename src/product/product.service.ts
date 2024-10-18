import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Product, Comment } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  // Fetch all products along with their comments
  async getAllProducts(): Promise<Product[]> {
    return this.prisma.product.findMany({
      include: {
        comments: true,
      },
    });
  }

  // Create a new product
  async createProduct(data: Prisma.ProductCreateInput): Promise<Product> {
    return this.prisma.product.create({
      data,
    });
  }

  // Create a new comment for a product
  async createComment(productId: number, content: string): Promise<Comment> {
    return this.prisma.comment.create({
      data: {
        content,
        product: {
          connect: { id: productId },
        },
      },
    });
  }
}
