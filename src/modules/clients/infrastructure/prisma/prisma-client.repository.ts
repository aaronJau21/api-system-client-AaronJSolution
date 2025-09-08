import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClientEntity } from '../../domain/client.entity';
import { IClientRepository } from '../../domain/client.repository';
import { Clients as PrismaClient } from '@prisma/client';
import { ReponseClientDto } from '../responseDto/response-client.dto.';

type ClientWithoutPassword = Omit<PrismaClient, 'password'>;

@Injectable()
export class PrismaClientRepository implements IClientRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<ReponseClientDto[]> {
    const users = await this.prisma.clients.findMany({
      select: {
        id: true,
        name: true,
        father_last_name: true,
        mother_last_name: true,
        email: true,
        phone: true,
        state: true,
        password: false,
      },
    });
    return users.map(
      (user) =>
        new ReponseClientDto(
          user.id,
          user.name,
          user.father_last_name,
          user.mother_last_name,
          user.email,
          user.phone,
          user.state,
        ),
    );
  }

  findByEmail(email: string): Promise<ReponseClientDto | null> {
    throw new Error('Method not implemented.');
  }
  async create(client: ClientEntity): Promise<ReponseClientDto> {
    const newClient = await this.prisma.clients.create({
      data: {
        name: client.name,
        father_last_name: client.father_last_name,
        mother_last_name: client.mother_last_name,
        email: client.email,
        phone: client.phone,
        state: client.state,
      },
    });

    return this.toEntity(newClient);
  }
  findById(id: number): Promise<ClientEntity | null> {
    throw new Error('Method not implemented.');
  }
  update(client: ClientEntity): Promise<ClientEntity> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }

  private toEntity(client: PrismaClient): ReponseClientDto {
    return new ReponseClientDto(
      client.id,
      client.name,
      client.father_last_name,
      client.mother_last_name,
      client.email,
      client.phone,
      client.state,
    );
  }
}
