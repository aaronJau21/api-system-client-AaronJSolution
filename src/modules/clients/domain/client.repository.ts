import { ReponseClientDto } from '../infrastructure/responseDto/response-client.dto.';
import { ClientEntity } from './client.entity';

export interface IClientRepository {
  getAll(): Promise<ReponseClientDto[]>;
  findByEmail(email: string): Promise<ReponseClientDto | null>;
  create(client: ClientEntity): Promise<ReponseClientDto>;
  findById(id: number): Promise<ClientEntity | null>;
  update(client: ClientEntity): Promise<ClientEntity>;
  delete(id: number): Promise<void>;
}
