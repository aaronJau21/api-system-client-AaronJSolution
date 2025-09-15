import { Inject } from '@nestjs/common';
import { CLIENT_REPOSITORY, ClientEntity } from '../../domain/client.entity';
import type { IClientRepository } from '../../domain/client.repository';
import { CreateClientDto } from '../../interfaces/dtos/create-client.dto';

export class CreateClientUseCase {
  constructor(
    @Inject(CLIENT_REPOSITORY)
    private readonly clientRepository: IClientRepository,
  ) {}

  async execute(data: CreateClientDto) {
    const client = new ClientEntity(
      undefined,
      data.name,
      data.last_name,
      data.email,
      data.phone,
      data.state,
      data.company_name,
    );
    return await this.clientRepository.create(client);
  }
}
