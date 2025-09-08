import { StateClient } from '@prisma/client';

export const CLIENT_REPOSITORY = Symbol('CLIENT_REPOSITORY');

export class ClientEntity {
  constructor(
    public id: number | undefined,
    public name: string,
    public father_last_name: string,
    public mother_last_name: string,
    public email: string,
    public phone: string,
    public state: StateClient,
    public password?: string | null | undefined,
  ) {}
}
