import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createProductDto: Prisma.ProductCreateInput) {
    return this.databaseService.product.create({ data: createProductDto });
  }

  async findAll() {
    return this.databaseService.product.findMany({});
  }

  async findOne(id: number) {
    return this.databaseService.product.findUnique({
      where: { id },
      include: { description: true, reviews: true, tags: true },
    });
  }

  update(id: number, updateProductDto: Prisma.ProductUpdateInput) {
    return this.databaseService.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  remove(id: number) {
    return this.databaseService.product.delete({ where: { id } });
  }
}
