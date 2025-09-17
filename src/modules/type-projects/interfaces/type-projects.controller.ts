import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTypeProjectsUseCase } from '../application/use-case/create-type-projects.use-case';
import { CreateProductTypeDto } from './dtos/create-product-type.dto';

@Controller('type-projects')
export class TypeProjectsController {
  constructor(
    private readonly createTypeProjectsUseCase: CreateTypeProjectsUseCase,
  ) {}

  @Post()
  async create(@Body() data: CreateProductTypeDto) {
    return await this.createTypeProjectsUseCase.execute(data);
  }
}
