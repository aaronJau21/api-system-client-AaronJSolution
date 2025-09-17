import { Inject } from '@nestjs/common';
import {
  PRODUCT_TYPE,
  ProductTypeEntity,
} from '../../domain/product-type.entity';
import type { ITypeProjectsRepository } from '../../domain/type-projects.repository';
import { CreateProductTypeDto } from '../../interfaces/dtos/create-product-type.dto';

export class CreateTypeProjectsUseCase {
  constructor(
    @Inject(PRODUCT_TYPE)
    private readonly typeProjectsRepository: ITypeProjectsRepository,
  ) {}

  async execute(data: CreateProductTypeDto) {
    const type_project = new ProductTypeEntity(
      undefined,
      data.name,
      data.user_id!,
    );
    return await this.typeProjectsRepository.create(type_project);
  }
}
