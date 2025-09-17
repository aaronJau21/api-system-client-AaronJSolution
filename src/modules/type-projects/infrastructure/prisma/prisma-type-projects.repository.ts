import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductTypeEntity } from '../../domain/product-type.entity';
import { CreateProductTypeDto } from '../../interfaces/dtos/create-product-type.dto';
import { ResponseTypeProjectsDto } from '../dto/response.dto';
import type { ITypeProjectsRepository } from '../../domain/type-projects.repository';

@Injectable()
export class TypeProjectsRepository implements ITypeProjectsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateProductTypeDto): Promise<ProductTypeEntity> {
    const newTypeProject = await this.prisma.type_projects.create({
      data: {
        name: data.name,
        user_id: data.user_id!,
      },
    });

    return new ResponseTypeProjectsDto(
      newTypeProject.id,
      newTypeProject.name,
      newTypeProject.user_id,
    );
  }

  async findById(id: number): Promise<ProductTypeEntity | null> {
    throw new Error('Method not implemented.');
  }

  async update(
    id: number,
    item: ProductTypeEntity,
  ): Promise<ProductTypeEntity | null> {
    throw new Error('Method not implemented.');
  }

  async delete(id: number): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
