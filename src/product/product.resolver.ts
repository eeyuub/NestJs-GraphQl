import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from './product.model';
import { Comment } from 'src/comment/comment.model';


@Resolver(of => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  // Query to fetch all products with their comments
  @Query(() => [Product])
  async getAllProducts() {
    return this.productService.getAllProducts();
  }

  // Mutation to create a product
  @Mutation(() => Product)
  async createProduct(
    @Args('name') name: string,
    @Args('price') price: number,
  ) {
    return this.productService.createProduct({ name, price });
  }

  // Mutation to add a comment to a product
  @Mutation(() => Comment)
  async addComment(
    @Args('productId', { type: () => Int }) productId: number,
    @Args('content') content: string,
  ) {
    return this.productService.createComment(productId, content);
  }
}
