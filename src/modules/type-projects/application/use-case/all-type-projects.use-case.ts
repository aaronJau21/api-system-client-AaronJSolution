import { Inject } from '@nestjs/common';
import { PRODUCT_TYPE } from '../../domain/product-type.entity';
import type { ITypeProjectsRepository } from '../../domain/type-projects.repository';

export class GetAllTypeProjectsUseCase {
  constructor(
    @Inject(PRODUCT_TYPE)
    private readonly typeProjectsRepository: ITypeProjectsRepository,
  ) {}

  async execute() {
    return await this.typeProjectsRepository.getAll();
  }
}
