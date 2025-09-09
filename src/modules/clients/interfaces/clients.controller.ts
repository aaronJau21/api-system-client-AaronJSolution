import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateClientDto } from './dtos/create-client.dto';
import {
  CreateClientUseCase,
  GetAllClientUseCase,
} from '../application/use-cases';

@Controller('clients')
export class ClientsController {
  constructor(
    private readonly createClientUseCase: CreateClientUseCase,
    private readonly getAllClientsUseCase: GetAllClientUseCase,
  ) {}

  @Post()
  async create(@Body() data: CreateClientDto) {
    return await this.createClientUseCase.execute(data);
  }

  @Get()
  async getAll(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
  ) {
    return await this.getAllClientsUseCase.execute(+page, +limit);
  }
}
