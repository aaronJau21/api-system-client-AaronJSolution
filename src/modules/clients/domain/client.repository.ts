import { IBaseRepository } from 'src/shared/global.repository';
import { ReponseClientDto } from '../infrastructure/responseDto/response-client.dto.';
import { ClientEntity } from './client.entity';

export interface IClientRepository extends IBaseRepository<ClientEntity> {
  getAll(
    page: number,
    limit: number,
  ): Promise<{
    data: ReponseClientDto[];
    meta: { total: number; page: number; lastPage: number };
  }>;
  findByEmail(email: string): Promise<ReponseClientDto | null>;
  updateState(id: number, state: ClientEntity): Promise<ReponseClientDto>;
}
