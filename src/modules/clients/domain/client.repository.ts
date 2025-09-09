import { ReponseClientDto } from '../infrastructure/responseDto/response-client.dto.';
import { ClientEntity } from './client.entity';

export interface IClientRepository {
  getAll(
    page: number,
    limit: number,
  ): Promise<{
    data: ReponseClientDto[];
    meta: { total: number; page: number; lastPage: number };
  }>;
  findByEmail(email: string): Promise<ReponseClientDto | null>;
  create(client: ClientEntity): Promise<ReponseClientDto>;
  findById(id: number): Promise<ClientEntity | null>;
  update(client: ClientEntity): Promise<ClientEntity>;
  delete(id: number): Promise<void>;
}
