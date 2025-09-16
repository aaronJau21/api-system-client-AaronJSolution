import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateClientDto } from './dtos/create-client.dto';
import {
  CreateClientUseCase,
  GetAllClientUseCase,
  UpdateStateClientUseCase,
} from '../application/use-cases';
import { UpdateStateClientDto } from './dtos/update-state-client.dto';

@Controller('clients')
export class ClientsController {
  constructor(
    private readonly createClientUseCase: CreateClientUseCase,
    private readonly getAllClientsUseCase: GetAllClientUseCase,
    private readonly updateStateClientUseCase: UpdateStateClientUseCase,
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

  @Patch('state/:id')
  async updateState(
    @Body() data: UpdateStateClientDto,
    @Param('id') id: string,
  ) {
    return await this.updateStateClientUseCase.execute(+id, data);
  }
}
