import { Inject } from '@nestjs/common';
import { CLIENT_REPOSITORY } from '../../domain/client.entity';
import type { IClientRepository } from '../../domain/client.repository';

export class GetAllClientUseCase {
  constructor(
    @Inject(CLIENT_REPOSITORY)
    private readonly clientRepository: IClientRepository,
  ) {}

  public async execute() {
    return await this.clientRepository.getAll();
  }
}
