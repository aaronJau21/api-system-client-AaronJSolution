import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClientEntity } from '../../domain/client.entity';
import { IClientRepository } from '../../domain/client.repository';

import { ReponseClientDto } from '../responseDto/response-client.dto.';
import { Clients, StateClient } from '@prisma/client';

@Injectable()
export class PrismaClientRepository implements IClientRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(
    page: number = 1,
    limit: number = 10,
  ): Promise<{
    data: ReponseClientDto[];
    meta: { total: number; page: number; lastPage: number };
  }> {
    const skip = (page - 1) * limit;

    const [clients, total] = await Promise.all([
      this.prisma.clients.findMany({
        skip,
        take: limit,
        select: {
          id: true,
          name: true,
          last_name: true,
          email: true,
          phone: true,
          state: true,
          password: false,
          company_name: true,
        },
      }),
      this.prisma.clients.count(),
    ]);
    return {
      data: clients.map(
        (client) =>
          new ReponseClientDto(
            client.id,
            client.name,
            client.last_name,
            client.email,
            client.phone,
            client.state,
            client.company_name,
          ),
      ),
      meta: {
        total,
        page,
        lastPage: Math.ceil(total / limit),
      },
    };
  }

  findByEmail(email: string): Promise<ReponseClientDto | null> {
    throw new Error('Method not implemented.');
  }
  async create(client: ClientEntity): Promise<ReponseClientDto> {
    const newClient = await this.prisma.clients.create({
      data: {
        name: client.name,
        last_name: client.last_name,
        email: client.email,
        phone: client.phone,
        state: client.state,
        company_name: client.company_name,
      },
    });

    return this.toEntity(newClient);
  }
  async findById(id: number): Promise<ClientEntity | null> {
    const client = await this.prisma.clients.findUnique({
      where: { id },
    });

    if (!client) return null;

    return new ClientEntity(
      client.id,
      client.name,
      client.last_name,
      client.email,
      client.phone,
      client.state,
      client.company_name,
      client.password,
    );
  }

  async updateState(id: number, data: ClientEntity): Promise<ReponseClientDto> {
    const updatedClient = await this.prisma.clients.update({
      where: { id },
      data: {
        state: data.state,
        password: data.password,
      },
    });

    return this.toEntity(updatedClient);
  }

  async update(id: number, client: ClientEntity): Promise<ClientEntity> {
    throw new Error('Method not implemented.');
  }
  async delete(id: number): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  private toEntity(client: Clients): ReponseClientDto {
    return new ReponseClientDto(
      client.id,
      client.name,
      client.last_name,
      client.email,
      client.phone,
      client.state,
      client.company_name,
    );
  }
}
