import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTypeProjectsUseCase } from '../application/use-case/create-type-projects.use-case';
import { CreateProductTypeDto } from './dtos/create-product-type.dto';
import { GetAllTypeProjectsUseCase } from '../application/use-case';

@Controller('type-projects')
export class TypeProjectsController {
  constructor(
    private readonly createTypeProjectsUseCase: CreateTypeProjectsUseCase,
    private readonly getAllTypeProjectsUseCase: GetAllTypeProjectsUseCase,
  ) {}

  @Post()
  async create(@Body() data: CreateProductTypeDto) {
    return await this.createTypeProjectsUseCase.execute(data);
  }

  @Get()
  async getAll() {
    return await this.getAllTypeProjectsUseCase.execute();
  }
}
