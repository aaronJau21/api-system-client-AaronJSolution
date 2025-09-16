import { Inject, NotFoundException } from '@nestjs/common';
import { CLIENT_REPOSITORY } from '../../domain/client.entity';
import type { IClientRepository } from '../../domain/client.repository';
import { UpdateStateClientDto } from '../../interfaces/dtos/update-state-client.dto';

export class UpdateStateClientUseCase {
  constructor(
    @Inject(CLIENT_REPOSITORY)
    private readonly clientRepository: IClientRepository,
  ) {}

  public async execute(id: number, state: UpdateStateClientDto) {
    const client = await this.clientRepository.findById(id);
    if (!client) {
      throw new NotFoundException('Client not found');
    }

    client.state = state.state;

    return await this.clientRepository.updateState(id, client);
  }
}
