import { StateClient } from '@prisma/client';

export class ReponseClientDto {
  constructor(
    public id: number,
    public name: string,
    public father_last_name: string,
    public mother_last_name: string,
    public email: string,
    public phone: string,
    public state: StateClient,
  ) {}
}
