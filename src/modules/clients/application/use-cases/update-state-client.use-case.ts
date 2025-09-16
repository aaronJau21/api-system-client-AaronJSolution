import { Inject } from '@nestjs/common';
import { CLIENT_REPOSITORY } from '../../domain/client.entity';
import type { IClientRepository } from '../../domain/client.repository';

export class UpdateStateClientUseCase {
  constructor(
    @Inject(CLIENT_REPOSITORY)
    private readonly clientRepository: IClientRepository,
  ) {}

  public async execute(id: number, state: string) {
    return await this.clientRepository.updateState(id, state);
  }
}
